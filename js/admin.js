import { Funko } from "./funkoClass.js"

let listaFunkopop = []

const modalFunko = new bootstrap.Modal(document.getElementById('modalProducto'));

//queremos que el boton agregar escuche el evento click
let btnagregar = document.getElementById('btnAgregar');
btnagregar.addEventListener('click', function() {
    modalFunko.show();
})


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
    localStorage.setItem('listaFunkoKey', JSON.stringify(listaFunkopop));
    limpiarFormulario();
};

function limpiarFormulario() {
    let formulario = document.getElementById('formModal');
    formulario.reset();
    Swal.fire(
        'nuevo producto', 'El Funkopop se agrego correctamente', "success"
    )
    modalFunko.hide();
}

function leerDatos() {
    //leer Datos del localstorage
    if (localStorage.length > 0) {
        let _listaFunkopop = JSON.parse(localStorage.getItem('listaFunkoKey'));
        console.log(_listaFunkopop);
        if (listaFunkopop.length === 0) {
            listaFunkopop = _listaFunkopop;
        }

    }
}