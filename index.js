const express = require('express');
const app = express();

app.use(express.json());

app.get('/saludo', async (req, res) => {
  return res.status(200).json({ message: 'Hola Mundo!' });
});

app.post('/saludo', async(req, res) => {
  return res.status(200).json(req.body)
});

app.listen(4000, () => {
  console.debug('Conectado correctamente');
});
