//Mensaje de bienvenida
// let nombreIngresado = prompt ("Ingresar su nombre");
// alert ("Bienvenid@ " + nombreIngresado);
// let apellidoIngresado = prompt ("Ingrese su apellido");
// alert ("Bienvenid@" + nombreIngresado + apellidoIngresado);

// Array de Productos 
class Producto {
    constructor (nombre, precio, peso, stock, categoria,imagen,agregarProducto,) {
    this.nombre = nombre;
    this.precio = precio;
    this.peso = peso;
    this.stock = stock;
    this.categoria = categoria;
    this.imagen = imagen;
}
}

const productos = [];
productos.push (new Producto ("Cookie",90,"25gr",10,"cookies y cupcakes","imagen"));
productos.push (new Producto ("Cupcake",120,"250gr",100,"chocolates y bombones","imagen"));
productos.push (new Producto ("Torta individual",340,"50gr",42,"tortas y postres","imagen"));
productos.push (new Producto ("Tarta dulce individual",300,"300gr",5,"tortas y postres","imagen"));
productos.push (new Producto ("Postres",215,"500gr",3,"tortas y postres","imagen"));
productos.push (new Producto ("Bombones",200,"250gr",20,"chocolates","imagen"));
productos.push (new Producto ("Chocolate relleno",500,"500gr",4,"chocolates","imagen"));
productos.push (new Producto ("Trufas",150,"250gr",7,"chocolates","imagen"));
productos.push (new Producto ("Alfajores",90,"120gr",24,"merienda","imagen"));
productos.push (new Producto ("Masitas dulces",220,"250gr",10,"merienda","imagen"));
productos.push (new Producto ("Torta de cumpleaños",800,"900gr",5,"tortas y postres","imagen"));


//Mostrar stock del producto torta individual
const buscarStock = productos.find(productos => productos.nombre === "Torta individual");{
 console.log("Quedan disponibles " + buscarStock.stock + " de tortas individuales")
}

//Filtrar solo productos de la categoría chocolates
const filtrarCategoria = productos.filter(productos => productos.categoria === "chocolates"); {
console.log(filtrarCategoria);
};


//Ordenar productos de menor a mayor precio
let ordenPrecio = productos.sort (function (a,b){
    return (b.precio - a.precio)
});

//Calcular pago total del carrito en cuotas
let totalCarrito = 1200;
function pagoCuotas (a,b) {
    return (a/b)
}
console.log ("El monto a pagar en cada cuota es de " + pagoCuotas(totalCarrito,6));


//Desafío Nª8: DOM 
let agregarProducto = document.getElementById("agregarProducto");
agregarProducto.onclick = () => {console.log ("Producto agregado al carrito")};

let verCarrito = document.createElement ("div");
verCarrito.innerHTML = `<button> ${"Ver total carrito"} </button>`;
document.body.appendChild (verCarrito);
verCarrito.onclick = () => {alert ("Tu carrito contiene: ")};
