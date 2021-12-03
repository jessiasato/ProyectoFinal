//Mensaje de bienvenida
// let nombre = ""
// if (localStorage.getItem ("nombre") == null) {  
//     nombre = prompt ("Ingresar su nombre");
//     localStorage.setItem ("usuario", nombre)
// }

// nombre = localStorage.getItem ("usuario")
// alert ("Bienvenid@ " + nombre)


//Agregar productos al carrito
let productos = [];
let total = 0;

function agregarCarrito(producto,precio) {
    console.log(producto,precio);
    productos.push(producto,precio);
    let lista = document.createElement ("li");
    lista.innerHTML = `<li>Producto: ${producto} - Precio: ${precio}</li>`;
    document.querySelector('.pagar_titulo').appendChild (lista);
//Guardar carrito en el storage
    localStorage.setItem(producto,precio);
};

//Mensaje con el total de productos agregados al carrito
function totalCarrito (){
    alert("Tu carrito contiene los siguientes productos: ");
};


//Boton + función para borrar todos los productos del carrito
//Función para editar un producto del carrito
    