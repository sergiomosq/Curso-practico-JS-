const inputs = document.querySelectorAll('input');
/*const input2 = document.querySelector('#calcular2');*/
const btn = document.querySelector('#button');
const result = document.querySelector('#resultado');

btn.addEventListener('click', evento);
btn.addEventListener('mousedown', evento2);
inputs[0].addEventListener('focus', evento3);
inputs[0].addEventListener('blur', evento4);
inputs[1].addEventListener('focus', evento5);
inputs[1].addEventListener('blur', evento6);

function evento3 (){
    
    inputs[0].style.backgroundColor = 'yellow';
}

function evento4 (){
    inputs[0].style.backgroundColor = '';

}

function evento5 (){
    inputs[1].style.backgroundColor = 'yellow'
}

function evento6 (){
    inputs[1].style.backgroundColor = ''
}


function evento2 () {
    btn.style.backgroundColor = 'gray';
   
}

function evento(){

const res = (+inputs[0].value) + (+inputs[1].value); 
result.innerText = "Resultado: " + res;
    
}


// .addEventListener' permite que el evento sea escuchado desde nuestro codigo de JS, sin ser necesario que este aparezca en HTML. 

// dentro de los parentesis se ponen: el evento que se desea ser escuchado, y la función que hemos creado para dicho evento.

// Existen varios eventos que se utilizan en este escuchador, los cuales son: click, dblclick, focus, blur, change, mouseover, keypress, entre otros.
