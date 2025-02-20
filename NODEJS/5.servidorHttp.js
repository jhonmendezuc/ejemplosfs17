import http from "node:http";

//datos de respuesta
const estudiantes = [
  {
    nombre: "jhon",
    edad: 45,
  },
  {
    nombre: "maria",
    edad: 35,
  },
  {
    nombre: "jose",
    edad: 25,
  },
];

//crear el servidor: 127.0.0.1
const servidor = http.createServer((solicitud, respuesta) => {
  respuesta.setHeader("Content-Type", "application/json");
  respuesta.end(JSON.stringify(estudiantes));
});
//crear un puerto
const puerto = 3000;
//poner a escuchar el servidor
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
