
const saludo1 = function(evento)
{
    if(evento.target.classList[3] !== "uno") return;
    console.log(`Funcion 1 Hola te saluda ${this.classList[3]}, el click lo origino ${evento.target.classList[3]}`);
}
const saludo2 = function(evento)
{
    if(evento.target.classList[3] !== "dos") return;
    console.log(`Funcion 2 Hola te saluda ${this.classList[3]}, el click lo origino ${evento.target.classList[3]}`);
}
const saludo3 = function(evento)
{
    console.log(`Funcion 3 Hola te saluda ${this.classList[3]}, el click lo origino ${evento.target.classList[3]}`);
}

const contenedorDivs = document.querySelector(".row").querySelectorAll("div");

//Este tipo de situaciones suceden cuando, un elemento abuelo, un elemento padre y un elemento hijo (obvio no solo
//en este caso especifico) tienen el mismo evento, y si se activa el evento del elemento mas interno, se activan
//todos los eventos de los elementos mas externos.

/*
contenedorDivs.forEach(div => 
{
    //div.addEventListener("click", saludo, false); //Se realiza la captura desde el interior hacia el exterior
    //div.addEventListener("click", saludo, true); //Se realiza la captura desde el exterior hacia el interior
    div.addEventListener("click", saludo, 
    {
        capture: false, //Esta es la captura
        //once: false //Esto es para determinar si deseas que se realize el evento y toda la captura solo n veces.
        //once: true //Esto es para determinar si deseas que se realize el evento y toda la captura solo 1 vez.
    });
})
*/

//Aunque sean funciones diferentes la captura se sigue realizando.
//Sin embargo la captura se realiza unicamente del interior al exterior.
contenedorDivs[0].addEventListener("click", saludo1);
contenedorDivs[1].addEventListener("click", saludo2);
contenedorDivs[2].addEventListener("click", saludo3);