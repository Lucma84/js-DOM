// const sayHello = () => { // Ej-1
//     console.log('Hello!');
// }

// setTimeout(sayHello, 3000); 

// setTimeout es una funcion que se invoca pero que recibe 2 argumentos diferentes. El primer argumento es una funcion dentro (callback). Se va a invocar cuando termine el intervalo de timeout. Se pone en milisegundos. 3seg = 3000ms
// Como lleva una funcion como primer argumento, podemos hacer la función primero y luego pasarsela al setTimeout. Ej-1

let timeout;
let timeoutTime = 2000 // 4

const toggleButton = document.querySelector('#toggle');
const lightbulb = document.querySelector('#lightbulb');
const timerInput = document.querySelector('#timer');

const toggleLightbulb = () => {
    lightbulb.classList.toggle('off') // Toggle comprueba si tiene la clase para quitarla y si no la pone
    lightbulb.classList.toggle('on')
}

const turnOffLightbulb = () => {
    console.log('Apagando la bombilla')
    lightbulb.classList.add('off') // ponemos el add al off xq queremos que siempre esté apagada.
    lightbulb.classList.remove('on')
}

const handleToggle = () => {
    if (timeout) {
        clearTimeout(timeout) // 1
    }

    toggleLightbulb(); // 2 

    timeout = setTimeout(turnOffLightbulb, timeoutTime) // 3 - 5
};

const handleInputTime = (event) => {
    const newTime = event.target.valueAsNumber;
    console.log(newTime);
    timeoutTime = newTime
}


toggleButton.addEventListener('click', handleToggle);
timerInput.value = timeoutTime; // (6)
timerInput.addEventListener('input', handleInputTime);

// Como queremos utilizar setTimeout para que apague y encienda la bombilla...creamos una función para el apagado y encendido
// Y dejamos handleToggle para meter la funcion de apagado y encendido y el setTimeout
// Crearemos otra funcion con add y remove para que al darle muchas veces al boton no nos haga muchos timeout y se quede la bombilla encendida o sucedan cosas que no queremos, la creamos y la ponemos en el setTimeout. Para que cuando hagamos todos los toggles, la bombilla quede apagada.
// setTimeout se invoca muchas veces y para que nos e invoque tantas veces creamos una variable global (timeout), la meteremos dentro de la función y usaremos un if para comprobar si ha hay un contador, si hay uno ya me lo cargo (1), le doy la vuelta a la bombilla (2) y creo un contador nuevo (3)
// Vamos a hacer q el tiempo sea una variable para poder cambiarlo sobre la marcha (4) y la ponemos como argumento del setTimeout (5)
// Nos vamos a html y hacemos un input para que sea dinámico.
// Creamos la variable y buscamos el input, añadimos un eventListener y creamos una función.
// Esa función sacará el número del input a través del event (para que no sea un string y si un numero ponemos valueAsNumber) y le asignamos el valor a la variable newTime
// Entonces ahora, cada vez que yo invoque a handleToggle, como yo leo la variable global timeoutTime, que esa variable la estoy reescrbiendo cada vez q escribo en el input, yo si el inputo no lo toco, vale 2000.
// Para poner un mínimo de tiempo en el input, hacemos el paso (6)