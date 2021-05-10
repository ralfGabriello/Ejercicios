
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
//o no, pe. miFuncion(7) devolverá true.

const determinadorNumeroPrimo = numero =>
{
    if(typeof numero !== "number") return 'Debes ingresar un numero';
    for(let i = numero - 1; i > 1; i--)
    {
        if(numero % i === 0) return "El numero no es primo";
    }
    return "El numero es primo";
}
console.log(determinadorNumeroPrimo(151));

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const determinadorNumeroParImpar = numero =>
{
    if(typeof numero !== "number") return 'Debes ingresar un numero';
    if(numero % 2 === 0) return "El numero es par";
    return "El numero es impar";
}
console.log(determinadorNumeroParImpar(197));

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") 
//devolverá 32°F.

/*
let c = 21;
let f = (c * 9/5) + 32;
console.log(f);
*/

/*
let f = 21;
let c = (f - 32) * 5/9;
console.log(c);
*/

const convertidor_CF_FC = (temperatura, tipoTemperatura) =>
{
    if(typeof temperatura !== "number") return 'La temperatura debe ser un numero';
    tipoTemperatura = tipoTemperatura.toUpperCase();
    if(tipoTemperatura === 'C')
    {
        temperatura = (temperatura * 9/5) + 32;
        return temperatura;
    }
    else if(tipoTemperatura === 'F')
    {
        temperatura = (temperatura - 32) * 5/9;
        return temperatura;
    }
    return 'Debes introducir C (Celcius) o F (Fahrenheit) como tipo de Temperatura';
}

console.log(convertidor_CF_FC(21, 'c'));
console.log(convertidor_CF_FC(21, 'f'));
console.log(convertidor_CF_FC(21, 'Doritos'));
console.log(convertidor_CF_FC('Doritos', 'f'));
