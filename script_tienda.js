
$( document ).ready(function() {console.log ("DOM is ready")});

const productos = [
    { nombre: "Cookie", precio: 90, peso: "25gr", id:1, img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/cookies.png?raw=true"},
    { nombre: "Cupcake", precio: 120, peso: "45gr",id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/cupcakes.png?raw=true"},
    { nombre: "Torta-Individual", precio: 340, peso: "600gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/torta_individual.png?raw=true"},
    { nombre: "Tarta-dulce-individual", precio: 300, peso: "200gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/tarta.png?raw=true"},
    { nombre: "Postres", precio: 215, peso: "600gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/postre.png?raw=true"},
    { nombre: "Bombones", precio: 200, peso: "250gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/bombones.png?raw=true"},
    { nombre: "Chocolate-relleno", precio: 500, peso: "500gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/chocolate.png?raw=true"},
    { nombre: "Trufas", precio: 150, peso: "300gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/trufas.png?raw=true"},
    { nombre: "Alfajores", precio: 90, peso: "80gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/alfajores.png?raw=true"},
    { nombre: "Masitas-dulces", precio: 220, peso: "250gr", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/masitas.png?raw=true"},
    { nombre: "Torta-de-cumpleaños", precio: 800, peso: "2kg", id:1,img:"https://github.com/jessiasato/proyectoFinal/blob/master/multimedia/tienda/torta.png?raw=true"},
];

let detalleProductos = $('#productosTienda');
let carrito = [];
function agregarProductos (){
for (const producto of productos) {
    detalleProductos.append(`<div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <img src="${producto.img}" width="200px;">
                        <h3>${producto.nombre}</h3>
                        <p> Precio: ${producto.precio}</p>
                        <button class="btn btn-dark btn-social" id="boton${producto.nombre}">Agregar producto</button>
                        <button class="btn btn-dark btn-social" id="eliminar">Eliminar producto</button>
                        </div>`)
                        $(`#boton${producto.nombre}`).on('click', () => {console.log (`Producto ${producto.nombre} agregado al carrito`)
                        guardarCarrito(producto)
                        verTotal(producto);
                    })   
}
};

agregarProductos ();


//Guardar todos los productos de la tienda en el storage
localStorage.setItem("tienda", JSON.stringify(productos));

//Guardar productos agregados al carrito en el storage
function guardarCarrito (producto) {
    carrito.push(producto)
    localStorage.setItem("Carrito", JSON.stringify(carrito))
    }


//Total a pagar del carrito
let precioTotal = 0;