//Desafío Nª8: DOM - Agregando elementos html a través del DOM
document.getElementById ("nombre").value;
document.getElementById ("apellido").value; 
document.getElementById ("mail").value; 
document.getElementById ("numero").value; 

let enviarMensaje = document.getElementById("contacto__enviar");
enviarMensaje.onclick = () => {alert (nombre.value + " " + apellido.value + " Mensaje Enviado")};

//Almacenando los datos de contacto
sessionStorage.setItem("Nombre", nombre);
sessionStorage.setItem("Apellido", apellido);
sessionStorage.setItem("Mail", mail);
sessionStorage.setItem("Numero", numero);

//Cargando los datos de contacto
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("apellido").innerHTML = apellido; 
document.getElementById("mail").innerHTML = mail;
document.getElementById("numero").innerHTML = numero; 
