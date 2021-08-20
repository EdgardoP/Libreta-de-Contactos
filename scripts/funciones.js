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
    let idContacto = document.createElement('h3')
    let nombreContacto = document.createElement('p')
    let telefonoContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')

    //añadir el contentido a los elemetos de html
    idContacto.innerHTML = contacto.id
    nombreContacto.innerHTML = contacto.nombre
    telefonoContacto.innerHTML = contacto.telefono
    direccionContacto.innerHTML = contacto.direccion

    //añadir las clase a los elementos de html
    divContacto.classList.add('contacto')

    //añadir los elementos hijo al elemeento padre, en este caso DivContacto
    divContacto.appendChild(idContacto)
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(direccionContacto)

    //añadimos el elemento div al dom de html
    parentNode.appendChild(divContacto)
}