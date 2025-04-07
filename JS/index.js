const contenedorTarjetas = document.getElementById("productos-container");
const cuentaCarrito = document.getElementById("cuentaCarrito");

// Cargar carrito desde LocalStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cuentaCarrito.textContent = carrito.length;
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevaTarjeta = document.createElement("div");
        nuevaTarjeta.classList.add("tarjeta-producto");
        nuevaTarjeta.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button>Agregar al carrito</button>
        `;

        nuevaTarjeta.querySelector("button").addEventListener("click", () => {
            agregarAlCarrito(producto);
        });

        contenedorTarjetas.appendChild(nuevaTarjeta);
    });
}

// Esperar a que alimentos esté definido
if (typeof alimentos !== "undefined") {
    crearTarjetasProductosInicio(alimentos);
    actualizarCarrito();
} else {
    console.error("No se encontraron productos.");
}
