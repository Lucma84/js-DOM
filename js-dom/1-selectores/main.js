// Queremos elegir un h1. Lo primero lo asignamos a una constante
const title = document.querySelector('h1');
console.log(title);

// Podemos cambiar cosas de ese h1 con innertext
title.innerText = 'Aprendemos selectores con JS';

// Si tenemos varios h2 pero solo queremos elegir uno de ellos. querySelector siempre elige el primer elemento del DOM que matchea.
const secondTitle = document.querySelector('h2');
console.log(`SecondTitle:`, secondTitle);

// Si quiero el último elemento:
const lastTitle = document.querySelector('h2:last-of-type');
console.log(`lastTitle:`, lastTitle);

// Otra opción es poner una id al elemento siempre que sepamos que va a ser único y buscarlos con:
const studyTitle = document.getElementById('study');
console.log(`Title by ID`, studyTitle);
// o con
const studyTitleByQuerySelector = document.querySelector('#study');
console.log(`Title by ID with query`, studyTitleByQuerySelector);

// También tenemos la opción por clase y a través de un bucle for cambiamos los textos internos de los elementos.
const technologies = document.getElementsByClassName('technology');
console.log(`Technologies:`, technologies);

for (let i = 0; i < technologies.length; i++) {
  const technology = technologies[i];
  const prevText = technology.innerText;
  technology.innerText = `${i + 1} - ${prevText}`;
}

// También se puede hacer con QuerySelector
const technologies2 = document.querySelectorAll('.technology');
console.log(`Technologies:`, technologies2);

for (let i = 0; i < technologies2.length; i++) {
  const technology = technologies2[i];
  const prevText = technology.innerText;
  technology.innerText = `${i + 1} - ${prevText}`;
}

// Buscar por clase y que tenga un hijo a dentro del elemento
const THEPOWER_URL = 'https://www.thepowermba.com/es/';
const titleLink = document.querySelector('h2.title-link > a');
console.log('Title link', titleLink);
titleLink.href = THEPOWER_URL;
