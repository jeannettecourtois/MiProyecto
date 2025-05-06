function guardarInformacionIndividuo() {
    const mesaSeleccionada = document.querySelector('input[name="mesa"]:checked');

    if (!mesaSeleccionada) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Selecciona una mesa!",
        });
        return;
    }

    const datos = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
        hora: document.getElementById("hora").value,
        fecha: document.getElementById("fecha").value,
        mesa: mesaSeleccionada.value
    };

    class Persona{
        constructor(nombre, apellido, telefono, hora, fecha, mesa){
            this.nombre = nombre;
            this.apellido = apellido;
            this.telefono = telefono;
            this.hora = hora;
            this.fecha = fecha;
            this.mesa = mesa;

        }
            describir(){
                return `${this.nombre} ${this.apellido} ha reservado la mesa ${this.mesa} a ${this.hora} para el ${this.fecha}.`
            }

        
        
    }

    sessionStorage.setItem("individuo", JSON.stringify(datos));
    
    Swal.fire({
        icon: "success",
        title: "¡Reserva confirmada!",
        text: "Tus datos han sido guardados.",
        confirmButtonColor: "#8B5E3C"
    });

    const cliente = new Persona(datos.nombre, datos.apellido, datos.telefono, datos.hora, datos.fecha, datos.mesa);
    console.log("Datos guardados en sessionStorage:", datos);
    sessionStorage.setItem("cliente", JSON.stringify(cliente));
    console.log(cliente.describir());
}


document.addEventListener("DOMContentLoaded", () => {
    const botonReservar = document.getElementById("btn-reservar");
    botonReservar.addEventListener("click", guardarInformacionIndividuo);
});


//Navbar 

 
function actualizarNavbar() {
    const miCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const puntos = parseInt(localStorage.getItem("puntos")) || 0;

    const carritoContador = document.getElementById("carrito-contador");
    const puntosContador = document.getElementById("puntos-contador");

    if (carritoContador) carritoContador.textContent = miCarrito.length;
    if (puntosContador) puntosContador.textContent = puntos;

    return;
}

actualizarNavbar();




