let id = document.querySelector('.id')
const nombre = document.querySelector('.nombre')
const telefono = document.querySelector('.telefono')
const direccion = document.querySelector('.direccion')
const btnNuevo = document.querySelector('.nuevo')
const listarContactos = document.querySelector('.listado')
const listadoBusqueda = document.querySelector('.listadoBusqueda')
const identificador = document.getElementsByTagName('h3')
const valorNombre = document.getElementsByClassName('nombre')
const valorTelefono = document.getElementsByClassName('telefono')
const valorDireccion = document.getElementsByClassName('direccion')
const btnLimpiar = document.querySelector('.limpiar')
const btnBorrar = document.querySelector('.eliminar')
const btnModificar = document.querySelector('.editar')
const btnCerrarModal = document.querySelector('.btnCerrarModal')
const btnBuscar = document.querySelector('.btnBuscar')
const buscar = document.querySelector('.buscar')
let tituloModal = document.querySelector('.tituloModal')
let mensajeModal = document.querySelector('.mensajeModal')
let mensajeModalEliminar = document.querySelector('.mensajeModalEliminar')
let btnModalEliminarNo = document.querySelector('.btnModalEliminarNo')
let btnModalEliminarSi = document.querySelector('.btnModalEliminarSi')
let mensajeError = document.querySelector('.error')
let busquedaRepetida = false
    //acceder a la local storage del navegador
const db = window.localStorage
    //evento para capturar los valores de los inputs
btnNuevo.onclick = () => {
    if (id.value != "") {
        mensajeModal.innerHTML = "No agregar un elemento que tenga un ID que ya exista."
        funcionModal("abrir")
    } else if (nombre.value == "" || telefono.value == "" || direccion.value == "") {
        mensajeModal.innerHTML = "No puedes dejar espacios en blanco."
        funcionModal("abrir")
    } else {
        let contacto = {
            id: Math.floor(Math.random() * 2000),
            nombre: corregirCadena(nombre.value),
            telefono: telefono.value.trim(),
            direccion: corregirCadena(direccion.value),
        }
        guardarContacto(db, contacto)
    }
}

btnModificar.onclick = () => {
    if (id.value == "") {
        mensajeModal.innerHTML = "Elije primero el contacto a modificar."
        funcionModal("abrir")
    } else if (id.value == "" || nombre.value == "" || telefono.value == "" || direccion.value == "") {
        mensajeModal.innerHTML = "No puedes dejar espacio en blanco."
        funcionModal("abrir")
    } else {
        let contacto = {
            id: id.value,
            nombre: corregirCadena(nombre.value),
            telefono: telefono.value.trim(),
            direccion: corregirCadena(direccion.value),
        }
        guardarContacto(db, contacto)
    }
}

// funcion para agregar evento Listener en cada elemento de contacto
window.onload = function() {
    if (db.length === 0) {
        funcionModal("abrir")
        tituloModal.innerHTML = "Bienvenido."
        mensajeModal.innerHTML = "Al parecer no tienes contactos, agrega uno."
        mensajeError.innerHTML = "Disfruta de la aplicacion."
    } else {
        cargarContactos(db, listarContactos)
        let contacto = document.querySelectorAll('.estiloContacto')
        for (let index = 0; index < contacto.length; index++) {
            contacto[index].addEventListener("click", function() {
                id.value = identificador[index + 1].innerHTML.replace(/ID: /g, '');
                nombre.value = valorNombre[index + 1].innerHTML
                telefono.value = valorTelefono[index + 1].innerHTML
                direccion.value = valorDireccion[index + 1].innerHTML
            })
        }
    }
}


//evento boton limpiar
btnLimpiar.onclick = () => {
    id.value = ""
    nombre.value = ""
    telefono.value = ""
    direccion.value = ""
}

btnBorrar.onclick = () => {
    if (id.value == "") {
        mensajeModal.innerHTML = "No has seleccionado ningun contacto para eliminar"
        funcionModal('abrir')
    } else {
        funcionModalEliminar("abrir")
        mensajeModalEliminar.innerHTML = "Esta seguro que desea eliminar a " + nombre.value + " ?"
    }
}

btnCerrarModal.onclick = () => {
    tituloModal.innerHTML = "Algo salio mal !"
    mensajeError.innerHTML = "Intentalo de nuevo"
    funcionModal("cerrar");
}

//buscar un contacto
btnBuscar.onclick = () => {
    if (buscar.value === "") {
        window.location.href = '/'
        busquedaRepetida = false
    } else
    if (buscar.value != "" && busquedaRepetida == false) {
        listarContactos.style.display = "none"
        buscarContacto(listadoBusqueda, db, corregirCadena(buscar.value))
        busquedaRepetida = true
    }
}

btnModalEliminarSi.onclick = () => {
    funcionModalEliminar("cerrar")
    db.removeItem(id.value)
    window.location.href = '/'
}
btnModalEliminarNo.onclick = () => {
    funcionModalEliminar("cerrar")
}