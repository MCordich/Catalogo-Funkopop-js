import { Funko } from "./funkoClass.js"

let listaFunkopop = []



window.agregarFunkopop = function(event) {
    //el objetivo de esta funcion es agregar un funkopop nuevo en el localstorage
    event.preventDefault();
    console.log('estamos dentro de la funcion funkopop')
        //traer los valores del formulario que ya estan validados

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let numSerie = document.getElementById('numSerie').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;

    let nuevoFunkopop = new Funko(codigo, nombre, numSerie, categoria, descripcion, imagen);
    //agregar el nmuevo objeto en el arreglo de funkopop
    listaFunkopop.push(nuevoFunkopop);
    console.log(listaFunkopop);
}