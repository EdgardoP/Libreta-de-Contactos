const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = "/"
}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    for (clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
    //Crear los elementos html
    let divContacto = document.createElement('div')
    let divIcono = document.createElement('div')
    let divNombre = document.createElement('div')
    let divCelular = document.createElement('div')
    let divDireccion = document.createElement('div')

    let spanIcono = document.createElement('span')

    let idContacto = document.createElement('h3')
    let encNombre = document.createElement('p')
    let nombreContacto = document.createElement('p')
    let encTel = document.createElement('p')
    let telefonoContacto = document.createElement('p')
    let encDireccion = document.createElement('p')
    let direccionContacto = document.createElement('p')


    //añadir el contentido a los elemetos de html
    idContacto.innerHTML = "ID: " + contacto.id
    nombreContacto.innerHTML = contacto.nombre
    telefonoContacto.innerHTML = contacto.telefono
    direccionContacto.innerHTML = contacto.direccion
    spanIcono.innerHTML = "account_circle"
    encNombre.innerHTML = "Nombre"
    encTel.innerHTML = "Telefono"
    encDireccion.innerHTML = "Direccion"

    //añadir las clase a los elementos de html
    divContacto.classList.add('estiloContacto')
    nombreContacto.classList.add('nombre')
    telefonoContacto.classList.add('telefono')
    direccionContacto.classList.add('direccion')
    spanIcono.classList.add("material-icons", "md-48")
    divIcono.classList.add("seccionContacto")
    divNombre.classList.add("seccionContacto")
    divCelular.classList.add("seccionContacto")
    divDireccion.classList.add("seccionContacto")

    divIcono.appendChild(spanIcono)
    divIcono.appendChild(idContacto)
    divContacto.appendChild(divIcono)
    divNombre.appendChild(encNombre)
    divNombre.appendChild(nombreContacto)
    divContacto.appendChild(divNombre)
    divCelular.appendChild(encTel)
    divCelular.appendChild(telefonoContacto)
    divContacto.appendChild(divCelular)
    divDireccion.appendChild(encDireccion)
    divDireccion.appendChild(direccionContacto)
    divContacto.appendChild(divDireccion)

    parentNode.appendChild(divContacto)
}

//funcion para abrir el modal 
const funcionModal = (parametro) => {
    const modal = document.querySelector('.modal')
    if (parametro == "abrir") {
        modal.style.display = "block";
    } else if (parametro == "cerrar") {
        modal.style.display = "none"
    }
}

const funcionModalEliminar = (parametro) => {
    const modal = document.querySelector('.modalEliminar')
    if (parametro == "abrir") {
        modal.style.display = "block";
    } else if (parametro == "cerrar") {
        modal.style.display = "none"
    }
}

const buscarContacto = (parentNode, db, parametro) => {
    let claves = Object.keys(db)
    for (clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        if (parametro == contacto.nombre) {
            crearContacto(parentNode, contacto, db)
        }

    }
}

//Funcion borrar espacios vacios y pasar la primera letra de cada palabra a Mayuscula
const corregirCadena = (cadena) => {
    const nuevaCadena = cadena.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))).trim();
    return nuevaCadena
}