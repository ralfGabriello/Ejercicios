
//15) Programa una función para convertir números de base binaria a decimal y viceversa, 
//pe. miFuncion(100,2) devolverá 4 base 10.

console.info('Ejercicio 15');

const binarioDecimal_decimalBinario = (numero, base) =>
{
    if(base === 2)
    {
        if(typeof numero !== "string" && typeof numero !== "number") return 'Numero binario invalido';
        if(typeof numero === "number") numero = numero.toString();
        numero = numero.split('');
        numero.reverse();
        let suma = 0;
        for(let i = 0; i < numero.length; i++)
        {
            if(parseInt(numero[i]) !== 0 && parseInt(numero[i]) !== 1) return 'Numero binario invalido'
            numero[i] *= Math.pow(2,i)
            suma += numero[i];
        }
        return suma;
    }
    else if(base === 10)
    {
        if(typeof numero !== "number") return 'Numero decimal invalido';
        let numeroBinario = [];
        while(numero !== 1)
        {
            numeroBinario.push(numero % 2);
            numero = Math.floor(numero / 2);
        }
        numeroBinario.push(1);
        numeroBinario.reverse();
        numeroBinario = numeroBinario.join('');    
        return numeroBinario;
    }
    return 'Base invalida';
}

console.log(binarioDecimal_decimalBinario(34,10));
console.log(binarioDecimal_decimalBinario(100010,2));
console.log(binarioDecimal_decimalBinario('111A0',2));
console.log(binarioDecimal_decimalBinario('11320',2));

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
//pe. miFuncion(1000, 20) devolverá 800.

console.info('Ejercicio 16');

const aplicaDescuento = (monto, porcentaje) =>
{
    if(porcentaje < 0 || porcentaje > 100 || typeof porcentaje !== "number") return 'Porcentaje invalido';
    if(typeof monto !== "number") return 'Monto invalido';
    let descuento = porcentaje/100*monto;
    return Math.round(monto - descuento);
}

console.log(aplicaDescuento(1000, 98));
console.log(aplicaDescuento(3213, 28));
console.log(aplicaDescuento(3213, 'Jack'));
console.log(aplicaDescuento(3213, 999));
console.log(aplicaDescuento('Jack', 28));

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

console.info('Ejercicio 17');

const date = new Date(2021,6,11);
console.log(date);
const cuantosAniosHanPasado = (fechaUsuario) =>
{
    const fechaActual = new Date();
    if(fechaUsuario.getFullYear() > fechaActual.getFullYear() || (fechaUsuario.getFullYear() === fechaActual.getFullYear() && fechaUsuario.getMonth() > fechaActual.getMonth() + 1)) return 'El futuro.'
    let diferencia = fechaActual.getFullYear() - fechaUsuario.getFullYear();
    let diferenciaMeses = fechaActual.getMonth() + 1 - fechaUsuario.getMonth() 
    let diferenciaDias = fechaActual.getDate() - fechaUsuario.getDate();
    if(diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) return (diferencia - 1);
    if(diferenciaMeses >= 0 || (diferenciaMeses === 0 && diferenciaDias > 0)) return (diferencia); 
}

console.log(cuantosAniosHanPasado(date));
console.log(cuantosAniosHanPasado(new Date(1972, 4, 23)));
console.log(cuantosAniosHanPasado(new Date(1832, 9, 11)));
