
function validarFormulario() {
    //obtiene los valores ingresados
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let edad = parseInt(document.getElementById("edad").value);
    let altura = parseInt(document.getElementById("altura").value);
    let email = document.getElementById("email").value.trim();
    let mensaje = "";

    // Validaciones
    if (nombre === "" || apellido === "") {
        mensaje += "El nombre y apellido no pueden estar vacíos.\n";
    }
    if (isNaN(edad) || edad <=18 || edad>80) {
        mensaje += "La edad debe ser mayor o igual a 18 años.\n";
    }
    if (isNaN(altura) || altura <= 0 || altura > 230) {
        mensaje += "La altura debe ser positiva y no mayor a 230 cm.\n";
    }
    if (!email.includes("@") || email.includes(" ")) {
        mensaje += "Ingrese un correo válido.\n";
    }

    //si no se envio correctamente mostrar en rojo y si se envio correctamente se muestra en color verde
    let mostrarMensaje = document.getElementById("mensaje");
    if (mensaje !== "") {
        mostrarMensaje.innerText = mensaje;
        mostrarMensaje.classList.add("error");
        mostrarMensaje.classList.remove("exito");
    } else {
        mostrarMensaje.innerText = "Se envió correctamente el formulario.";
        mostrarMensaje.classList.add("exito");
        mostrarMensaje.classList.remove("error");
    }
}
//asignar el evento
document.getElementById("enviar").addEventListener("click", validarFormulario);