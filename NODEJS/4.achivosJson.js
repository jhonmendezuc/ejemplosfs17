import FileReader from "node:fs";

const estudiante = {
  nombre: "Maria",
  apellido: "Gonzalez",
  edad: 40,
  carrera: "Ingenieria en Sistemas",
};

//convertir un objeto js a json
//serializar
const estudianteJson = JSON.stringify(estudiante);

//escribir en el archivo estudiantes.json
FileReader.writeFileSync("archivos/estudiantes.json", estudianteJson);

//lectura del archivo -
const estudianteArchivo = FileReader.readFileSync(
  "archivos/estudiantes.json",
  "utf-8"
);
console.log(estudianteArchivo.nombre);
//deserializar
const estudianteObjeto = JSON.parse(estudianteArchivo);
console.log(estudianteObjeto.nombre);
