async function fetchData(){
    try{
        let respuesta = await fetch('../data/productos.json');
        let data = await respuesta.json();

        //mostrarProductos(data);
        //verificar information
        data.forEach(element => {
            if(element.id === undefined || element.precio === undefined || element.nombre === undefined){
                console.warn("Producto inválido encontrado:", element);
            }
        });
        console.log(data);
        return data;
    } catch(error){
        console.error("Error al obtener los datos: ", error);
    }finally{
        console.log("Operación completada.");
    }
}

fetchData();


function mostrarProductos(productos) {
    const contenedor = document.getElementById("productos-container");

    productos.forEach(element => {
        const nuevoSection = document.createElement("section");
        nuevoSection.classList.add("producto");

        nuevoSection.innerHTML = `
            <h2>${element.nombre}</h2>
            <p>${element.descripcion || "Producto sin descripción"}</p>
            <span>$${element.precio}</span>
            <button onclick="agregarAlCarrito(${element.id})">Agregar al carrito</button>
        `;

        contenedor.appendChild(nuevoSection);
    });

    //agregar al storage bajo formato JSON nuestros productos 
    localStorage.setItem("catalogo", JSON.stringify(productos));
}


function actualizarContadores() {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const puntos = parseInt(localStorage.getItem("puntos")) || 0;

    document.getElementById("carrito-contador").textContent = carritoActual.length;
    document.getElementById("puntos-contador").textContent = puntos;
}

fetchData().then(productos => {
    mostrarProductos(productos);
    actualizarContadores();
});

function agregarAlCarrito(idProducto) {
    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    
    let puntos = parseInt(localStorage.getItem("puntos")) || 0;

    
    const catalogo = JSON.parse(localStorage.getItem("catalogo"));
    const producto = catalogo.find(p => p.id === idProducto);

    
    carrito.push(producto);

    
    puntos += 10;

    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("puntos", puntos);

    
    actualizarContadores();

    
    
    
      Toastify({
        text: `${producto.nombre} agregado al carrito!`,
        gravity: "top", // Aparece en la parte superior
        position: "center", // Centra la notificación horizontalmente

        style: {
            color: "white",
            fontWeight: "bold",
        }
      }).showToast();
}




  