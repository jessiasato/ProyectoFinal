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
    productos.push(producto);
    total = total + precio;
};

//Sumar los productos del carrito
function totalCarrito(){
    console.log (producto,precio);
    alert ("El total de su carrito es de " + totalCarrito)
};
    