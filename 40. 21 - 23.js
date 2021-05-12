
//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

console.info('Ejercicio 21');

const elevarCuadradoArray = array =>
{
    if(!(array instanceof Array)) return 'Parametro invalido';
    for(let i = 0; i < array.length; i++)
    {
        if(typeof array[i] !== "number") return 'Array invalido';
        array[i] = array[i]*array[i]
    }
    return array;
}

console.log(elevarCuadradoArray([1,2,3,4,9]));
console.log(elevarCuadradoArray('Hola'));
console.log(elevarCuadradoArray([1,2,3,4,'Hola']));

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
//pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

console.info('Ejercicio 22');

const mayorMenorArray = array =>
{
    let mayor = Number.NEGATIVE_INFINITY, menor = Number.POSITIVE_INFINITY;
    if(!(array instanceof Array)) return 'Parametro invalido';
    for(let i = 0; i < array.length; i++)
    {
        if(typeof array[i] !== "number") return 'Array invalido';
        if(array[i] > mayor) mayor = array[i];
        if(array[i] < menor) menor = array[i];
    }
    array = [];
    array.push(mayor);
    array.push(menor);
    return array;
}

console.log(mayorMenorArray([1,2,32,91,5,6]));
console.log(mayorMenorArray('Jack'));
console.log(mayorMenorArray([1,2,32,91,'Jack',6]));

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
//almacena los números pares y en el segundo los impares, 
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

console.info('Ejercicio 23');

const paresImpares = array =>
{
    if(!(array instanceof Array)) return 'Parametro invalido';
    pares = [];
    impares = [];
    for(let i = 0; i < array.length; i++)
    {
        if(typeof array[i] !== "number") return 'Array invalido';
        if(array[i] % 2 === 0) pares.push(array[i]);
        else impares.push(array[i]);
    }
    const objeto = 
    {
        pares, //Toma directamente el array pares
        impares //Toma directamente el array impares
    }
    return objeto;
}

console.log(paresImpares([12,34,21,43,54,654,43,12,3,435,54,6757]));
console.log(paresImpares('Jack'));
console.log(paresImpares([12,34,21,43,54,654,43,'Hola',3,435,54,6757]))