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
    this.agregar = function () {console.log ("producto "+ this.nombre + " agregado correctamente")}
}
}

const productos = [];
productos.push (new Producto ("Cookie",90,"25gr",10,"cookies y cupcakes",img ="multimedia/tienda/cookies.png"));
productos.push (new Producto ("Cupcake",120,"250gr",100,"chocolates y bombones",""));
productos.push (new Producto ("Torta individual",340,"50gr",42,"tortas y postres",""));
productos.push (new Producto ("Tarta dulce individual",300,"300gr",5,"tortas y postres",""));
productos.push (new Producto ("Postres",215,"500gr",3,"tortas y postres",""));
productos.push (new Producto ("Bombones chico",200,"250gr",20,"chocolates",""));
productos.push (new Producto ("Bombones grande",400,"500gr",20,"chocolates",""));
productos.push (new Producto ("Chocolate relleno",500,"500gr",4,"chocolates",""));
productos.push (new Producto ("Trufas chico",150,"250gr",7,"chocolates",""));
productos.push (new Producto ("Trufas grande",290,"500gr",5,"chocolates",""));
productos.push (new Producto ("Alfajores",90,"120gr",24,"merienda",""));
productos.push (new Producto ("Masitas dulces chico",220,"250gr",10,"merienda",""));
productos.push (new Producto ("Masitas dulces grande",340,"500gr",10,"merienda",""));
productos.push (new Producto ("Torta de cumpleaños",800,"900gr",5,"tortas y postres",""));



//Agregar un producto al carrito
const producto1 = new Producto ("Cookie",90,"25gr",10,"cookies y cupcakes","P001");
const producto2 = new Producto ("Cupcake",120,"250gr",100,"chocolates y bombones","P002");
producto1.agregar();
producto2.agregar();


//Mostrar stock del producto torta individual
const buscarStock = productos.find(productos => productos.nombre === "Torta individual"); {
console.log ("Quedan disponibles " + this.stock + " de tortas individuales")
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



//Desafío Nª8: DOM - Agregando elementos html a través del DOM
for (const producto of productos) {
    let contenedor = document.createElement ("div");
    contenedor.innerHTML = `<h4> ${producto.nombre} </h4>
                            <img> ${producto.imagen}</img>
                            <p> Precio: ${producto.precio} </p>
                            <p> Peso: ${producto.peso}</p>
                            <button> Agregar producto al carrito </button>`;
    document.body.appendChild (contenedor);
}
