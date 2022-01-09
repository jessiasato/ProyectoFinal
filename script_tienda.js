
$( document ).ready(function() {console.log ("DOM is ready")});
let carrito = [];
let productos = [];
let total = 0;

//AJAX
$.getJSON('stock.json', function(data) {
    console.log (data)
    data.forEach (elemento => productos.push(elemento))
    agregarProductos();
});

//Agregar productos al carrito
let detalleProductos = $('#productosTienda');
function agregarProductos (){
for (const producto of productos) {
    detalleProductos.append(`<div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <img src="${producto.img}" width="200px;">
                        <h3>${producto.nombre}</h3>
                        <p> Precio: ${producto.precio}</p>
                        <button class="btn btn-dark btn-social" id="boton${producto.nombre}${producto.precio}">Agregar producto</button>
                        </div>`)
                        $(`#boton${producto.nombre}${producto.precio}`).on('click', () => {alert (` El producto ${producto.nombre} fue agregado al carrito`);
                        guardarCarrito(producto);});   
}
};

//Guardar todos los productos de la tienda en el storage
localStorage.setItem("tienda", JSON.stringify(productos));

//Guardar productos agregados al carrito en el storage
function guardarCarrito (producto) {
    carrito.push(producto);
    total = total + producto.precio;
    console.log ("Total a pagar $" + total);
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}

//Finalizar compra y ver total
verCarrito.addEventListener("click", (sumaTotal))
function sumaTotal () {
    alert ("El total a pagar es de: $ " + total)
};

