# portfolio

Portfólio pessoal com estética da web dos anos 80/90/2000 e um terminal interativo.

HTML, CSS e JS puros, sem build.

## Rodar

```sh
python3 -m http.server 8000
```

## Publicação

GitHub Pages a partir da branch `main` (raiz), com domínio personalizado em `CNAME`: https://lucasborges.dev.br

## Editar conteúdo

Tudo fica em `main.js`:

| O quê | Onde |
|---|---|
| Contatos, links, PDFs do CV | `PROFILE` |
| Skills | `SKILLS` |
| Resumo, experiências, projetos, formação (PT e EN) | `CONTENT` |
| Textos da interface | `UI` |
| Comandos do terminal | `COMMANDS` / `ALIASES` |

## Terminal

`help` lista os comandos. Atalhos: `/` foca o terminal, `Tab` completa, `↑/↓` histórico, `Ctrl+L` limpa.
