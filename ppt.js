const rl = require("readline-sync");//constante en la cual le decimos al usuario y haccedemos al redline y poder interactuar con el usario
let maxJugad = 2;
let jugadores;
//hace mientras se comprueba la condicion 
do {
  jugadores = rl.question("¿Cuantos jugadores seran?", {});
  //solo se permiten 2 jugadores
  if (jugadores > maxJugad) {//esta condicion la va arepetir mientra jugadors sea a maximo 
    console.log("Solo se permiten 2 jugadores");
  }
} while (jugadores > maxJugad);

let maxPartidas = 5;
let partidas;

do {
  partidas = rl.question("¿Cuantas partidas deseas jugar?", {});
  if (partidas > maxPartidas) {
    console.log("Solo se permiten 5 partidas maximo");
  }
} while (partidas > maxPartidas);

function opcion(jugador) {
  const eleccion = ["piedra", "papel", "tijera"];

  //signo pesos para incrustar una expresión en una cadena. 
  //Permite funciones de interpolación de cadenas y cadenas multilínea.
  //comillas invertidas concatena las partes para formar una única cadena de caracteres.
  console.log(`Jugador ${jugador}, elige una opción:`);
  // funcion flecha es como el this pero con más restricciones
  //ejecuta un elemento por cada elemento del array osea que pasa por cada elemente 
  eleccion.forEach((opcion, index) => {
    //para que en la lista el index no se inicie en cero se suma 1
    console.log(`${index + 1}.${opcion}`);
  }
  );
  //con el .length se limita el numero de opciones a ingresar
  const respuesta = rl.question(`Ingresa el numero de tu opcion (1-${eleccion.length}): `,
    {
      min: 1,
      max: eleccion.length
    }
  );
  return eleccion[respuesta - 1];
};

let contaPartidas = 0;
let partidasGanadasJugador1 = 0;
let partidasGanadasJugador2 = 0;

async function jugar() {


  do {
    if (contaPartidas < partidas) {
      let ganadorPartida = null;
      do {
        //el await nos permite esperar o tomar una pausa para el usuario
        const jugador1 = await opcion(1);
        console.log(`jugador 1 eligio: ${jugador1}`);
        const jugador2 = await opcion(2);
        console.log(`jugador 2 eligio: ${jugador2}`);
        //Doble && Es true si un conjunto de operandos booleanos si y solo si todos los operandos son true
        //Triple === es un operador de estricta igualdad; 
        //operandos de distinto tipo de valor son diferentes y nunca similares

        if (jugador1 === jugador2) {
          console.log('empate');
        }
        else if (jugador1 === 'piedra' && jugador2 === 'tijera') {
          console.log('Gana el jugador 1');
          ganadorPartida = 1;
        }
        else if (jugador1 === 'piedra' && jugador2 === 'papel') {
          console.log('Gana el jugador 2');
          ganadorPartida = 2;
        }
        else if (jugador1 === 'papel' && jugador2 === 'tijera') {
          console.log('Gana el jugador 2');
          ganadorPartida = 2;
        }
        else if (jugador1 === 'papel' && jugador2 === 'piedra') {
          console.log('Gana el jugador 1');
          ganadorPartida = 1;
        }
        else if (jugador1 === 'tijera' && jugador2 === 'piedra') {
          console.log('Gana el jugador 2');
          ganadorPartida = 2;
        }
        else if (jugador1 === 'tijera' && jugador2 === 'papel') {
          console.log('Gana el jugador 1');
          ganadorPartida = 1;
        }
// el signo de admiracion es para negar
      } while (!ganadorPartida);
      if (ganadorPartida === 1) {
        partidasGanadasJugador1++;
      } else {
        partidasGanadasJugador2++
      }
    }

    contaPartidas++;
 
 if (partidasGanadasJugador1 === partidasGanadasJugador2){
      console.log("Hay un empate de partidas, Ahora el desempate!!");
  partidas++;
    }

  } while (contaPartidas < partidas);

  console.log(`Total de partidas ganadas por el jugador 1: ${partidasGanadasJugador1}`);
  console.log(`Total de partidas ganadas por el jugador 2: ${partidasGanadasJugador2}`);

  if (partidasGanadasJugador1>partidasGanadasJugador2) {
    console.log("Felicidades Gana el Jugador 1");
  } 
  else {
    console.log("Felicidades Gana el Jugador 2");
  }

}


jugar();