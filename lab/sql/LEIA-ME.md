# SQL

Exercícios de consulta com **SQLite rodando no navegador** (biblioteca [sql.js](https://sql.js.org/), guardada em `lib/`).
Sem servidor e sem instalar nada: o banco é montado na memória da aba a cada visita.

| Arquivo | O que é |
|---|---|
| `index.html` | a página: explicação, exercícios, editor de consultas e leitura de CSV |
| `app.js` | carrega o banco, roda as consultas, corrige os exercícios, importa CSV |
| `exercicios.js` | os 23 exercícios (enunciado, dica e uma resposta de referência) |
| `dados/estados.csv`, `dados/municipios.csv` | base pública (IBGE), 27 estados e 5.571 municípios |
| `dados/votacao.csv`, `dados/vagas.csv` | eleições em SC, 1994 a 2022 (TSE, via Base dos Dados): comparecimento, abstenção, brancos, nulos, vagas |
| `dados/montar.py` | como os CSV foram montados a partir das fontes |
| `dados/base-mysql.sql` | a mesma base para importar no MySQL (phpMyAdmin → Importar), com chaves primárias e estrangeiras |
| `dados/exportar_mysql.py` | gera o `base-mysql.sql` a partir dos CSV |
| `lib/` | sql.js 1.14.2 (licença MIT, ver `LICENSE-sqljs.txt`) |

**Exercício novo:** acrescentar um item em `exercicios.js`. A correção compara o resultado da consulta do aluno com o da `resposta`
(nomes de coluna não contam; a ordem só conta com `ordem: true`).

**Dados:** só dados públicos ou fictícios entram nesta pasta. Arquivos próprios são abertos em "Seus dados" e nunca saem do computador.

**Testar localmente:** a página precisa ser servida por HTTP (não abre com duplo clique, por causa do `fetch`):
`python3 -m http.server` na raiz do repositório e abrir `http://localhost:8000/lab/sql/`.

Testado em MariaDB 10.11 (modo estrito, `ONLY_FULL_GROUP_BY`): as 23 respostas rodam iguais às do SQLite (o exercício 4 muda só a ordem alfabética dos acentos).
Próxima etapa possível: PHP lendo o MySQL da hospedagem.
