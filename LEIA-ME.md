# TÁLAMO — laboratório

Espaço de estudo e testes: sites, dados, SQL, IA e outras linguagens.
Tudo roda online (GitHub + hospedagem + navegador), sem instalar nada no computador.

## Mapa

| Pasta | O que é | Situação |
|---|---|---|
| `nebulosa/` | NEBULOSA — receptor temporal (ficção interativa, HTML/CSS/JS puro, funciona offline) | no ar |
| `sql/` | exercícios de SQL (SQLite/DuckDB no navegador) | vazio |
| `dados/` | análises, tabelas e gráficos | vazio |
| `ia/` | testes com modelos de IA | vazio |
| `index.html` | página inicial com a lista de projetos | — |
| `sw.js` | desliga o service worker antigo da raiz (época em que a NEBULOSA ficava aqui) | transitório |

## Regras da casa

1. **Uma pasta por projeto**, com tudo o que ele precisa dentro dela.
2. **Caminhos relativos** (`fonts/x.css`, nunca `/fonts/x.css`): o projeto funciona em qualquer endereço.
3. **Nada de dependência externa** sem necessidade: fontes, ícones e bibliotecas ficam na pasta do projeto.
4. **Cada projeto novo entra no mapa acima e na página inicial** (`index.html`).
5. Mudanças entram por branch + pull request; a `main` é o que vai ao ar.

## Publicação

- GitHub: `tisko-74/talamo.nexus` (branch `main`)
- Hospedagem: Mindnet (cPanel), domínio `talamo.nexus` com DNS na Cloudflare (proxy ligado).
  Publicar: cPanel → Git Version Control → Manage → Pull or Deploy → "Update from Remote" e depois "Deploy HEAD Commit".
  O que é copiado para `public_html` está em `.cpanel.yml`.
- Vercel: `talamonexusvercel.vercel.app` (fora de uso)
