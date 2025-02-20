import { readFileSync } from "node:fs";

console.log("operacion1");
const archivo1 = readFileSync("archivos/archivo1.txt", "utf8");
console.log(archivo1);
console.log("operacion2");
const archivo2 = readFileSync("archivos/archivo1.txt", "utf8");
console.log(archivo2);
console.log("operacion3");
const archivo3 = readFileSync("archivos/archivo1.txt", "utf8");
console.log(archivo3);
