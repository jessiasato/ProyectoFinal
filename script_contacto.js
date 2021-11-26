//Desafío Nª8: DOM - Agregando elementos html a través del DOM

document.getElementById ("nombre").value ="Jessica";
document.getElementById ("apellido").value="Asato";
document.getElementById ("mail").value="jessiasato@gmail.com";
document.getElementById ("numero").value="123456789";


let enviarMensaje = document.getElementById("contacto__enviar");
enviarMensaje.onclick = () => {alert (nombre.value + " " + apellido.value + " Mensaje Enviado")};