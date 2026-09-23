/* ============================================================
   NEBULOSA — interface temporal (Plano B: B1, B2, B3)
   - gaveta de análise (botão ◎, posição 3 do teclado): ANALISAR · RAMOS · FITA · ESPECTRO · ARQUIVO
   - P1 Painel Temporal (faixa vermelha acima da tela), P6 Console de Protocolo de Saída (só fase 4)
   - P2 Espectro, P3 Fita, P4 Espelho, P5 Matriz de Ramos (dentro da gaveta)
   Tudo é SOMENTE LEITURA: nada aqui envia dados. Carregado depois do script principal (usa S, render, visit…).
   ============================================================ */
(function(){
const TIPO={A:'direto',B:'reflexivo',C:'estrutural',D:'contraditório',E:'criptografado',R:'revelação'};
const g=document.getElementById('gav');
const pad2=n=>String(n).padStart(2,'0');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fragOf=e=>e.sp?makeReveal(e.room,e.sp-1):FRAG[e.room][e.idx];
const firstLine=f=>(f&&f.m?f.m.split('\n')[0].replace(/^\.\.\./,'').replace(/\.\.\.$/,''):'');
let tab='analisar',timer=0,raf=0,opener=null;

/* ---------- P3 Fita: log de recepção ---------- */
S.tape=[];
function hint(){const r=ROOMS[Math.floor(Math.random()*ROOMS.length)],a=FRAG[r.id];return a[Math.floor(Math.random()*a.length)].tag}
window.tapePush=function(e){
  const p=phase(),f=fragOf(e);if(!f)return;
  if(p>=2&&Math.random()<.2)S.tape.push(`>> ${hint()}  [linha adiantada]`);   // fita imprime antes de chegar
  S.tape.push(`${f.tag} | env ${e.ts.sent} | lido ${e.ts.read} | ${e.ts.mark}${e.br&&e.br!=='a'?' | ramo '+e.br:''}`);
  if(p===4&&Math.random()<.25)S.tape.push('');                                    // fase 4: linhas em branco
  if(S.tape.length>60)S.tape.splice(0,S.tape.length-60);
};

/* ---------- P4 Espelho: dados do LEITOR, calculados só no navegador, sem biometria real ---------- */
const MIR={t:[]};
document.addEventListener('pointerdown',()=>{MIR.t.push(Date.now());if(MIR.t.length>200)MIR.t.shift()},true);
function mirror(){
  const now=Date.now(),tpm=MIR.t.filter(t=>now-t<60000).length,hes=Math.min(99,Math.round((now-(MIR.t[MIR.t.length-1]||S.t0))/1000));
  return{tpm,hes,att:Math.max(0,Math.min(100,100-hes*2))};
}

/* ---------- P1 Painel Temporal (LED vermelho 8×2) ---------- */
const TP={y:32,d:4,h:14,inv:false,last:-1};
function updateTP(){
  const c=S.count,ch=c!==TP.last;TP.last=c;
  if(ch&&c%3===0){TP.y=Math.round(drift()*.4)+Math.floor(Math.random()*3);TP.d=Math.floor(Math.random()*99);TP.h=Math.floor(Math.random()*24)}   // atualiza a cada 3 fragmentos, sem sincronizar
  if(ch)TP.inv=(c>0&&c%5===0);                                                                                                                       // a cada 5, o sinal inverte
  document.getElementById('tp1').textContent=`TIME ${TP.inv?'EMIT -':'+'}${TP.y}Y ${pad2(TP.d)}D ${pad2(TP.h)}H DRIFT`;
  document.getElementById('tp2').textContent=`SYNC: ${TP.inv?'???':'NEVER'}  ${branchLabel()}`;
}
/* ---------- P6 Console de Protocolo de Saída (só fase 4; não oferece saída) ---------- */
function updateCS(){
  const cs=document.getElementById('cs'),on=phase()===4;cs.classList.toggle('on',on);if(!on)return;
  const alt=Math.floor(Date.now()/2500)%2;
  cs.innerHTML=`EXIT: ${alt?'[REDACTED]':'DISABLED'} | ESC: NEGADO<br>RESTORE: NEVER | sessão: aberta`;
}
window.panelsRefresh=function(){updateTP();updateCS();if(!g.hidden&&(tab==='analisar'||tab==='fita'))draw()};
setInterval(()=>window.panelsRefresh(),1000);

/* ---------- gaveta ---------- */
const TABS=[['analisar','ANALISAR'],['ramos','RAMOS'],['fita','FITA'],['espectro','ESPECTRO'],['arquivo','ARQUIVO']];
function shell(){
  g.innerHTML=`<div class="gtabs" role="tablist">${TABS.map(([k,l])=>`<button role="tab" data-t="${k}" aria-selected="${k===tab}" class="${k===tab?'on':''}">${l}</button>`).join('')}<button class="x" id="gx" aria-label="Fechar análise">×</button></div><div class="gbody" id="gb" tabindex="0"></div>`;
  g.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{tab=b.dataset.t;shell();draw()});
  document.getElementById('gx').onclick=closeGaveta;
}
window.openGaveta=function(){
  if(!g.hidden){closeGaveta();return}
  opener=document.activeElement;g.hidden=false;shell();draw();log('open_analysis');beep(1200,.03);
  document.getElementById('gx').focus();
};
function closeGaveta(){g.hidden=true;cancelAnimationFrame(raf);raf=0;if(opener&&opener.focus)opener.focus();beep(900,.03)}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!g.hidden)closeGaveta()});
function draw(){
  const b=document.getElementById('gb');if(!b)return;
  if(tab==='espectro'){if(!b.querySelector('canvas')){b.innerHTML=`<h4>ESPECTRO · SINTONIA</h4><canvas id="sp" width="300" height="120"></canvas><p id="spl" style="margin:8px 0 0"></p>`}spectrum();return}
  cancelAnimationFrame(raf);raf=0;
  b.innerHTML=({analisar:viewAnalisar,ramos:viewRamos,fita:viewFita,arquivo:viewArquivo})[tab]();
  if(tab==='ramos')b.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>{visit(+x.dataset.go);draw()});
}

function row(k,v){return `<div class="row"><span>${k}</span><b>${v}</b></div>`}
function viewAnalisar(){
  const f=frag(),r=room(),t=S.ts,p=phase(),m=mirror(),al={bpm:Math.round(S.bpm),cort:Math.round(S.cort),temp:S.temp.toFixed(1)};
  const tipo=f.t||'?';
  let h='<h4>FRAGMENTO</h4>';
  h+=row('Ilha',esc(r.name)+(S.fav===r.id?' ★':'')+` (fase ${r.phase})`);
  h+=row('Tipo',`${esc(tipo)} · ${esc(TIPO[tipo]||'—')}`);
  h+=row('Tag',esc(f.tag));
  h+=row('Posição',S.special?`revelação ${S.special.part}/${S.special.total}`:`${S.idx+1}/${frags().length} na cadeia`);
  h+=row('Enviado',esc(t.sent))+row('Lido',esc(t.read))+row('Criado',esc(t.made));
  h+=row('Leitura',esc(t.mark));
  h+=row('Selado',isSealed()?'sim':'não')+row('Favorita',S.fav?esc((ROOMS.find(x=>x.id===S.fav)||{}).name||'—'):'nenhuma');
  if(typeof LANG!=='undefined'){
    const cl=currentLangLayer();
    h+='<h4>LINGUAGEM</h4>';
    h+=row('Camada',`${esc(cl.layer.code)} · ${esc(cl.layer.name)}`)+row('Deriva linguística',Math.round(cl.drift)+'%');
    if(cl.layer.id!=='pt')h+=row('Nota',esc(LANG.note(cl.layer)));
  }
  h+='<h4>LINHA DO TEMPO</h4>';
  h+=row('Ramo atual',esc(branchLabel()));
  h+=row('Autoconsistência',cons()+'%');
  h+=row('Deriva',drift()+'%');
  h+=row('· fase',`10 × ${p} = ${10*p}`)+row('· rejeições',`3 × ${S.rejected} = ${3*S.rejected}`)+row('· erros de transmissão',`2 × ${S.bursts} = ${2*S.bursts}`)+row('· voltas no tempo',`4 × ${S.undos} = ${4*S.undos}`);
  // P4 Espelho: fase 3 os números coincidem; fase 4 trocam de lugar
  let a=al,v={bpm:m.tpm,cort:m.hes,temp:m.att};
  const A=`<div><b>${p===4?'VOCÊ':'ALEX'}</b><br>BPM/toques ${p===4?m.tpm:al.bpm}<br>cort/hesit. ${p===4?m.hes:al.cort}<br>temp/atenção ${p===4?m.att+'%':al.temp}</div>`;
  const B=p===3?`<div><b>VOCÊ</b><br>BPM/toques ${al.bpm}<br>cort/hesit. ${al.cort}<br>temp/atenção ${al.temp}</div>`
         :`<div><b>${p===4?'ALEX':'VOCÊ'}</b><br>BPM/toques ${p===4?al.bpm:m.tpm}<br>cort/hesit. ${p===4?al.cort:m.hes}<br>temp/atenção ${p===4?al.temp:m.att+'%'}</div>`;
  h+='<h4>ESPELHO</h4><div class="cols">'+A+B+'</div><p style="color:var(--dim)">Toques por minuto e hesitação vêm só da sua interação com esta página; nada é medido do seu corpo nem enviado.</p>';
  return h;
}
function viewRamos(){
  const p=phase(),vis=new Set(Object.keys(S.cur));
  let h='<h4>MATRIZ DE RAMOS · 12 ILHAS</h4><div class="mx'+(p===4?' p4':'')+'">';
  ROOMS.forEach((r,i)=>{
    const cur=r.id===S.room||(p>=3&&i===(S.count*7)%12);   // fase 3+: dois LEDs acesos (realidades sobrepostas)
    h+=`<i class="${cur?'cur':vis.has(r.id)?'vis':r.phase>p?'off':''}" title="${esc(r.name)}">${i+1}</i>`;
  });
  h+='</div><p style="color:var(--dim)">verde: atual · âmbar: já visitada · apagada: ainda não liberada</p>';
  // ramos = grupos de nós por letra
  const by={};S.nodes.forEach(n=>{const b=n.br||'a';if(!by[b]||n.id>by[b].id)by[b]=n});
  const depth=n=>{let d=0,c=n,k=0;while(c&&k++<TREE_MAX){d++;c=S.nodes.get(c.parent)}return d};
  const cur=tip()?tip().br:'a';
  h+=`<h4>RAMOS · ${Object.keys(by).length} · ${S.nodes.size} nós</h4>`;
  Object.keys(by).sort().forEach(b=>{
    const n=by[b],f=fragOf(n),ehAtual=b===cur;
    h+=`<div class="item${ehAtual?' cur':''}"><span>T${p}.${depth(n)}${b}${ehAtual?' · ATUAL':''}<small>${esc((ROOMS.find(x=>x.id===n.room)||{}).name||'')} — “${esc(firstLine(f))}”</small></span>${ehAtual?'':`<button class="btn" data-go="${n.id}" aria-label="Ir para o ramo ${b}">IR</button>`}</div>`;
  });
  h+='<p style="color:var(--dim)">Visitar um ramo muda o caminho ativo; os nós antigos não são reescritos. Voltar custa deriva.</p>';
  return h;
}
function viewFita(){
  const L=S.tape.slice(-30).join('\n')||'(fita vazia)';
  return `<h4>FITA DE REGISTRO</h4><div class="tape" role="log">${esc(L)}</div>`;
}
function viewArquivo(){
  if(!S.arq.length)return '<h4>ARQUIVO</h4><p>Nenhum fragmento selado ainda. Use ◈ (SEAL) para guardar.</p>';
  let h=`<h4>ARQUIVO · ${S.arq.length} selados</h4>`;
  S.arq.slice().reverse().forEach(a=>{
    const r=ROOMS.find(x=>x.id===a.room);
    h+=`<details><summary>${esc(r?r.name:a.room)}${a.sp?' · revelação '+a.sp:''} — ${esc(new Date(a.at).toLocaleString('pt-BR'))}</summary><pre>${esc(a.m)}</pre><small>${esc(a.ts&&a.ts.sent||'')} | ${esc(a.ts&&a.ts.mark||'')}</small></details>`;
  });
  return h;
}

/* ---------- P2 Espectro (canvas): 24 barras; a banda muda com o tipo do fragmento ---------- */
const BARS=24,val=new Array(BARS).fill(.2),tgt=new Array(BARS).fill(.2);let ghost=-1,ghostT=0;
const BAND={A:[2,7],B:[8,12],C:[13,16],D:[17,20],E:[0,23],R:[0,23]};
function spectrum(){
  const c=document.getElementById('sp');if(!c||g.hidden||tab!=='espectro')return;
  const x=c.getContext('2d'),W=c.width,H=c.height,f=frag(),t=f.t||'A',[lo,hi]=BAND[t]||[0,23],p=phase(),now=performance.now();
  for(let i=0;i<BARS;i++){
    const inb=i>=lo&&i<=hi;
    tgt[i]=t==='E'?Math.random()*.35:t==='R'?.5+.3*Math.sin(now/700+i/3):inb?.45+Math.random()*.5:Math.random()*.18;
    val[i]+=(tgt[i]-val[i])*.25;
  }
  if(p>=3&&now-ghostT>1600){ghost=Math.floor(Math.random()*BARS);ghostT=now}      // fase 3+: sinal fantasma (sem fragmento correspondente)
  x.fillStyle='#000';x.fillRect(0,0,W,H);
  const bw=W/BARS;
  for(let i=0;i<BARS;i++){const h=val[i]*(H-18);x.fillStyle=i===ghost&&p>=3?'#FF00FF':'#00FF00';x.fillRect(i*bw+2,H-14-h,bw-4,h);x.fillStyle='#00FFFF';x.fillRect(i*bw+2,H-14-h-2,bw-4,2)}
  const nx=(S.sl.sgnl/100)*W;x.fillStyle='#FF0000';x.fillRect(nx-1,0,2,H-14);      // agulha de sintonia segue o SGNL
  x.fillStyle='#006600';x.font='9px monospace';x.fillText('0',2,H-3);x.fillText('89.3',W/2-10,H-3);x.fillText('∞',W-10,H-3);
  const l=document.getElementById('spl');
  if(l)l.innerHTML=`89.3 FM <b style="color:var(--green)">${Math.floor(now/1000)%2?'IMPOSSÍVEL':'          '}</b> · banda ${esc(TIPO[t]||t)}`;
  if(REDUCED){setTimeout(()=>{raf=requestAnimationFrame(spectrum)},1000)}else raf=requestAnimationFrame(spectrum);
}
window.panelsRefresh();
})();
