//1) Programa una función que cuente el número de caracteres de una cadena de texto, 
//pe. miFuncion("Hola Mundo") devolverá 10.

const contadorLetras = cadenaTexto =>
{
    if(typeof cadenaTexto === 'string')
    {
        return `El numero de letras de la cadena de texto es: ${cadenaTexto.length}`;
    }
    else
    {
        return 'Parametro invalido';
    }
}

console.log(contadorLetras('Jack Dowson'));

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortadorTexto = (cadenaTexto, numeroCaracteres) =>
{
    if(typeof cadenaTexto === 'string' && typeof numeroCaracteres === "number" )
    {
        let cadenaTextoRecortada = cadenaTexto.slice(0,numeroCaracteres*-1);
        return cadenaTextoRecortada;
    }
    else
    {
        return 'Parametro invalido';
    }
}

console.log(recortadorTexto('Jack Bolton', 5));

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
//pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const separadorTexto = (cadenaTexto, separador) =>
{
    if(typeof cadenaTexto === 'string' && typeof separador === "string" )
    {
        array = cadenaTexto.split(separador);
        return array;
    }
    else
    {
        return 'Parametro invalido';
    }
}

console.log(separadorTexto('Jack in the, box', ' '));

//4) Programa una función que repita un texto X veces, 
//pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetidorTexto = (cadenaTexto, numeroVeces) => 
{
    if(typeof cadenaTexto === 'string' && typeof numeroVeces === "number")
    {
        let superCadenaTexto = '';
        for(let i = 0; i < numeroVeces; i++)
        {
            superCadenaTexto = superCadenaTexto.concat(' ', cadenaTexto);
        }
        return superCadenaTexto;
    }
    else
    {
        return 'Parametro invalido';
    }
}

console.log(repetidorTexto('John Bolton', 10));

