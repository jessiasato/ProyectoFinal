//Desafío Nª8: DOM - Agregando elementos html a través del DOM

let nombre = document.getElementById ("nombre").value;
let apellido = document.getElementById ("apellido").value; 
let mail = document.getElementById ("mail").value;
let numero = document.getElementById ("numero").value;


let enviarMensaje = document.getElementById("contacto__enviar")
enviarMensaje.onclick = () => {alert (nombre + apellido + " Mensaje Enviado")};


// Almacenando los datos de contacto
sessionStorage.setItem("nombre",nombre);
sessionStorage.setItem("apellido",apellido);
sessionStorage.setItem("mail",mail);
sessionStorage.setItem("numero",numero);
