// Fetch es una API de JS propia de los navegadores. A través de Fetch puedo preguntar algo a la API (servidor), que le pregunte algo a la base de datos, la base de datos haga un calculo y me responda.
// API de servidor es un conjunto de direcciones que me permite acceder a cada una de ellas de forma específica y me devuelve informacion.
// Vamos a trabajar con pokeAPI, le vamos a hacer una petición y vamos a pintar en nuestro frontend el pokemos que nos devuelva.

const POKEAPI_URL = 'https://pokeapi.co/api/v2/';

const searchUrl = `${POKEAPI_URL}pokemon/ditto`; // creamos una URL de busqueda que vamos a interpolar dentro la url base y lo que queremos buscar lo ponemos detrás.

// Esa URL se la pasamos a fetch, y fetch va a hacer la petición al servidor donde está guardado ese pokemon y nos va a traer la información. Fetch se comporta como una promesa, lo tenemos que esperar.

const data = fetch(searchUrl); // Si hacemos esto, el console log nos va a devolver una promesa. Vamos a network y/o red y vemos lo que ha devuelto la API. En preview o previa.
console.log(data);

// Como es una promesa y hay que resolverla, haremos lo siguiente:
// Voy a transformar la respuesta que me llega de un servidor en un json y luego resolver esa respuesta
// Ya se pueden hacer 2 cosas, un callback (una función que se invoca cuando llega la hora de resolver esa promesa) o puedo hacer una funcion fuera e invocarla en el then.
// Despues de hacer el fetch, ya tenemos el objeto y con esa información hacemos lo que queramos, ej: pintar un pokemon en el DOM.
// Para sacar la imagen la encontramos en sprites -> front_default
// Creamos una variable global a la cual queremos asignar las propiedades que queramos de la respuesta obtenida (1)
// Creamos el objeto y le asignamos los valores a la variable global (2)
// Tenemos que lanzar un evento para decir, oye, fetch ya ha acabado, pinta el pokemon. Haremos una función de pintar pokemon y la invocaremos. (3)
// Utilizaremos un template (4)
// Y sacaremos los datos de la variable global, que tiene los datos devueltos por el fetch
// Ahora hay q meterlo en el DOM. Crearemos un div container en html.
// Buscamos el Div y le asignamos una variable global (5) y le vamos a añadir el template, para ello asignamos una variable al template.
// Pintamos el pokemon en el html con innerHTML e invocamos a la funcion en el fetch

const pokemonContainer = document.querySelector('#pokemon-container'); // (5)
let pokemonData; // Es let xq va a ir cambiando.

const renderPokemon = () => {
  // (3) - (4)
  const pokemonTemplate = ` 
        <div class="pokemon">
        <span>ID: ${pokemonData.id}</span>
        <h3>${pokemonData.name}</h3>

        <img src="${pokemonData.image}" alt="${pokemonData.name}" />
        </div>
    `;

  pokemonContainer.innerHTML += pokemonTemplate;
};

fetch(searchUrl)
  .then((res) => res.json())
  .then((response) => {
    pokemonData = {
      // (2)
      id: response.id,
      name: response.name,
      image: response.sprites.front_default,
    };
    renderPokemon();
  });
