const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  const md = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf-8');
  const body = marked(md);

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WOLF TECH — Build. Deploy. Dominate.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: #000;
      color: #9ca3af;
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px;
      line-height: 1.75;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 0;
      background:
        linear-gradient(rgba(0,255,0,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,0,0.025) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
    }
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 0;
      background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,255,0,0.05) 0%, transparent 70%);
      pointer-events: none;
    }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: rgba(0,255,0,0.3); border-radius: 2px; }
    .readme {
      position: relative;
      z-index: 1;
      max-width: 860px;
      margin: 0 auto;
      padding: 40px 24px 80px;
    }
    .readme img { max-width: 100%; height: auto; display: inline-block; vertical-align: middle; }
    p[align="center"] { text-align: center; }
    .readme h1, .readme h2, .readme h3, .readme h4 {
      font-family: 'Orbitron', monospace;
      color: #00ff00;
      margin: 2rem 0 0.75rem;
      letter-spacing: 0.05em;
    }
    .readme h1 { font-size: 1.8rem; }
    .readme h2 { font-size: 1.3rem; }
    .readme h3 { font-size: 1.1rem; }
    .readme p { margin: 0.75em 0; }
    .readme strong { color: #ffffff; }
    .readme a { color: #00ff00; text-decoration: none; transition: opacity 0.2s; }
    .readme a:hover { opacity: 0.75; text-decoration: underline; }
    .readme blockquote {
      border-left: 3px solid #00ff00;
      margin: 1.25em 0;
      padding: 0.6em 1.25em;
      background: rgba(0,255,0,0.04);
      border-radius: 0 8px 8px 0;
      color: #9ca3af;
    }
    .readme hr { border: none; border-top: 1px solid rgba(0,255,0,0.15); margin: 2.5em 0; }
    .readme table { width: 100%; border-collapse: collapse; margin: 1.25em 0; font-size: 0.88rem; }
    .readme th {
      background: rgba(0,255,0,0.06);
      color: #00ff00;
      font-family: 'Orbitron', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      padding: 10px 14px;
      border: 1px solid rgba(0,255,0,0.15);
      text-align: left;
    }
    .readme td { padding: 10px 14px; border: 1px solid rgba(0,255,0,0.1); color: #9ca3af; }
    .readme tr:nth-child(even) td { background: rgba(0,255,0,0.02); }
    .readme tr:hover td { background: rgba(0,255,0,0.05); }
    .readme code {
      background: rgba(0,255,0,0.07);
      color: #00ff00;
      padding: 2px 7px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.88em;
    }
    .readme em { color: #00ff00; }
    .readme ul, .readme ol { padding-left: 1.5em; margin: 0.75em 0; }
    .readme li { margin: 0.3em 0; color: #9ca3af; }
    .readme li::marker { color: #00ff00; }
  </style>
</head>
<body>
  <div class="readme">${body}</div>
</body>
</html>`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`WOLF TECH README running at http://0.0.0.0:${PORT}`);
});
