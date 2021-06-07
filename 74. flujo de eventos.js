
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

//Aunque sean funciones diferentes la captura se sigue realizando.
//Sin embargo la captura se realiza unicamente del interior al exterior.
contenedorDivs[0].addEventListener("click", saludo1);
contenedorDivs[1].addEventListener("click", saludo2);
contenedorDivs[2].addEventListener("click", saludo3);
