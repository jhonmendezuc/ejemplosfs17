//JAVASCRIPT: LENGUAJE INTERPRETADO, DINAMICO, MULTIPARADIGMA

//VARIABLES Y TIPOS
var nombre = "Juan";
var edad = 15;
var estatura = 1.8;
var estudiante = true;

let nombre_persona = "Jhon";
let edad_persona = 15;

const PI = 3.1416;

console.log(nombre);
console.table([nombre, edad, estatura, estudiante]);
console.error("Error");

//condicionales
if (edad > 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

let mayor = edad > 18 ? "es mayor de edad" : "es menor de edad";
console.log(mayor);

//ciclos while, do while, for

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("Fin del ciclo");

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i < 10);

//estructuras de datos // listas - arrays

let lista_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista_numeros[5]);

//foreach
lista_numeros.forEach((numero) => {
  console.log("numero", numero * 2);
});

//map
let dobles = lista_numeros.map((numero) => {
  return numero * 2;
});

console.log(lista_numeros);
console.log(dobles);

//reduce
let suma = lista_numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(suma);

//filter
let pares = lista_numeros.filter((numero) => {
  return numero % 2 == 0;
});

console.log(pares);

//funciones

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

console.log(sumar(1, 2));

let resta = (numero1, numero2) => {
  return numero1 - numero2;
};

console.log(resta(2, 4));

//objetos literales
let tarea = {
  id: 1,
  nombre: "tarea1",
  completada: false,
};

let profesor = {
  nombre: "juan",
  apellido: "perez",
  edad: 12,
};

console.log(tarea);
console.log(tarea.nombre);
profesor.correo = "XXXXXXXXXXXXXX";
console.log(profesor);

//objetos de la clase object

let tarea2 = new Object();
tarea2.id = 2;
tarea2.nombre = "tarea2";
tarea2.completada = true;
console.log(tarea2);

//objetos con clase
class tareas {
  constructor(id, nombre, completada) {
    this.id = id;
    this.nombre = nombre;
    this.completada = completada;
  }
}

let tarea3 = new tareas(2, "tarea3", true);
console.log(tarea3);

//
let tareas_app = [];

console.log(tareas_app);

tareas_app[0] = {
  id: 1,
  nombre: "tarea1",
  completada: true,
};
console.log(tareas_app);
tareas_app.push(tarea2);
tareas_app.push(tarea3);
console.log(tareas_app);
tareas_app.push(new tareas(4, "tarea4", false));

tareas_app.map((tarea) => {
  if (tarea.completada == true) {
    console.log(`✅ ${tarea.nombre}`);
  } else {
    console.log(`❌ ${tarea.nombre}`);
  }
  //console.log(`${tarea.completada == true ? "✅" : "❌"} ${tarea.nombre} x`);
});

//DOM

let tituloId = document.getElementById("titulo-id");
let tituloTag = document.getElementsByTagName("h5");
let parrafoClase = document.getElementsByClassName("parrafo-clase");
console.log(tituloId.tagName);
console.log(tituloTag);
console.log(parrafoClase[0]);

//query selector
let tituloId2 = document.querySelector("#titulo-id-2");
console.log(tituloId2);
let parrafoClase2 = document.querySelectorAll(".parrafo-clase");
console.log(parrafoClase2);

let tareas_array = [
  {
    id: 1,
    nombre: "tarea1",
    completada: true,
  },
  {
    id: 2,
    nombre: "tarea2",
    completada: false,
  },
  {
    id: 3,
    nombre: "tarea3",
    completada: true,
  },
];

let listaTareas = document.querySelector("#tareas");
let agregarTareaBtn = document.querySelector("#agregar-tarea");

agregarTareaBtn.addEventListener("click", () => {
  listaTareas.innerHTML = "<li> tarea 1 </li>";
});

tareas_array.forEach((tarea) => {
  listaTareas.innerHTML += `<li> ${tarea.nombre} </li>`;
});

let consultaTitulo = document.querySelector("#titulo-id");
consultaTitulo.style.color = "red";

let consultaTitulo2 = document.querySelector("#titulo-id-2");
consultaTitulo2.style.display = "none";

let pagina = "<h1>contenido pagina antigua</h1>";
//ejemplo de api localstorage
localStorage.setItem("pagina", pagina);
