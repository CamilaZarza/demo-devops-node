const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido al Servidor</h1>
    <p>Este es un servidor básico utilizando Express.js 2.0</p>
  `);
});
app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    version: '2.0'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});