const TECHNOLOGIES = [
  'Javascript',
  'HTML',
  'CSS',
  'React',
  'Vite',
  'TypeScript',
];

const setupTechnologiesList = () => { // Creamos una función que contenga todo.
    const listElement = document.createElement('ul'); // Creo un elemento ul
    listElement.className = 'technologies'; // Le pongo la clase 'technologies'
    
    for (let i = 0; i < TECHNOLOGIES.length; i++) { // recorro la array
        const technlogy = TECHNOLOGIES[i]; // asigno a technology cada tecnologia que voy cogiendo de recorrer el array
        
        const liElement = document.createElement('li'); // creo un elemento 'li'

        const buttonElement = document.createElement('button'); // creo un elemento 'button'
        buttonElement.innerText = 'Eliminar'; // Le pongo el nombre al boton.
        buttonElement.className = 'delete-button'; // Añado la clase al elemento button para luego buscarlo.

        liElement.innerText = technlogy; // Le asigno el nombre de la tecnologia a cada li element. con innerText
        liElement.append(buttonElement); // Añado el elemento boton a la lista.
        listElement.append(liElement); // Voy a meter cada elemento li en la lista (listElement)
    }
    
    document.body.append(listElement); // Meterlo dentro del DOM será lo último que hagamos
}

const handleDelete = (event) => {
    const liElement = event.target.parentElement; // Buscamos el elemento padre para poder eliminarlo
    liElement.remove(); // Y se cargará el nodo del DOM.
}

const addDeleteButtonListeners = () => {
    const deleteButtons = document.querySelectorAll('.delete-button'); // Buscamos y seleccionamos todos (all) los botones y los metemos a la variable deleteButtons
    for (let i = 0; i < deleteButtons.length; i++) { // Recorremos todos los botones
        const deleteButton = deleteButtons[i]; // Vamos a sacar cada botón en las vueltas q vamos dando.
        deleteButton.addEventListener('click', handleDelete); // Añadimos un event listener para cada vez que se haga click, realice la función de borrar el boton.
    }
}

setupTechnologiesList(); // La invocamos
addDeleteButtonListeners(); // Invocamos la funcion deleteButton justo después de la que añade nuestros elementos a la lista.