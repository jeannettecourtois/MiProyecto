function actualizarElementos(){
    const miCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const puntos = parseInt(localStorage.getItem('puntos')) || 0;
    document.getElementById("articulos-contador").textContent = miCarrito.length;
    let suma = 0;
    for(let i=0; i<miCarrito.length; i++){
        suma += miCarrito[i].precio;
    }
    document.getElementById("total-carrito").textContent = suma;
    document.getElementById("carrito-contador").textContent = suma;
    document.getElementById("puntos-contador-carrito").textContent = puntos;
    document.getElementById("puntos-contador").textContent = puntos;

    return;

}

function vaciarCarrito(){
    localStorage.removeItem("carrito");
    localStorage.removeItem("puntos");
    actualizarElementos(); 

    Swal.fire({
        icon: "success",
        title: "¡Carrito vaciado!",
        text: "Todos los productos han sido eliminados.",
        confirmButtonColor: "#8B5E3C"
    });
    return;
}

actualizarElementos();

document.addEventListener("DOMContentLoaded", () => {
    

    const botonVaciar = document.getElementById("vaciar-carrito");
    
    botonVaciar.addEventListener("click", vaciarCarrito);

});

function Encargar(){
    Swal.fire({
        title: "Artículos encargados.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
}

document.addEventListener("DOMContentLoaded", ()=>{
    const botonEncargar = document.getElementById("encargar-btn");
    botonEncargar.addEventListener("click", Encargar);
})





