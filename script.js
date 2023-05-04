//Iniciacion del archivo script.js
//Declaramos los intentos y las palabras que se van a mostrar
let intentos = 6;
let diccionario = ["APPLE", "HURLS", "WINGS", "YOUTH"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

//Agregamos un event listener que se dispare al cargarse completamente la pagina web
window.addEventListener("load", init);
function init() {
  console.log("Iniciando...");
}

//Evento click
//Localizamos el elemento
const BOTON = document.getElementById("guess-button");

//Agregamos un event listener al elemento
BOTON.addEventListener("click", intentar);

//creamos la funcion intentar
function intentar() {
  const INTENTO = leerIntento();
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  
  for (let i in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (INTENTO[i] === palabra[i]) {
      //VERDE
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "green";
    } else if (palabra.includes(INTENTO[i])) {
      //AMARILLO
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "yellow";
    } else {
      //GRIS
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "grey";
    }
    ROW.appendChild(SPAN);
  }
  
  GRID.appendChild(ROW);
  intentos--;
  if (intentos === 0) {
    terminar("<h1>PERDISTE!</h1>");
  }
  
  if (INTENTO === palabra) {
    terminar("<h1>GANASTE!</h1>");
    return;
  }
}


//Creamos la funcion terminar
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


//Leer intentos
//Obtener valores del input
const input = document.getElementById("guess-input");
const valor = input.value;
//Creamos la funcion leerIntento
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}
//Inyeccion dinamica de HTML

//Seleccion de palabras
Math.floor(Math.random() * 10) + 1;
