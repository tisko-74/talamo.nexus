// Laboratório de SQL: SQLite (sql.js) rodando no navegador.
// Nada sai do computador: as tabelas ficam na memória da aba.

const $ = (s) => document.querySelector(s);
const BASE = ["estados", "municipios"];
let SQL, db, csvBase = {}, atual = 0, feitos = lerFeitos();

// ---------- CSV ----------
// Lê texto CSV (com aspas) e devolve uma lista de linhas, cada uma uma lista de valores.
function lerCSV(texto, sep) {
  const linhas = [];
  let linha = [], campo = "", aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) {
      if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') aspas = false;
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === sep) { linha.push(campo); campo = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && texto[i + 1] === "\n") i++;
      linha.push(campo); linhas.push(linha); linha = []; campo = "";
    } else campo += c;
  }
  if (campo !== "" || linha.length) { linha.push(campo); linhas.push(linha); }
  return linhas.filter((l) => l.some((v) => v.trim() !== ""));
}

// Separador mais provável: o que mais aparece na primeira linha.
function acharSeparador(texto) {
  const l = texto.split("\n", 1)[0];
  return [";", ",", "\t"].sort((a, b) => l.split(b).length - l.split(a).length)[0];
}

// Nome de coluna seguro para SQL: minúsculas, sem acento, só letras, números e _.
function nomeSeguro(t, i) {
  const n = t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  return !n ? "coluna_" + (i + 1) : /^[0-9]/.test(n) ? "c_" + n : n;
}

// Cria a tabela a partir do CSV, descobrindo o tipo de cada coluna.
function criarTabela(nome, texto, sep) {
  const [cab, ...dados] = lerCSV(texto.replace(/^﻿/, ""), sep);
  const usados = {};
  const cols = cab.map((t, i) => {
    let n = nomeSeguro(t, i);
    while (usados[n]) n += "_";
    usados[n] = true;
    return n;
  });
  const decimalVirgula = sep === ";";
  const num = (v) => {
    v = v.trim();
    if (decimalVirgula && /^-?\d+,\d+$/.test(v)) v = v.replace(",", ".");
    return /^-?\d+(\.\d+)?$/.test(v) ? Number(v) : null;
  };
  const tipos = cols.map((_, i) => {
    const vals = dados.map((l) => (l[i] ?? "").trim()).filter((v) => v !== "");
    if (vals.length && vals.every((v) => num(v) !== null)) {
      return vals.every((v) => Number.isInteger(num(v)) && !/[.,]/.test(v)) ? "INTEGER" : "REAL";
    }
    return "TEXT";
  });
  db.run(`DROP TABLE IF EXISTS "${nome}"`);
  db.run(`CREATE TABLE "${nome}" (${cols.map((c, i) => `"${c}" ${tipos[i]}`).join(", ")})`);
  const ins = db.prepare(`INSERT INTO "${nome}" VALUES (${cols.map(() => "?").join(",")})`);
  db.run("BEGIN");
  for (const l of dados) {
    ins.run(cols.map((_, i) => {
      const v = (l[i] ?? "").trim();
      if (v === "") return null;
      return tipos[i] === "TEXT" ? v : num(v);
    }));
  }
  db.run("COMMIT");
  ins.free();
  return { linhas: dados.length, cols, tipos };
}

// ---------- Banco ----------
async function carregarBase() {
  db = new SQL.Database();
  for (const t of BASE) criarTabela(t, csvBase[t], ",");
  mostrarTabelas();
}

function mostrarTabelas() {
  const tabs = db.exec("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name")[0];
  $("#tabelas").innerHTML = (tabs ? tabs.values : []).map(([t]) => {
    const cols = db.exec(`PRAGMA table_info("${t}")`)[0].values;
    const n = db.exec(`SELECT COUNT(*) FROM "${t}"`)[0].values[0][0];
    return `<details${BASE.includes(t) ? " open" : ""}><summary><b>${esc(t)}</b> <span class="dim">${n.toLocaleString("pt-BR")} linhas</span></summary>
      <ul>${cols.map((c) => `<li><code>${esc(c[1])}</code> <span class="dim">${esc(c[2]) || "—"}</span></li>`).join("")}</ul></details>`;
  }).join("");
}

// Roda o SQL e devolve o último resultado (colunas e linhas).
function rodar(sql) {
  const r = db.exec(sql);
  return r.length ? r[r.length - 1] : { columns: [], values: [] };
}

function traduzirErro(m) {
  const regras = [
    [/no such table: (\S+)/, "a tabela <b>$1</b> não existe. Confira o nome na lista de tabelas."],
    [/no such column: (\S+)/, "a coluna <b>$1</b> não existe. Confira o nome (e se está na tabela certa)."],
    [/ambiguous column name: (\S+)/, "a coluna <b>$1</b> existe em mais de uma tabela; diga de qual (ex.: <code>m.$1</code>)."],
    [/near "(.*?)": syntax error/, "erro de escrita perto de <b>$1</b>. Veja vírgulas, aspas e a ordem das cláusulas."],
    [/incomplete input/, "o comando está incompleto (faltou fechar aspas ou parênteses?)."],
    [/misuse of (aggregate|window) function/, "função de resumo usada no lugar errado. Para filtrar depois de agrupar, use <code>HAVING</code>."],
    [/unrecognized token: "(.*?)"/, "símbolo não reconhecido: <b>$1</b> (aspas sem fechar?)."],
  ];
  for (const [re, pt] of regras) {
    const a = m.match(re);
    if (a) return pt.replace(/\$1/g, esc(a[1] ?? ""));
  }
  return "o banco recusou o comando.";
}

// ---------- Tela ----------
function esc(v) {
  return String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function tabelaHTML(r) {
  const LIM = 500;
  if (!r.columns.length) return `<p class="dim">Comando executado. Nenhuma linha para mostrar.</p>`;
  const linhas = r.values.slice(0, LIM).map((l) =>
    `<tr>${l.map((v) => `<td${typeof v === "number" ? ' class="n"' : ""}>${v === null ? '<span class="dim">NULL</span>' : esc(typeof v === "number" ? v.toLocaleString("pt-BR", { maximumFractionDigits: 6, useGrouping: false }) : v)}</td>`).join("")}</tr>`).join("");
  return `<p class="dim">${r.values.length.toLocaleString("pt-BR")} linha(s)${r.values.length > LIM ? `, mostrando as ${LIM} primeiras` : ""}.</p>
    <div class="rolagem"><table><thead><tr>${r.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${linhas}</tbody></table></div>`;
}

function executar() {
  const sql = $("#sql").value;
  const t0 = performance.now();
  try {
    const r = rodar(sql);
    $("#resultado").innerHTML = tabelaHTML(r) + `<p class="dim">${Math.round(performance.now() - t0)} ms</p>`;
    mostrarTabelas();
  } catch (e) {
    $("#resultado").innerHTML = `<p class="erro">Erro: ${traduzirErro(e.message)}</p><p class="dim">Mensagem original: ${esc(e.message)}</p>`;
  }
}

// ---------- Exercícios ----------
function lerFeitos() {
  try { return JSON.parse(localStorage.getItem("lab-sql-feitos")) || []; } catch { return []; }
}
function gravarFeitos() {
  try { localStorage.setItem("lab-sql-feitos", JSON.stringify(feitos)); } catch {}
}

function mostrarExercicio() {
  const ex = EXERCICIOS[atual];
  $("#faixa").innerHTML = EXERCICIOS.map((e, i) =>
    `<button class="${i === atual ? "ativo" : ""} ${feitos.includes(i) ? "feito" : ""}" data-i="${i}" title="${esc(e.bloco)}">${feitos.includes(i) ? "✔" : i + 1}</button>`).join("");
  $("#exercicio").innerHTML = `<p class="dim">${esc(ex.bloco)} · exercício ${atual + 1} de ${EXERCICIOS.length}</p>
    <p>${ex.enunciado}</p><details><summary>Dica</summary><p>${ex.dica}</p></details>`;
  $("#veredito").innerHTML = "";
}

// Iguala números (123 e 123.0; arredonda a 6 casas) para comparar resultados.
const norm = (r) => r.values.map((l) => JSON.stringify(l.map((v) => typeof v === "number" ? Math.round(v * 1e6) / 1e6 : v)));

function conferir() {
  const ex = EXERCICIOS[atual];
  let seu, certo;
  try { seu = rodar($("#sql").value); } catch (e) { executar(); return; }
  certo = rodar(ex.resposta);
  $("#resultado").innerHTML = tabelaHTML(seu);
  mostrarTabelas();
  let a = norm(seu), b = norm(certo), msg;
  if (!ex.ordem) { a.sort(); b.sort(); }
  if (seu.columns.length !== certo.columns.length) msg = `Esperava ${certo.columns.length} coluna(s); sua consulta trouxe ${seu.columns.length}.`;
  else if (a.length !== b.length) msg = `Esperava ${b.length} linha(s); sua consulta trouxe ${a.length}.`;
  else if (a.some((v, i) => v !== b[i])) msg = ex.ordem ? "Mesmo número de linhas, mas os valores ou a ordem não batem." : "Mesmo número de linhas, mas os valores não batem.";
  if (msg) { $("#veredito").innerHTML = `<p class="erro">✘ Ainda não. ${msg}</p>`; return; }
  if (!feitos.includes(atual)) { feitos.push(atual); gravarFeitos(); }
  mostrarExercicio();
  $("#veredito").innerHTML = `<p class="ok">✔ Correto!${atual < EXERCICIOS.length - 1 ? " Siga para o próximo." : " Você terminou todos."}</p>`;
}

function verResposta() {
  $("#veredito").innerHTML = `<p class="dim">Uma resposta possível (há outras):</p><pre>${esc(EXERCICIOS[atual].resposta)}</pre>`;
}

// ---------- Seus dados (CSV do seu computador) ----------
async function importar() {
  const arq = $("#arquivo").files[0];
  if (!arq) { $("#importacao").innerHTML = `<p class="erro">Escolha um arquivo CSV primeiro.</p>`; return; }
  const bytes = await arq.arrayBuffer();
  let texto;
  try { texto = new TextDecoder("utf-8", { fatal: true }).decode(bytes); }
  catch { texto = new TextDecoder("windows-1252").decode(bytes); } // planilhas antigas do Excel e de órgãos públicos
  const nome = nomeSeguro($("#nome-tabela").value || arq.name.replace(/\.[^.]*$/, ""), 0);
  if (BASE.includes(nome)) { $("#importacao").innerHTML = `<p class="erro">Escolha outro nome: <b>${nome}</b> é uma tabela da base.</p>`; return; }
  const sep = acharSeparador(texto);
  try {
    const r = criarTabela(nome, texto, sep);
    mostrarTabelas();
    $("#importacao").innerHTML = `<p class="ok">✔ Tabela <b>${nome}</b> criada: ${r.linhas.toLocaleString("pt-BR")} linhas, ${r.cols.length} colunas (separador "${sep === "\t" ? "tab" : sep}").</p>
      <p class="dim">Experimente: <code>SELECT * FROM ${nome} LIMIT 20;</code></p>`;
    $("#sql").value = `SELECT * FROM ${nome} LIMIT 20;`;
  } catch (e) {
    $("#importacao").innerHTML = `<p class="erro">Não consegui ler o arquivo: ${esc(e.message)}</p>`;
  }
}

// ---------- Início ----------
async function iniciar() {
  try {
    SQL = await initSqlJs({ locateFile: (f) => "lib/" + f });
    for (const t of BASE) csvBase[t] = await (await fetch(`dados/${t}.csv`)).text();
    await carregarBase();
  } catch (e) {
    $("#estado").innerHTML = `<span class="erro">Não foi possível carregar o banco: ${esc(e.message)}</span>`;
    return;
  }
  $("#estado").textContent = "Banco pronto.";
  document.body.classList.add("pronto");
  mostrarExercicio();
  $("#executar").onclick = executar;
  $("#conferir").onclick = conferir;
  $("#resposta").onclick = verResposta;
  $("#anterior").onclick = () => { atual = Math.max(0, atual - 1); mostrarExercicio(); };
  $("#proximo").onclick = () => { atual = Math.min(EXERCICIOS.length - 1, atual + 1); mostrarExercicio(); };
  $("#faixa").onclick = (e) => { const b = e.target.closest("button"); if (b) { atual = +b.dataset.i; mostrarExercicio(); } };
  $("#restaurar").onclick = async () => {
    if (!confirm("Voltar a base ao estado original? Tabelas importadas e alterações serão perdidas.")) return;
    await carregarBase();
    $("#resultado").innerHTML = `<p class="ok">Base restaurada.</p>`;
  };
  $("#importar").onclick = importar;
  $("#sql").addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); executar(); }
  });
}
iniciar();
