# TÁLAMO — laboratório

Espaço de estudo e testes: sites, dados, SQL, IA e outras linguagens.
Tudo roda online (GitHub + hospedagem + navegador), sem instalar nada no computador.

## Mapa

| Pasta | O que é | Situação |
|---|---|---|
| `index.html` | redireciona `talamo.nexus` direto para a NEBULOSA | — |
| `nebulosa/` | NEBULOSA — receptor temporal (ficção interativa, HTML/CSS/JS puro, funciona offline) | no ar, público |
| `nebulosa/en/` | página de divulgação em inglês (prévia de link própria; abre a NEBULOSA em inglês) | no ar |
| `lab/` | laboratório, **protegido por senha no cPanel** (Privacidade do diretório) | fechado |
| `lab/index.html` | página com a lista de projetos | — |
| `lab/sql/` | exercícios de SQL com SQLite no navegador (sql.js); base pública do IBGE e eleições em SC (TSE); lê CSV do próprio computador | pronto |
| `lab/dados/` | análises, tabelas e gráficos | vazio |
| `lab/ia/` | testes com modelos de IA | vazio |
| `sw.js` | desliga o service worker antigo da raiz (época em que a NEBULOSA ficava aqui) | transitório |

## NEBULOSA em dois idiomas

- `i18n.js` escolhe o idioma (`?lang=pt|en` → escolha salva → idioma do navegador) e carrega o conteúdo:
  `banco-de-frases-v5.js` + `revelacoes.js` (português, referência) ou `*.en.js` (inglês).
- Textos da interface ficam no dicionário de `i18n.js` (`t('chave')`). Chave sem tradução cai no português.
- **Mudou uma frase em português? Mude também no `.en.js`** (mesmos ids, tags e ordem).

## Regras da casa

1. **Uma pasta por projeto**, com tudo o que ele precisa dentro dela. Projeto novo nasce em `lab/`;
   só vai para a raiz quando for público.
   A senha de `lab/` protege o **site**; o código continua visível no GitHub enquanto o repositório for público.
2. **Caminhos relativos** (`fonts/x.css`, nunca `/fonts/x.css`): o projeto funciona em qualquer endereço.
3. **Nada de dependência externa** sem necessidade: fontes, ícones e bibliotecas ficam na pasta do projeto.
4. **Cada projeto novo entra no mapa acima e na página do laboratório** (`lab/index.html`).
5. Mudanças entram por branch + pull request; a `main` é o que vai ao ar.

## Publicação

- GitHub: `tisko-74/talamo.nexus` (branch `main`)
- Hospedagem: Mindnet (cPanel), domínio `talamo.nexus` com DNS na Cloudflare (proxy ligado).
  Publicação automática: a cada atualização da `main`, o GitHub envia o site por FTP para `public_html`
  (`.github/workflows/publicar-mindnet.yml`; usuário e senha nos segredos FTP_USUARIO e FTP_SENHA do repositório).
  Para publicar sem mudança nova: aba Actions → "Publicar na Mindnet" → Run workflow.
  Alternativa, se o cPanel tiver Git Version Control: `.cpanel.yml`.
- Vercel: `talamonexusvercel.vercel.app` (fora de uso)
