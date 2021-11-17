//Mensaje de bienvenida
// let nombreIngresado = prompt ("Ingresar su nombre");
// alert ("Bienvenid@ " + nombreIngresado);


// //Agregar un producto al carrito
// let productoAgregado = "añadir producto al carrito"
// if (productoAgregado === true){
//     alert ("Producto añadido correctamente");
// }

// //Cálculo básico - Sumatoria dos productos en el carrito
// let cookies = 100;
// let cupcake = 220;
// const suma = function (a,b) {
//     return (a + b);
// };
// console.log (suma(cookies,cupcake));

// //Calculo sumatoria productos del carrito
// let bombones = 315;
// const totalCarrito = function (producto1,producto2,producto3,) {
//     return (producto1 + producto2 + producto3);
// };
// alert ("El total de su carrito es " + totalCarrito(cookies,cupcake,bombones));

// //Calculo de una compra en 3 cuotas fijas
// let totalPago = 1200;
// const division = function (a,b) {
//     return (a / b);
// }
// console.log (division(totalPago,6));



// ----------------Desafío Nª5 : Incorporando objetos ----------------------------------

// function Producto (nombre, precio, peso, stock, categoria,) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.peso = peso;
//     this.stock = stock;
//     this.categoria = categoria;
//     this.agregarProducto = function () {
//         console.log ("Producto " + this.nombre + " agregado correctamente")
//     }
//     this.mostrarstock = function () {
//         console.log ("Quedan disponibles " + this.stock + " unidades de " + this.nombre)
//     }
// }
// const producto1 = new Producto ("Cookies",100,"25gr",10,"cookies y cupcakes");
// const producto2 = new Producto ("Cupcake",220,"50gr",42,"cookies y cupcakes");
// const producto3 = new Producto ("bombones",315,"250gr",100,"chocolates y bombones");
// const producto4 = new Producto ("Chocotorta",350,"500gr",2,"tortas y postres");

// producto1.agregarProducto ();
// producto4.agregarProducto ();
// producto3.mostrarstock ();



// ----------------Desafío Nª6 : Incorporando arrays ----------------------------------

class Producto {
    constructor (nombre, precio, peso, stock, categoria,) {
    this.nombre = nombre;
    this.precio = precio;
    this.peso = peso;
    this.stock = stock;
    this.categoria = categoria;
    }
}

const productos = [];
productos.push (new Producto ("Cookies",100,"25gr",10,"cookies y cupcakes"));
productos.push (new Producto ("Bombones",315,"250gr",100,"chocolates y bombones"));
productos.push (new Producto ("Cupcake",220,"50gr",42,"cookies y cupcakes"));
productos.push (new Producto ("Chocotorta",350,"500gr",2,"tortas y postres"));

// //Mostrar stock del producto Chocotorta
// const buscarStock = productos.find(productos => productos.nombre === "Chocotorta"); {
// console.log ("Quedan disponibles " + this.stock + " de Chocotorta")
// }

// //Filtrar solo productos de la categoría cookies y cupcakes
// const filtrarCategoria = productos.filter(productos => productos.categoria === "cookies y cupcakes"); {
// console.log(filtrarCategoria);
// };


// ----------------Desafío Nª6 (Complementario ): Ordenando arrays ----------------------------------

let ordenPrecio = productos.sort (function (a,b){
    return (b.precio - a.precio)
});