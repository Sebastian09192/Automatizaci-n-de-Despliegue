const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('¡Hola desde Express en Azure!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});