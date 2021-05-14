//27) Programa una clase llamada Pelicula.

/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
   7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros 
   aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
  decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 
  instancias de la clase de forma automatizada e imprime la ficha técnica 
  de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, 
Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western
*/

class Pelicula
{
    constructor(id, titulo, director, estreno, paises, generos, calificacion)
    {
        //Id
        let expresionRegularId = /^[A-z]{2}\d{7}$/gm;
        if(expresionRegularId.test(id)) this.id = id;
        else this.id = 'Invalido';
        //Titulo
        if(titulo.length > 100) this.titulo = 'Invalido';
        else this.titulo = titulo;
        //Director
        let expresionRegularNombre = /^[A-z]{2,30}\s[A-z]{2,20}$|^[A-z]{2,10}\s[A-z]{2,20}\s[A-z]{2,20}$|^[A-z]{2,10}\s[A-z]{2,20}\s[A-z]{2,10}\s[A-z]{2,10}$/gm
        if(expresionRegularNombre.test(director)) this.director = director;
        else this.director = 'Invalido';
        //Estreno
        if(estreno >= 1895 && estreno < 2030) this.estreno = estreno;
        else this.estreno = 'Invalido';
        //Paises
        if(paises instanceof Array) this.paises = paises;
        else this.paises = 'Invalido';
        //Generos
        if(generos instanceof Array)
        {
            let contador = 0;
            for(let i = 0; i < generos.length; i++)
            {
                if(/(action)|(adult)|(adventure)|(animation)|(biography)|(comedy)|(crime)|(documentary)|(drama)|(family)|(fantasy)|(film noir)|(game-show)|(history)|(horror)|(musical)|(music)|(mystery)|(news)|(reality-tv)|(romance)|(sci-fi)|(short)|(sport)|(talk-show)|(thriller)|(war)|(western)/gm.test(generos[i].toLowerCase())) contador++;
            }
            if(contador === generos.length) this.generos = generos;
            else this.generos = 'Invalido';
        }
        else this.generos = 'Invalido';
        //Calificacion
        if(calificacion >= 0 && calificacion <= 10) this.calificacion = calificacion;
        else this.calificacion = 'Invalido';
    }

    static verificarGeneros()
    {
        console.log('Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western');
    }

    verificarFichaTecnica()
    {
        for(const atributo in this)
        {
            if(this[atributo] === 'Invalido') return console.log('Hay atributos invalidos');
        }
        document.write('<ul>');
        document.write(`<h3>${this.titulo}</h3>`)
        for(const atributo in this)
        {
            document.write(`<li>${atributo}: ${this[atributo]}</li>`) //Recuerden que por alguna razon en el for in solo funciona la terminologia de corchetes NO la del punto
        }
        document.write('</ul>');
    }

}

const pelicula1 = new Pelicula('AB1234567', 'Interestelar', 'Jack Bolton', 2014, ['Estados unidos'], ['History', 'Sci-Fi', 'Drama'], 9.5);
pelicula1.verificarFichaTecnica();
const pelicula2 = new Pelicula('AC1234567', 'Ex machina', 'John Bolton', 2015, ['Estados unidos'], ['Sci-fi', 'Drama', 'Adult', 'History'], 9.3);
pelicula2.verificarFichaTecnica();
const pelicula3 = new Pelicula('AD1234567', 'Noah', 'Max Lutherford', 2014, ['Estados unidos'], ['Action', 'Adventure', 'Sci-Fi', 'Drama'], 8.4);
pelicula3.verificarFichaTecnica();

const pelicula4 = new Pelicula('AB134567', 'Interestelar', 'Jack Bolton', 2014, ['Estados unidos'], ['History', 'Sci-Fi', 'Drama'], 9.5);
pelicula4.verificarFichaTecnica();
const pelicula5 = new Pelicula('AC1234567', 'Ex machina', 'John Bolton', 2015, ['Estados unidos'], ['Sci-fx', 'Drama', 'Adult', 'History'], 9.3);
pelicula5.verificarFichaTecnica();
const pelicula6 = new Pelicula('AD1234567', 'Noah', '@3', 2014, ['Estados unidos'], ['Action', 'Adventure', 'Sci-Fi', 'Drama'], 8.4);
pelicula6.verificarFichaTecnica();
