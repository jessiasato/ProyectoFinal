//Almacenamiento de datos de usuarios en el formulario de Contacto

let enviarMensaje = document.getElementById("contacto__enviar")
enviarMensaje.onclick = () => {
    let nombre = document.getElementById ("nombre").value;
    let apellido = document.getElementById ("apellido").value; 
    let mail = document.getElementById ("mail").value;
    let numero = document.getElementById ("numero").value;
    alert (nombre + apellido + " Mensaje Enviado");
    // Almacenando los datos de contacto en el storage
    sessionStorage.setItem("nombre",nombre);
    sessionStorage.setItem("apellido",apellido);
    sessionStorage.setItem("mail",mail);
    sessionStorage.setItem("numero",numero);
};


