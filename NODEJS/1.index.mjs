//ecma modules
import { suma, resta } from "./1.operaciones.mjs";
import Usuario from "./1.Usuario.mjs";
console.log(suma(2, 3));
console.log(resta(2, 3));

const usuario = new Usuario("jhon@gmail.com", "123");
usuario.saludar();
