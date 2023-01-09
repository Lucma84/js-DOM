// Un evento es una función a la que yo añado un elemento del DOM y esa funcion se lanza cada vez que ocurra algo en especifico (click, mover el raton, un input..)

// Las funciones de evento: al nombre ponerle un on delante o un handle.

let inputValue = '';

const onButtonClicked = () => {
  alert(`El input tiene como valor: ${inputValue}`);
};

// const onInputChanged = (input) => {
//   inputValue = input.value;

//   const inputTextH3 = document.querySelector('#input-text');
//   inputTextH3.innerText = inputValue;
// };

const onInputChanged = (event) => {
    inputValue = event.target.value;
  
    const inputTextH3 = document.querySelector('#input-text');
    inputTextH3.innerText = inputValue;
  };


// Separamos nuestro código, lo quitamos de html (elementos comentados) y lo hacemos de la siguiente forma

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', onButtonClicked);

const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('input', onInputChanged); // Sin modificar la función de arriba nos saldrá undefined, no recibe valor, si no un evento.
