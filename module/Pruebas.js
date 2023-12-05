// Importa el módulo readline-sync para interactuar con el usuario
const rl = require("readline-sync");

// Establece el número máximo de jugadores
let maxJugadores = '2'; 

// Inicializa el contador de partidas
let contadorPartidas = 0; 

// Establece el número máximo de partidas
let maxPartidas = 5; 

// Variable para almacenar el número de jugadores
let Jugadores; 

do {
  // Pregunta al usuario cuántos jugadores habrá
  Jugadores = rl.question("¿Cuantos jugadores seran? ");

  // Si el número de jugadores no es 2, muestra un mensaje de error
  if (Jugadores !== maxJugadores) {
    console.log("El número de jugadores no puede ser más de 2 o menos de 2");
  }
} while (Jugadores !== maxJugadores);

console.log("Comienza el juego");

// Incrementa el contador de partidas hasta que se alcanza el número máximo de partidas
while (contadorPartidas < maxPartidas) {
  contadorPartidas++;
}

// Pregunta al usuario cuántas partidas desea jugar
const partidas = rl.question("¿Cuantas partidas deseas jugar?", {});

// Importa el módulo readline para interactuar con el usuario
const readline = require('readline');

// Función para obtener la opción del jugador
function obtenerOpcion() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const array1 = ['piedra', 'papel', 'tijera'];
  return new Promise ((resolve) => {

    // Muestra las opciones de juego
    array1.forEach((opcion, index) => {
      console.log(`${index + 1}. ${opcion}`);
    });

    // Pide al usuario que elija una opción
    rl.question(`Ingresa el número de tu opción (1-${array1.length}): `, (answer) => {
      rl.close();

      // Convierte la respuesta del usuario a un número
      const opcionSeleccionada = parseInt(answer);

      // Si la opción seleccionada es válida, devuelve la opción
      // Si no, devuelve null
      if (opcionSeleccionada >= 1 && opcionSeleccionada <= array1.length) {
        resolve(array1[opcionSeleccionada - 1]);
      } else {
        resolve(null); // Opción inválida
      }
    });
  });
};

// Función para manejar una ronda del juego
async function jugar() {
  const play = []

  // Obtiene la opción de cada jugador
  const jugador1 = await obtenerOpcion(1);
  const jugador2 = await obtenerOpcion(2);

  // Función para comparar las opciones de los jugadores y determinar el ganador
  function compararJugadores(opcionJugador1, opcionJugador2) {
    if (opcionJugador1 === opcionJugador2) {
      return 'Empate';
    }
    if (opcionJugador1 === 'piedra' && opcionJugador2 === 'tijera') {
      return 'Gana el jugador 1';
    }
    if (opcionJugador1 === 'piedra' && opcionJugador2 === 'papel') {
      return 'Gana el jugador 2';
    }
    if (opcionJugador1 === 'papel' && opcionJugador2 === 'tijera') {
      return 'Gana el jugador 2';
    }
    if (opcionJugador1 === 'papel' && opcionJugador2 === 'piedra') {
      return 'Gana el jugador 1';
    }
    if (opcionJugador1 === 'tijera' && opcionJugador2 === 'piedra') {
      return 'Gana el jugador 2';
    }
    if (opcionJugador1 === 'tijera' && opcionJugador2 === 'papel') {
      return 'Gana el jugador 1';
    }
  }
  console.log(compararJugadores(jugador1,jugador2));
}

// Ejecuta la función jugar el número de veces que el usuario especificó
(async () => {
  for (let i = 0; i < partidas; i++) {
    await jugar();
  }
})();