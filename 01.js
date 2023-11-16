/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

  let soloNumeros = [];
  let infinito = -Infinity;
  for(let i = 0; i < array.length; i++){
    if(array[i] > infinito){
    soloNumeros.push(array[i])  
  }
}
return soloNumeros;
}

let ejemplo1 = [1, 'Henry' ,2];
let resultado1 = soloNumeros(ejemplo1);
console.log(resultado1);


// No modifiques nada debajo de esta linea //


module.exports = soloNumeros