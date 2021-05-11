//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

console.info('Ejercicio 18')

const contadorVocalesConsonantes = (cadenaTexto) =>
{
    let vocales = 0, consonantes = 0;
    cadenaTexto = cadenaTexto.toLocaleLowerCase();
    for(let i = 0; i < cadenaTexto.length; i++)
    {
        switch(cadenaTexto[i])
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vocales++;
                break;
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'g':
            case 'h':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                consonantes++;
                break;
        }
    }
    return `Tiene ${vocales} vocales y ${consonantes} consonantes`;
}

console.log(contadorVocalesConsonantes("Murcielago"));
console.log(contadorVocalesConsonantes("Hola mundo"));
console.log(contadorVocalesConsonantes("Jackson"));
console.log(contadorVocalesConsonantes("JavaScript"));

//19) Programa una función que valide que un texto sea un nombre válido, 
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.

console.info('Ejercicio 19')

const validarNombre = (nombre) =>
{
    if(typeof nombre !== "string") return 'Parametro invalido';
    nombre = nombre.split(' ');
    if(nombre.length === 2 || nombre.length === 3 || nombre.length === 4)
    {
        let j = 0;
        for(let i = 0; i < nombre.length; i++) if(nombre[i].length > 1){ j++; }
        if(j === nombre.length) return 'Nombre correcto';
    } 
    return 'Nombre incorrecto';
}

console.log(validarNombre('Gabriel Ralf Caceres Gabriello'));
console.log(validarNombre('Gabriel Caceres Gabriello'));
console.log(validarNombre('Gabriel Gabriello'));
console.log(validarNombre('Gabriel'));
console.log(validarNombre('Gabriel Ralf Caceres a'));

//20) Programa una función que valide que un texto sea un email válido, 
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

console.info('Ejercicio 20')

const validadorGmail = gmail =>
{
    let gmailArray = gmail.split('');
    let arrobas = 0;
    let puntos = 0;
    gmailArray.forEach((elemento) =>
    {
        if(elemento === '@') arrobas++;
        if(elemento === '.') puntos++;
    })
    if(arrobas === 1 && puntos === 1)
    {
        gmailArray = gmail.split('@');
        if(gmailArray[1] === 'gmail.com') return 'El gmail es correcto';    
    }
    return 'Gmail invalido';
}

console.log(validadorGmail('ja.ckajacka@gmail.com'));


