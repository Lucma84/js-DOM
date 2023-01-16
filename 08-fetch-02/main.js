// Vamos a cargar pokemons de forma dinámica
// En pokeapi en API v2 nos salen los doc y en pokemon cogemos la URL
// Queremos que el pokemon venga de forma dinámica, creamos una variable y le damos una Id.
// Pasamos a hacer la función fetch que tendrá dentro otra función, interpolamos las variables, vamos a la API y cuando tenemos la respuesta en formato json lo resolvemos con otra función.
// Creamos una variable global y cuando termine la request le asignamos a esa variable global los datos que queramos
// Creamos una funcion para renderizar el pokemon.
// Buscamos el div en el html y lo asignamos a una variable (pokemonContainer)
// Hacemos una función que diga, cuando invoquemos a la funcion renderPokemon, generame el template y al contenedor le sumas ese template y render pokemon lo invocamos al final de cada fetch, para que seguro seguro el objeto global tenga esa información, si la declaramos en otro sitio nos dará fallos, tiene que ir al final de ese then, xq tiene q ir dentro de la promesa, yo dibujaré el pokemon cuando la promesa haya terminado y mi objeto global tenga valores.
// Como lo vamos a utilizar muchas veces, creamos una función, fetchPokemon
// La hacemos dinámica utilizando un input, y como la id es un número, será un input de tipo number. Lo ponemos en html
// Lo primero que hacemos ahora es buscar ese input. searchInput va a ser igual al valor inicial que nosotros hayamos dado.
// Añadimos un listener al input y handlesearch va a recibir el evento, del evento sacamos el valor del evento en ese momento y cambiamos la variable global del pokemon actual por el valor que nos ha dado el input, y ahora que lo hemos cambiado, invocamos a fetch, por qué en este orden? Porque yo recojo el valor, lo pongo en la ID, invoco a fetch, fetch usa esa ID para pedir un pokemon nuevo, lo pide y despues lo pone en el objeto global, lo renderiza y lo va concatenando en el html.
// Como no queremos que repita los pokemons si los vuelven a marcar y tenemos otro problema, si pongo número smuy rápido va a recibir muchas peticiones y eso es un problema. Hay un metodo para los input que es poner 'change', change detecta q ese input ha cambiado y ha cambiado cuando yo termino de escribir en el. Otra opcion es poner un boton de buscar.
// Lo creamos en HTML y lo buscamos en js. Le ponemos el listener y decimos que cuando el boton search, se clicke yo hago handle Search, que nos sucede ahora? Que el boton aunque reciba un evento.. no tiene el valor del input, pero ya tenemos el searchInput buscado en la variable global, por lo tanto solo habrá que asignar ese valor (siempre poner AsNumber) a una variable inputValue.
// Ahora vamos a defendernos de que el usuario pueda cargar de la API el mismo contenido. Para ello guardamos las id en una array, que yo pido el 1, se guarda en el array y hago fetch. Que le dan al 1 otra vez, reviso que no esté en el array y lo muestro. Lo que hacemos es cada vez que invoquemos a fecth, vamos a chequear. Antes de hacer el fecth vamos mirar, está la ID en el array? Si, corto la funcion, no! lo meto al array y lanzo el fetch. Así solo pasa 1 vez.

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.querySelector('#pokemon-search');
const searchButton = document.querySelector('#search-button');
const pokemonContainer = document.querySelector('.pokemon-container');
let currentPokemonId = 1;
let currentPokemon;
let pokemonRequests = [];

const getPokemonTemplate = () => {
  return `
        <div class="pokemon">
        <h3>${currentPokemon.name}</h3>
        <span>Id: ${currentPokemon.id}</span>
        <img src="${currentPokemon.image}" alt="${currentPokemon.name}" />
        </div>
    `;
};

const renderPokemon = () => {
  const template = getPokemonTemplate();
  pokemonContainer.innerHTML += template;
};

const fetchPokemon = () => {
  if (pokemonRequests.includes(currentPokemonId)) {
    return;
  } else {
    pokemonRequests.push(currentPokemonId);
  }

  fetch(`${POKEMON_URL}${currentPokemonId}`)
    .then((res) => res.json())
    .then((response) => {   
      currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default,
      };

      renderPokemon();
    });
};

const handleSearch = () => {
  const inputValue = searchInput.valueAsNumber;
  currentPokemonId = inputValue;
  fetchPokemon();
};

searchInput.value = currentPokemonId;
fetchPokemon();
searchButton.addEventListener('click', handleSearch);

// RETO: Trabajar en el index y buscar haciendo un formulario y le de al enter y lo busque.
// Maquetarlo bien con grid y flex.