// validar.js
import Servicio from "./Servicio.js";

// Array de pabellones
const pabellones = ["Arrupe", "Areilza", "Aztarain", "Guturbai"];

// Función para validar el nombre
function validarNombre(nombre) {
    const regex = /^[a-zA-Z0-9-_]+$/;  // Solo letras, números y guion bajo
    return regex.test(nombre);
}

// Función para validar el pabellón
function validarPabellon(pabellon) {
    return pabellones.includes(pabellon);
}

// Función para manejar la validación del formulario
function validarFormulario(event) {
    event.preventDefault();  // Evitar que el formulario se envíe

    const servicio = document.getElementById('servicio').value;
    const pabellon = document.getElementById('pabellon').value;
    const mostrar = document.getElementById('mostrar').checked;

    // Validación del nombre del servicio
    if (!validarNombre(servicio)) {
        alert("El nombre del servicio solo puede contener letras, números, y guiones bajos.");
        return;
    }

    // Validación del pabellón
    if (!validarPabellon(pabellon)) {
        alert("El pabellón no es válido.");
        return;
    }

    // Crear el objeto Servicio
    const pabellonIndex = pabellones.indexOf(pabellon);
    const nuevoServicio = new Servicio(servicio, pabellonIndex, mostrar);

   
    let servicios = [];


    // Añadir el servicio al array de servicios
    servicios.push(nuevoServicio);

    // Mostrar por consola el servicio creado
    console.log(nuevoServicio.mostrarr());

    console.log('SERVICIOS', servicios)

    // Aquí podrías agregar más lógica si es necesario, por ejemplo, limpiar el formulario o mostrar un mensaje de éxito.
}

// Asignar el evento al formulario
document.getElementById('formulario').addEventListener('submit', validarFormulario);
