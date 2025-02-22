import { MongoClient } from "mongodb";
const client = new MongoClient(
  "mongodb+srv://fullstackuc:123@fullstackuc.5jue1.mongodb.net/"
);
await client.connect();
console.log("Conexion exitosa");
const db = client.db("ejemplodb");
const collection = db.collection("libros");
const datos = await collection.find().toArray();
console.log(datos[0].titulo);

datos.forEach((libro) => {
  console.log(libro.titulo);
});
