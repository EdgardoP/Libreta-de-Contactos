const id = document.querySelector('.id')
const nombre = document.querySelector('.nombre')
const telefono = document.querySelector('.telefono')
const direccion = document.querySelector('.direccion')
const btnNuevo = document.querySelector('.nuevo')
const listarContactos = document.querySelector('.listado')

//acceder a la local storage del navegador
const db = window.localStorage

btnNuevo.onclick = () => {
    let contacto = {
        id: id.value,
        nombre: nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}

cargarContactos(db, listarContactos)