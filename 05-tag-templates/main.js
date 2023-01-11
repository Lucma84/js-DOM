const QUOTES = [ // Creamos un array que contiene objetos con las quotes.
    {
        quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        author: 'Author 1',
        year: 2022,
    },
    {
        quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        author: 'Author 2',
        year: 2024,
    },
    {
        quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        author: 'Albert Einstein',
        year: 1950,
    },
]

const quotesList = document.querySelector('#quotes-list'); // Paso 8. La ponemos de caracter global porque la queremos añadir lo que hemos recibido en el formulario.

const getQuoteTemplate = (quote, author, year) => { // Paso 1
    return `<div class="quote-block">
    <blockquote>${quote}</blockquote>
    <p>${author} - ${year}</p>
    </div>`
}

// Paso 2. El string que hemos metido dentro de la función yo puedo hacer que valga si lo ponemos dentro de un id html

const setupQuotesList = () => {  // Paso 5.
    // Paso 3. Como queremos meter las quotes del array que hemos creado, hacemos un bucle for.
    for (let i = 0; i < QUOTES.length; i++) {
        const quoteElement = QUOTES[i] 
        quotesList.innerHTML += getQuoteTemplate(
            quoteElement.quote,
            quoteElement.author,
            quoteElement.year
            ); // Paso 4. Vamos a concatenar y por eso ponemos la suma xq el innerHTML de los elementos, es un string, por eso puedo concatenarlo con otro string detrás, ese string es el resultado de invocar a la funcion getQuoteTemplate con las propiedades que queremos.
        }

    }

const handleFormSubmit = (event) => {
    event.preventDefault(); // Al poner esta función prevenimos el comportamiento por defecto del elemento.
    const formElements = event.target.elements; // creamos una constante para esos elementos
    const newQuote = { // Y creamos un nuevo elemento quote utilizando cada input del form. Para ello creamos un nuevo objeto.
        author: formElements.author.value, // Para que no nos de los inputs, debemos meter los value.
        quote: formElements.quote.value,
        year: formElements.year.value,
    }    
    console.log(newQuote); // Vamos a ver que nos llega al hacer el submit. Si metemos .elements, nos llegan los elements
    quotesList.innerHTML += getQuoteTemplate( // Paso 9.
        newQuote.quote,
        newQuote.author,
        newQuote.year
    )

    event.target.reset() // Paso 10.
}

const form = document.querySelector('#quote-form'); // Paso 7
form.addEventListener('submit', handleFormSubmit) 


setupQuotesList();

// Paso 1. Nos traemos el html al js, pero lo tendremos que meter entre template literals para tenerlo en formato js (string) y creamos una funcion y metemos dentro el string interpolado
// Paso 5. Lo vamos a hacer más dinámico y para ello creamos una función, seteamos todo y metemos dentro lo que hemos hecho antes.
// Paso 6. Creamos un formulario en HTML.
// Paso 7. Cuando creamos un formulario y le damos al submit, la pantalla se recarga y no queremos eso. Xq nuestro js se carga de nuevo y nosotros queremos que sea sobre la marcha. Para ello buscamos ese form y le decimos que no recargue la página.
// Paso 8. Sacamos la variable quotesList fuera para tenerla con caracter global
// Paso 9. Metemos la newQuote recibida del formulario con un innerHTML en nuestro DOM, pasando las propiedades que queremos que aparezcan.
// Paso 10. Limpiamos el formu
        