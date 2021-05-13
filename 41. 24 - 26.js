
//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el 
//segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

console.info('Ejercicio 24');

const ordenarAscendienteDescendiente = array =>
{
    if(!(array instanceof Array)) return 'Parametro invalido';
    for(elemento of array) if(typeof elemento !== "number") return 'Array invalido';
    const objeto = 
    {
        ascendente: array.sort((a, b) => a - b).slice(), //Utilizamos el metodo slice() para copiar LOS ELEMENTOS (NO EL ARRAY EN SI) del array al atributo ascendente, sin embargo estos 2 arrays NO son iguales.
        descendente: array.sort((a, b) => b - a).slice() //Utilizamos el metodo slice() para copiar LOS ELEMENTOS (NO EL ARRAY EN SI) del array al atributo descendente, sin embargo estos 2 arrays NO son iguales.
    }
    return objeto;
}

console.log(ordenarAscendienteDescendiente([3,1,7,5,76,43,12,43,6]));
console.log(ordenarAscendienteDescendiente(true));
console.log(ordenarAscendienteDescendiente([3,'Hola']));

array = [1,2,3]; //Le asignamos eso a array.
array2 = array; //Array2 es literalmente array
array2.reverse(); //Por lo tanto si implementamos el metodo reverse() en array2
console.log(array2); //Estamos alterando array2
console.log(array); // Pero . . . tambien array.
//Para evitar una confusion, en vez de utilizar solo el operador de asignacion '=', se utiliza 
//tambien el metodo slice() para copiar los elementos de un array a otro.

const ordenarAscendienteDescendienteMetodoBurbuja = array =>
{
    if(!(array instanceof Array)) return 'Parametro invalido';
    for(elemento of array) if(typeof elemento !== "number") return 'Array invalido';
    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < array.length - 1; j++)
        {
            if(array[j] > array[j + 1])
            {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    const objeto = 
    {
        ascendente: array.slice(),
        descendente: array.reverse().slice()
    }

    return objeto;
}

console.log(ordenarAscendienteDescendienteMetodoBurbuja([3,1,7,5,76,43,12,43,6]));
console.log(ordenarAscendienteDescendienteMetodoBurbuja('Hola'));
console.log(ordenarAscendienteDescendienteMetodoBurbuja([3,{},7,5,76,43,12,43,6]));

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
//pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

console.info('Ejercicio 25');

const eliminateDuplicate = array =>
{
    if(!(array instanceof Array)) return 'Parametro invalido';
    for(let i = 0; i < array.length; i++)
    {
        for(let j = (i + 1); j < array.length; j++)
        {
            if(array[i] === array[j]) array.splice(j,1)
        }
    }
    return array;
}

console.log(eliminateDuplicate(["x", 10, "x", 2, "10", 10, true, true]));
console.log(eliminateDuplicate('Hola'));

//26) Programa una función que dado un arreglo de números obtenga el promedio, 
//pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

console.info('Ejercicio 26');

const calculaPromedio = array =>
{
    if(!(array instanceof Array)) return 'Parametro invalido';
    for(elemento of array) if(typeof elemento !== "number") return 'Array invalido';
    let suma = 0;
    for(numero of array)
    {
        suma += numero;
    }
    let promedio = suma / array.length;
    return promedio;
}

console.log(`El promedio es: ${calculaPromedio([9,8,7,6,5,4,3,2,1,0])}`)
console.log(`El promedio es: ${calculaPromedio('Hola')}`);
console.log(`El promedio es: ${calculaPromedio([9,8,7,6,'Hola',4,3,2,1,0])}`);
