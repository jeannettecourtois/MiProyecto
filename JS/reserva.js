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

    sessionStorage.setItem("individuo", JSON.stringify(datos));

    Swal.fire({
        icon: "success",
        title: "¡Reserva confirmada!",
        text: "Tus datos han sido guardados.",
        confirmButtonColor: "#8B5E3C"
    });

    console.log("Datos guardados en sessionStorage:", datos);
}


document.addEventListener("DOMContentLoaded", () => {
    const botonReservar = document.getElementById("btn-reservar");
    botonReservar.addEventListener("click", guardarInformacionIndividuo);
});
