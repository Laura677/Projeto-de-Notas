const http = require('http');
const fs = require('fs');
const path = require('path');

const servidor = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost:3000');

  if (url.pathname === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
    return res.end(fs.readFileSync(path.join(__dirname, 'public', 'style.css')));
  }

  if (url.pathname !== '/media') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Página não encontrada. Use /media?p1=7.5&p2=5.0');
  }

  const nota1 = url.searchParams.get('p1');
  const nota2 = url.searchParams.get('p2');
  if (nota1 === null || nota2 === null || nota1.trim() === '' || nota2.trim() === '') {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Informe as notas p1 e p2 pela URL.');
  }

  const p1 = Number(nota1);
  const p2 = Number(nota2);
  if (!Number.isFinite(p1) || !Number.isFinite(p2)) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('As notas devem ser números válidos. Use ponto para os decimais.');
  }

  const media = (p1 + p2) / 2;
  const pagina = media >= 6 ? 'aprovado.html' : 'reprovado.html';
  let html = fs.readFileSync(path.join(__dirname, 'public', pagina), 'utf8');
  html = html.replace('{{p1}}', p1).replace('{{p2}}', p2).replace('{{media}}', media);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

servidor.listen(3000, () => console.log('Acesse http://localhost:3000/media?p1=7.5&p2=5.0'));
