// Leer Html desde JS

const h1 = document.querySelector('h1');
const ejemplo = document.querySelector('.ejemplo');
const input = document.querySelector('input');
const ejemplo2 = document.querySelector('#ejemplo2');

console.log(ejemplo);
console.log(input.value)


// EDITAR Y MODIFICAR HTML DESDE JAVASCRIPT

h1.innerHTML = 'Cambio de titulo <br> salto de linea'
h1.innerText = 'Lo cambio de nuevo'

// '.innerHTML' es una funcion que modifica no solo en texto sino tambien etiquetas, mientras que .innertext solo modifica texto

console.log(h1.getAttribute("class"));
h1.setAttribute('class', 'DOM');

// '.getAttribute' nos permite leer el nombre o valor del atributo que deseemos saber.  '.setAttribute' permite modificar el nombre de dicho atributo.

h1.classList.add('Javascript');
h1.classList.remove('DOM')

// '.classlist.add' agrega el contenido que queramos en el valor de las clases, y '.classlist.remove' elimina el contenido que especifiquemos.

input.value = '1234567'

// 'input.value' modifica el contenido del input.

const img = document.createElement('img');
img.setAttribute('src', 'https://www.moto1pro.com/sites/default/files/yamaha-yzf-r3.jpg');

ejemplo2.innerHTML = ""
ejemplo2.append(img);

// 'document.createElement' nos permite insertar elementos nuevos en el archivo HTML. En el ejemplo anterior se inserto una imagen a travez de una etiqueta ya existente en el archivo html con '.append' y borramos el contenido de esta etiqueta con '.innerHTML' asignandole un espacio entre comillas
    