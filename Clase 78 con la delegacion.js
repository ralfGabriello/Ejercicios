
const $buttonAbrirVentanta = document.getElementById("buttonAbrirVentana"),
$buttonCerrarVentana = document.getElementById("buttonCerrarVentana"),
$buttonImprimirVentana = document.getElementById("buttonImprimirVentana");
let ventana = null;

window.addEventListener("click", evento =>
{
    if(evento.target == $buttonAbrirVentanta)
    {
        //Todo lo que "cuelga" de window, se puede escribir sin necesidad del window
        ventana = window.open("https://google.com"); 
        console.log(ventana);
    }

    if(evento.target == $buttonCerrarVentana)
    {
        //window.close(); Cierra la ventanta en la cual te encuentras.

        //Cierra la ventana asignada a la variable ventana. Aunque, si no usas la delegacion en firefox no funciona
        //en navegadores como chrome o edge funciona sin necesidad de usar la delegacion.
        ventana.close(); 
    }

    if(evento.target == $buttonImprimirVentana)
    {
        window.print(); //Imprime la ventana en la cual te encuentras.
    }
})

