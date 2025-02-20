import { readFile } from "node:fs";

console.log("operacion1");

readFile("archivos/archivo1.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("operacion2");

readFile("archivos/archivo2.txt", "utf-8", (err, data) => {
  console.log(data);
});

readFile("archivos/archivo3.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("operacion3");
