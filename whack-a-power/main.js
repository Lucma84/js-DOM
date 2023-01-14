const gameButtons = document.querySelectorAll('.game-button');
const pointsTitle = document.querySelector('#points'); // (2)
const gameStartButton = document.querySelector('.start-button');

let previousButton;
let points = 0;

const handleToggleButtons = () => {
  // Va a sacar un boton aleatorio y le va a poner la propiedad show.
  if (previousButton) {
    previousButton.classList.remove('show');
  }
  const randomIndex = Math.floor(Math.random() * gameButtons.length);
  const randomButton = gameButtons[randomIndex]; // 1

  if (randomButton !== previousButton) {
    randomButton.classList.add('show');
    randomButton.classList.remove('not-clickable');
    previousButton = randomButton;
  } else {
    handleToggleButtons();
  }
};

const handleClickGameButton = (event) => {
  const isClickable = event.target.className.includes('show');
  if (isClickable) {
    points += 1;
    pointsTitle.innerText = points;
    event.target.classList.add('not-clickable'); // 3
  }
};

for (let i = 0; i < gameButtons.length; i++) {
  const gameButton = gameButtons[i];

  gameButton.addEventListener('click', handleClickGameButton);
}

const onButtonClickedStartGame = () => {
  const interval = setInterval(handleToggleButtons, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
};

gameStartButton.addEventListener('click', onButtonClickedStartGame);


// Como sacar un boton aleatorio? Hay una función en JS que se llama Math.random que si la invocamos nos genera un numero aleatorio del 0 al 1. Si yo tengo gameButtons que es un array con longitud. Si multiplicamos Math.random por la longitud del array nos va dando números aleatorios. Con el problema de que tiene decimales y no podemos entrar en un array con decimales, por lo tanto hay q redondear los decimales hacia abajo (para q concuerde con la longitud del array) y lo conseguimos con otra funcion de js llamada Math.floor
// De los botones, saco un boton aleatorio (1)
// Y a ese boton random le voy a asignar la clase show
// Ahora tenemos que hacer es que al boton antiguo se le quite la clase show.
// Creamos una variable global que se llama previousButton y en la funcion añadimos un if. Y esto es lo que haría. Si cuando yo invoque a la funcion hay un previousButton ya guardado, le quito la clase show, si no, sigo, cuando creo un boton random nuevo le asigno ese boton a la variable para que la próxima vez q sea invocada tenga el boton anterior. Y así tenemos un acumulador de botones.
// Vamos a hacer que cuando haga un click en un boton me sume un punto. Para ello creamos un contador global
// Haremos un bucle for para sacar cada boton y a ese boton le añadiremos un listener de click
// Creamos la función, le pasamos el evento y tenemos que ver si es clickable, será clickable si tiene la clase show, si no no. Si es clickable, sumamos un punto.
// Se lo vamos a poner a nuestro marcador de puntos, para ello lo buscamos (2) y cambiamos para q el innerText sea igual a los puntos.
// Tenemos un problema, y es que pueden pinchar muchas veces en el boton y les suma puntos... para ello meteremos otra clase en html que sea not-clickable y evitar que sumen puntos si dan muchas veces y lo añadimos al js (3)
// Problema: el boton se ha quedado not-clickable para siempre, habra que asegurarnos de que cuando le metemos la clase show, le quitamos la clase not-clickable
