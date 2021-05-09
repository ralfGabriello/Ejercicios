//5) Programa una función que invierta las palabras de una cadena de texto, 
//pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const getReverseString = (string) => 
{
    if(typeof string === "string")
    {
        let reverseString = '';
        for(let i = string.length - 1; i >= 0; i--) reverseString += string[i];
        return reverseString;
    }
    return 'Parametros invalidos';
}

console.log(getReverseString('Hola mundo mi nombre es Jack'));

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
//pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2

const getNumeroVecesRepitePalabra = (string, palabraBuscar) => 
{
    if(typeof string === "string" && typeof palabraBuscar === "string")
    {
        let arrayPalabras = string.split(" "), numeroVeces = 0;
        arrayPalabras.forEach(palabra => {
            if(palabra.toLowerCase() === palabraBuscar.toLowerCase()) numeroVeces++;
        });
        return numeroVeces;
    }
    return 'Parametros invalidos';
}

console.log(getNumeroVecesRepitePalabra('El agua esta en el cielo, el agua esta en la tierra, el agua esta de todas partes.', 'Agua'));

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
//(que se lee igual en un sentido que en otro), 
//pe. mifuncion("Salas") devolverá true.

const esPalindromo = (string) =>
{
    if(typeof string === "string")
    {
        reverseString = getReverseString(string);
        if(reverseString.toLowerCase() === string.toLowerCase()) return true;
        return false;
    }
    return 'Parametro invalido';
}

console.log(esPalindromo('Otto'));

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5

const eliminarPatron = (string, ...patrones) => 
{
    let stringConPatronEliminado = string;
    for(let i = 0; i < patrones.length; i++)
    {
        stringConPatronEliminado = stringConPatronEliminado.replaceAll(patrones[i], '');
    }
    return stringConPatronEliminado;
}

console.log(eliminarPatron("Jackson143, Jackson243, Jackson343", "Jackson", '43'));