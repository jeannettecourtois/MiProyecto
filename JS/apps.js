let opcionCliente = prompt("¿Qué acción desea realizar?\n 1. Reservar una mesa (ingrese 1).\n 2. Comprar online (ingrese 2).\n 3. Crear una cuenta (ingrese 3).\n 4. Reservar salón para evento especial (ingrese 4).\n 5. Si no desea hacer ninguna de estas acciones, escriba '5'.\n");

let nuevosClientes = []; 

while (opcionCliente !== "5") {
    switch (opcionCliente) {
        case "1":
            let reserva = reservarMesa();
            if (reserva) { // Solo si la reserva es válida
                nuevosClientes.push({
                    nombre: reserva.nombreCliente,
                    apellido: reserva.apellidoCliente,
                    email: reserva.emailCliente,
                    telefono: reserva.telefonoCliente,
                    mesa: reserva.mesaElegida
                });
            }
            break;
        case "2":
            comprarOnline();
            break;
        case "3":
            crearCuenta();
            break;
        case "4":
            reservarSalon();
            break;
        default:
            alert("Opción no válida, por favor elija una opción del 1 al 5.");
    }
    opcionCliente = prompt("Seleccione otra opción o escriba '5' para salir.");
}

let mesasDisponibles = ["Mesa 12", "Mesa 13", "Mesa 16", "Mesa 19"];

function reservarMesa() {
    let nombreCliente = prompt("Indique su nombre: ");
    if (!nombreCliente) return alert("Debe ingresar un nombre para continuar.");

    let apellidoCliente = prompt("Indique su apellido: ");
    if (!apellidoCliente) return alert("Debe ingresar un apellido para continuar.");

    let emailCliente = prompt("Indique su email: ");
    if (!emailCliente) return alert("Debe ingresar un email para continuar.");

    let telefonoCliente = prompt("Indique su número de teléfono: ");
    if (!telefonoCliente) return alert("Debe ingresar un número de teléfono para continuar.");

    let mesaElegida = mesasAelegir();
    if (!mesaElegida) return null; // Si el usuario no elige una mesa válida, devuelve null.

    return { nombreCliente, apellidoCliente, emailCliente, telefonoCliente, mesaElegida };
}

function mesasAelegir() {
    alert(`Las mesas disponibles son: ${mesasDisponibles.join(", ")}`);

    let mesaElegida;
    do {
        mesaElegida = prompt("¿Qué mesa desea? ").trim();
        if (!mesasDisponibles.includes(mesaElegida)) {
            alert("Ese producto no está en stock. Por favor, elija uno de la lista.");
        }
    } while (!mesasDisponibles.includes(mesaElegida));

    confirm(`La mesa elegida es ${mesaElegida}`);
    return mesaElegida;
}

const objetosDeLaTienda = ["queso vegano", "salchichas veggies", "carne vegetal", "verduras", "lentejas"];

function comprarOnline() {
    let carrito = [];
    let cuentaAfirmativa = ["si", "sí"];
    let cuentaAfirmativaRespuesta = ["si", "sí"];
    
    let cuentaAsegurada;
    do {
        cuentaAsegurada = prompt("¿Usted tiene una cuenta? Si es así, escriba Sí, sino escriba No").trim().toLowerCase();
    } while (!cuentaAfirmativa.includes(cuentaAfirmativa) && cuentaAsegurada !== "no");

    if (cuentaAfirmativa.includes(cuentaAsegurada)) {
        alert("¡Perfecto! Puede comprar en línea.");
        let objetoDeseado;
        do {
            objetoDeseado = prompt("¿Qué desea comprar?").trim().toLowerCase();
            if (!objetosDeLaTienda.includes(objetoDeseado)) {
                alert("Ese producto no está en stock. Elija otro producto.");
            }
        } while (!objetosDeLaTienda.includes(objetoDeseado));

        alert(`El producto ${objetoDeseado} ha sido agregado a su carrito.`);
        carrito.push(objetoDeseado);
    } else {
        alert("Debe crear una cuenta antes de comprar en línea.");
        crearCuenta();
    }
}

function crearCuenta() {
    let confirmacion = confirm("¿Desea que creemos una cuenta para usted?");
    if (confirmacion) {
        alert("Cuenta creada con éxito.");
    } else {
        alert("Operación cancelada.");
    }
}

function reservarSalon() {
    alert("Funcionalidad en desarrollo.");
}
