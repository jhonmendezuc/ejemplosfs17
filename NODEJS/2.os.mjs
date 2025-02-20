//modulo nativo de node
import os from "node:os";
import { configDotenv } from "dotenv";

const config = configDotenv();

console.log("Información del sistema operativo:");
console.log("------------------------------------");
console.log("Nombre del sistema operativo:", os.platform());
console.log("Versión del sistema operativo:", os.release());
console.log("Arquitectura del sistema operativo:", os.arch());
console.log("Memoria total:", os.totalmem(), "bytes");
console.log("Memoria libre:", os.freemem(), "bytes");
console.log(process.env.PUERTO_SERVIDOR);
