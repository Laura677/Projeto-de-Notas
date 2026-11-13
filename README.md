# Projeto 05 — Cálculo de média

Integrantes: preencher nomes e RAs.

Feito com Node.js sem frameworks. Utiliza somente os módulos nativos http, fs e path.

## Executar

Na pasta do projeto:

```bash
npm install
npm start
```

Acesse http://localhost:3000/media?p1=7.5&p2=5.0

O servidor recebe P1 e P2 pela URL, calcula `(P1 + P2) / 2` e lê `public/aprovado.html` se a média for maior ou igual a 6. Caso contrário, lê `public/reprovado.html`. Os marcadores do HTML são substituídos pelas notas e pela média.

Notas ausentes ou valores não numéricos retornam erro 400. Páginas inexistentes retornam 404. Use ponto para notas decimais.

Para entregar, publique todos os arquivos no GitHub. Cada integrante deve entregar o link solicitado pelo professor.
