document.addEventListener("DOMContentLoaded", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedor = document.getElementById("lista-carrito");
    const total = document.getElementById("total");

    function renderCarrito() {
        contenedor.innerHTML = "";

        if (carrito.length === 0) {
            contenedor.innerHTML = "<p>No hay productos en el carrito.</p>";
            total.textContent = "";
            return;
        }

        let sumaTotal = 0;

        carrito.forEach((producto, index) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("item-carrito");

            tarjeta.innerHTML = `
                <img src="${producto.img}" width="50" alt="${producto.nombre}">
                <strong>${producto.nombre}</strong>
                <span>$${producto.precio}</span>
                <button data-index="${index}">Eliminar</button>
            `;

            contenedor.appendChild(tarjeta);
            sumaTotal += producto.precio;
        });

        total.textContent = `Total: $${sumaTotal}`;

        agregarEventosEliminar();
    }

    function agregarEventosEliminar() {
        const botonesEliminar = document.querySelectorAll("button[data-index]");
        botonesEliminar.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                carrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                renderCarrito();
            });
        });
    }

    renderCarrito();
});
