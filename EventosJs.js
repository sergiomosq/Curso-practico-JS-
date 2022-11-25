
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#button');
const result = document.querySelector('#resultado');

function evento(){

const res = (+input1.value) + (+input2.value); 
result.innerText = "Resultado: " + res;
    
}

// el evento 'onClick' permite realizar una accion por medio de JS al usuario dar click en algun boton.  
// en este caso utilizamos este evento para realizar una suma con dos numero dados por el usuario por medio de inputs. Usamos una función en el cual se realiza la operación. Luego se envia el resultado al usuario por medio de un parrafo (<p>), en el cual usamos la función '.innerText' para que aparezca allí dicho resultado.

