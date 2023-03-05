const dgram = require('dgram');
const fs = require('fs');

// Creamos un socket de tipo UDP
const socket = dgram.createSocket('udp4');

// Asignamos la dirección y puerto al socket
const server_address = '192.168.1.11';
const server_port = 50000;
socket.bind(server_port, server_address);

console.log('Escuchando en', server_address + ':' + server_port);

// Escuchamos los eventos de mensaje recibido
socket.on('message', (msg, rinfo) => {
  console.log(`Mensaje recibido desde ${rinfo.address}:${rinfo.port}: ${msg}`);

  // Concatenamos el mensaje recibido con un salto de línea
  const data = msg.toString() + '\n';

  // Guardamos los datos recibidos en un archivo
  fs.appendFile('data.txt', data, err => {
    if (err) throw err;
    console.log('Datos guardados en archivo');
  });
});
