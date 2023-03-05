// Cargamos el módulo 'fs' de Node.js
const fs = require('fs');

// Leemos el archivo 'data.txt'
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Separamos los datos en un array utilizando el caracter ';'
  const dataArray = data.split(';');

  // Convertimos el array a una cadena de texto en formato JavaScript
  const datosJS = `const datos = ${JSON.stringify(dataArray)};`;

  // Escribimos la cadena de texto en el archivo 'datos.js'
  fs.writeFile('datos.js', datosJS, err => {
    if (err) throw err;
    console.log('Datos guardados en el archivo datos.js');
  });
});
