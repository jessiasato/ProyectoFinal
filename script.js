//Mensaje de bienvenida
// let nombreIngresado = prompt ("Ingresar su nombre");
// alert ("Bienvenid@ " + nombreIngresado);


// //Agregar un producto al carrito
// let productoAgregado = "añadir producto al carrito"
// if (productoAgregado === true){
//     alert ("Producto añadido correctamente");
// }



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
    constructor (nombre, precio, peso, stock, categoria,codigo) {
    this.nombre = nombre;
    this.precio = precio;
    this.peso = peso;
    this.stock = stock;
    this.categoria = categoria;
    this.codigo = codigo;
    }
}

const productos = [];
productos.push (new Producto ("Cookie",90,"25gr",10,"cookies y cupcakes","P001"));
productos.push (new Producto ("Cupcake",120,"250gr",100,"chocolates y bombones","P002"));
productos.push (new Producto ("Torta individual",340,"50gr",42,"tortas y postres","P003"));
productos.push (new Producto ("Tarta dulce individual",300,"300gr",5,"tortas y postres","P004"));
productos.push (new Producto ("Postres",215,"500gr",3,"tortas y postres","P005"));
productos.push (new Producto ("Bombones chico",200,"250gr",20,"chocolates","P006c"));
productos.push (new Producto ("Bombones grande",400,"500gr",20,"chocolates","P006g"));
productos.push (new Producto ("Chocolate relleno",500,"500gr",4,"chocolates","P007"));
productos.push (new Producto ("Trufas chico",150,"250gr",7,"chocolates","P008c"));
productos.push (new Producto ("Trufas grande",290,"500gr",5,"chocolates","P008g"));
productos.push (new Producto ("Alfajores",90,"120gr",24,"merienda","P009"));
productos.push (new Producto ("Masitas dulces chico",220,"250gr",10,"merienda","P010c"));
productos.push (new Producto ("Masitas dulces grande",340,"500gr",10,"merienda","P010g"));
productos.push (new Producto ("Torta de cumpleaños",800,"900gr",5,"tortas y postres","P011"));

// //Mostrar stock del producto torta individual
// const buscarStock = productos.find(productos => productos.nombre === "Torta individual"); {
// console.log ("Quedan disponibles " + this.stock + " de tortas individuales")
// }

// //Filtrar solo productos de la categoría chocolates
// const filtrarCategoria = productos.filter(productos => productos.categoria === "chocolates"); {
// console.log(filtrarCategoria);
// };


// ----------------Desafío Nª6 (Complementario ): Ordenando arrays ----------------------------------

let ordenPrecio = productos.sort (function (a,b){
    return (b.precio - a.precio)
});