
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio_501_600 = () => 
{
    return Math.floor(Math.random() * (600 - 501)) + 501;
}

console.log(numeroAleatorio_501_600());

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido 
//que en otro), pe. miFuncion(2002) devolverá true.

const determinadorCapicua = (numero) => 
{
    let numeroString = numero.toString() //Utilizacion del mitico metodo toString() . . . aleluya
    numeroStringReverse = numeroString.split('').reverse().join('') //Lo convertimos a un array, le invertimos y luego lo convertimos a un string.
    return (numeroString === numeroStringReverse) ? `El numero ${numero} es capicua` : `El numero ${numero} no es capicua`; 
}

console.log(determinadorCapicua(323));

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se 
//define como el producto de todos los números enteros positivos desde 1 hasta n), 
//pe. miFuncion(5) devolverá 120.

const factorialNumero = numero =>
{
    let factorial = 1;
    for(let i = 1; i <= numero; i++)
    {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialNumero(10));
  