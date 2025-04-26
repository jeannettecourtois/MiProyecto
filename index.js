const express = require('express');
const app = express();

// Definir una ruta simple
app.get('/', (req, res) => {
  res.send('¡Hola desde tu primer servidor Express!');
});

// Poner a escuchar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
