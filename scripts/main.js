let id = document.querySelector('.id')
const nombre = document.querySelector('.nombre')
const telefono = document.querySelector('.telefono')
const direccion = document.querySelector('.direccion')
const btnNuevo = document.querySelector('.nuevo')
const listarContactos = document.querySelector('.listado')
const identificador = document.getElementsByTagName('h4')
const valorNombre = document.getElementsByClassName('nombre')
const valorTelefono = document.getElementsByClassName('telefono')
const valorDireccion = document.getElementsByClassName('direccion')
const btnLimpiar = document.querySelector('.limpiar')
const btnBorrar = document.querySelector('.eliminar')
const btnModificar = document.querySelector('.editar')
    //acceder a la local storage del navegador
const db = window.localStorage

//evento para capturar los valores de los inputs
btnNuevo.onclick = () => {
    let contacto = {
        id: id.value,
        nombre: nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}

btnModificar.onclick = () => {
    let contacto = {
        id: id.value,
        nombre: nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}


cargarContactos(db, listarContactos)

//funcion para agregar evento Listener en cada elemento de contacto
window.onload = function() {
    let contacto = document.querySelectorAll('.contacto')
    for (let index = 0; index < contacto.length; index++) {
        contacto[index].addEventListener("click", function() {
            id.value = identificador[index].innerHTML
            nombre.value = valorNombre[index + 1].innerHTML
            telefono.value = valorTelefono[index + 1].innerHTML
            direccion.value = valorDireccion[index + 1].innerHTML
        })
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
    db.removeItem(id.value)
    window.location.href = '/'
}