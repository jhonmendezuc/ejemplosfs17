import http from "node:http";
import { MongoClient } from "mongodb";

//clientebd
const client = new MongoClient(
  "mongodb+srv://fullstackuc:123@fullstackuc.5jue1.mongodb.net/"
);
await client.connect();
const db = client.db("ejemplodb");
//datos de respuesta
const collection = db.collection("libros");
const datos = await collection.find().toArray();

//crear el servidor: 127.0.0.1
const servidor = http.createServer((solicitud, respuesta) => {
  console.log(solicitud.method);
  console.log(solicitud.url);
  console.log(solicitud.headers);
  respuesta.setHeader("Content-Type", "application/json");
  respuesta.end(JSON.stringify(datos));

  if (solicitud.url === "/libros" && solicitud.method == "GET") {
    console.log("consulta de libros");
  }
  if (solicitud.url === "/libros" && solicitud.method == "POST") {
    console.log("crear de libros");
  }
  if (solicitud.url === "/autores") {
    console.log("consulta de autores");
  }
  if (solicitud.url === "/editoriales") {
    console.log("consulta de editoriales");
  }
});
//crear un puerto
const puerto = 3000;
//poner a escuchar el servidor
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
