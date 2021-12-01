//Mensaje de bienvenida
let nombre = ""
if (localStorage.getItem ("nombre") == null) {  
    nombre = prompt ("Ingresar su nombre");
    localStorage.setItem ("usuario", nombre)
}

nombre = localStorage.getItem ("usuario")
alert ("Bienvenid@ " + nombre)


//Productos de la tienda y sus propiedades
class Producto {
    constructor (nombre, precio, peso, stock, categoria, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.peso = peso;
    this.stock = stock;
    this.categoria = categoria;
    this.id = id;
    }
}

const productos = [];
productos.push (new Producto ("Cookie",100,"25gr",10,"cookies y cupcakes","1"));
productos.push (new Producto ("Cupcake",315,"250gr",100,"chocolates y bombones","2"));
productos.push (new Producto ("Torta individual",220,"50gr",42,"cookies y cupcakes","3"));
productos.push (new Producto ("Tarta dulce individual",350,"500gr",2,"tortas y postres","4"));
productos.push (new Producto ("Postres",350,"500gr",2,"tortas y postres","5"));
productos.push (new Producto ("Bombones",350,"500gr",2,"tortas y postres","6"));
productos.push (new Producto ("Chocolate relleno",350,"500gr",2,"tortas y postres","7"));
productos.push (new Producto ("Trufas",350,"500gr",2,"tortas y postres","8"));
productos.push (new Producto ("Alfajores",350,"500gr",2,"tortas y postres","9"));
productos.push (new Producto ("Masitas dulces",350,"500gr",2,"tortas y postres","10"));
productos.push (new Producto ("Torta de cumpleaños",350,"500gr",2,"tortas y postres","11"));


//Agregar productos al carrito

const carrito = [];
let boton1 = document.getElementById("producto1");
boton1.onclick = () => agregarCarrito(1);

let boton2 = document.getElementById("producto2");
boton2.onclick = () => agregarCarrito(2);

let boton3 = document.getElementById("producto3");
boton3.onclick = () => agregarCarrito(3);

let boton4 = document.getElementById("producto4");
boton4.onclick = () => agregarCarrito(4);

let boton5 = document.getElementById("producto5");
boton5.onclick = () => agregarCarrito(5);

let boton6 = document.getElementById("producto6");
boton6.onclick = () => agregarCarrito(6);

let boton7 = document.getElementById("producto7");
boton7.onclick = () => agregarCarrito(7);

let boton8 = document.getElementById("producto8");
boton8.onclick = () => agregarCarrito(8);

let boton9 = document.getElementById("producto9");
boton9.onclick = () => agregarCarrito(9);

let boton10 = document.getElementById("producto10");
boton10.onclick = () => agregarCarrito(10);

let boton11 = document.getElementById("producto11");
boton11.onclick = () => agregarCarrito(11);

function agregarCarrito (productoID) {
    let producto = productos.find (p => p.id == productoID)
    carrito.push (producto);
    console.log ("El producto " + producto.nombre + " fue agregado al carrito correctamente")
    let precio =+ productos.find (p => p.precio == producto.precio)
    console.log ("total" + parseInt(precio));
}


// Ver el total del carrito

    