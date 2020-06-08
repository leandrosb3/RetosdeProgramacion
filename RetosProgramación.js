//Reto #1 “Hola Mundo”
var nombre = prompt("Cual es tu nombre");
alert('Hola '+ nombre);

//Reto #2 “Hola… nombre y apellido:”
var nombre = prompt("Cual es tu nombre");
var apellido = prompt("CUal es tu apellido");
alert('Hola '+ nombre +' '+ apellido);

//Reto #3 “Mensaje multilínea”
console.log('Platzi cuenta con cursos de: ');
for(var x = 1 ; x < 7; x++)
{
    console.log('Categoria'+x);
}

//Reto #4 “Suma de enteros”
var valor1 = prompt('inserta el primer numero'); 
var valor2 = prompt('inserta el segundo numero');

functionSuma(valor1, valor2, resultado)
{ 
    
    resultado = parseFloat(valor1) + parseFloat(valor2);
    return alert( valor1 + '+' + valor2 +  '=' + resultado );
}

var sumar = Suma(valor1, valor2);

//Reto #5 “Suma y multiplicación”
var valor1 = prompt('inserta el primer numero'); 
var valor2 = prompt('inserta el segundo numero');
var valor3 = prompt('inserta el multiplo');

functionSuma(valor1, valor2, valor3, resultado)
{ 
    
    resultado = parseFloat(valor1) + parseFloat(valor2);
    resultado = resultado * parseFloat(valor3);
    return alert('Datos de entrada: '+valor1+ ', ' +valor2+ ', ' +valor3 );

}

var sumar = Suma(valor1, valor2, valor3);
