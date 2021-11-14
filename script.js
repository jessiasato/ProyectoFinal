//Mensaje de bienvenida
let nombreIngresado = prompt ("Ingresar su nombre");
alert ("Bienvenid@ " + nombreIngresado);


//Agregar un producto al carrito
let productoAgregado = "añadir producto al carrito"
if (productoAgregado === true){
    alert ("Producto añadido correctamente");
}

//Cálculo básico - Sumatoria dos productos en el carrito
let cookies = 100;
let cupcake = 220;
const suma = function (a,b) {
    return (a + b);
};
console.log (suma(cookies,cupcake));

//Calculo sumatoria productos del carrito
let bombones = 315;
const totalCarrito = function (producto1,producto2,producto3,) {
    return (producto1 + producto2 + producto3);
};
alert ("El total de su carrito es " + totalCarrito(cookies,cupcake,bombones));

//Calculo de una compra en 3 cuotas fijas
let totalPago = 1200;
const division = function (a,b) {
    return (a / b);
}
console.log (division(totalPago,6));

//Incorporando objetos
function Producto (nombre, precio, peso,) {
    this.nombre = nombre;
    this.precio = precio;
    this.peso = peso;
    this.agregarProducto = function () {
        console.log ("Producto " + this.nombre + " agregado correctamente")
    }
}
const producto1 = new Producto ("Cookies",100,"25gr");
const producto2 = new Producto ("Cupcake",220,"50gr");
const producto3 = new Producto ("bombones",315,"250gr");

producto1.agregarProducto ();
producto2.agregarProducto ();
producto3.agregarProducto ();