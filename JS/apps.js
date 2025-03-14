console.log("Iniciando programa...")

let datos = []; 
let opcionCliente = prompt("¿Qué acción desea realizar?\n 1. Reservar una mesa (ingrese 1).\n 2. Comprar online (ingrese 2).\n 3. Crear una cuenta (ingrese 3).\n 4. Reservar salón para evento especial (ingrese 4).\n 5. Si no desea hacer ninguna de estas acciones, escriba '5'.\n");

 
while (opcionCliente !== "5") {
    switch (opcionCliente) {
        case "1":
            let reserva = reservarMesa();
            if (reserva){
                datos.push(reserva);
            }
            break;
        case "2":
            let compra = comprarOnline();
            if(compra.length){
                datos.push({compra})
            }
            break;
        case "3":
            let nuevaCuenta = crearCuenta();
            datos.push({cuenta: nuevaCuenta});
            break;
        case "4":
            reservarSalon();
            break;
        default:
            alert("Opción no válida, por favor elija una opción del 1 al 5.");
    }
    console.log("Datos actuales:", datos);

    opcionCliente = prompt("Seleccione otra opción o escriba '5' para salir.");
}



//Para reservar mesas

function reservarMesa() {
    let nombreCliente = prompt("Indique su nombre: ");

    let apellidoCliente = prompt("Indique su apellido: ");

    let emailCliente = prompt("Indique su email: ");

    let telefonoCliente = prompt("Indique su número de teléfono: ");


    let mesaElegida = mesasAelegir(nombreCliente);
    let reserva = {nombreCliente, apellidoCliente, emailCliente, telefonoCliente, mesaElegida};
    console.log("nueva reserva realizada: ", reserva);
    return reserva; 
}

function mesasAelegir(nombre = "") { //default, nombre ""
    let mesasDisponibles = ["Mesa 12", "Mesa 13", "Mesa 16", "Mesa 19"];

    alert(`Hola ${nombre}! Las mesas disponibles son: ${mesasDisponibles.join(", ")}`);

    let mesaElegida;
    
    do {
        mesaElegida = prompt("¿Qué mesa desea? ");
        
        if (mesaElegida === null) {
            alert("Operación cancelada."); //el usuario no ha ingresado nada 
            return null;
        }

        mesaElegida = mesaElegida.trim();

        if (!mesasDisponibles.includes(mesaElegida)) {
            alert(`Esa mesa no está disponible. Por favor elija otra: ${mesasDisponibles.join(", ")}`);
        }
    } while (!mesasDisponibles.includes(mesaElegida));

    confirm(`La mesa elegida es ${mesaElegida}`);
    return mesaElegida;
}


function comprarOnline() {
    let objetosDeLaTienda = ["queso vegano", "salchichas veggies", "carne vegetal", "verduras", "lentejas"];
    let carrito = [];
    let cuentaAsegurada = prompt("Usted posee una cuenta? Escriba si, si es el caso, o no, en el caso contrario.").trim().toLowerCase;
    if (cuentaAsegurada === "sí" || cuentaAsegurada === "si") {
        alert("¡Perfecto! Puede conectarse y continuar.");
    }else{
        alert("Cree una cuenta antes de hacer las compras ;)");
        crearCuenta();
    }
    let objetoDeseado = prompt("Qué desea comprar? ");

    while(!objetosDeLaTienda.includes(objetoDeseado)){
        alert("Ese producto no está en stock");
        objetoDeseado = prompt("Elija otro producto");
    }

    alert("El objeto que desea se encuentra en nuestra tienda :)!");  
    carrito.push(objetoDeseado); // Agrega el producto al carrito
    console.log("Carrito de compras: ", carrito);
    return carrito;

}

function crearCuenta(direccion = 1){
    confirm("Desea crear una cuenta?");
    const usuarioCliente = prompt("Ingrese un nombre de usuario: ");
    const emailCuenta = prompt("Ingrese su email: ");
    let contraseñaUsuario = prompt("Ingrese contraseña: ");
    let contraseñaUsuarioVerificar = prompt("Ingrese nuevamente la contraseña: ");
    while(contraseñaUsuario != contraseñaUsuarioVerificar){
        contraseñaUsuarioVerificar = prompt("La contraseña ingresada no es la correcta, escriba la misma que la anterior.");
    }
    return {usuarioCliente, emailCuenta, contraseñaUsuarioVerificar}; 
}

function reservarSalon() {
    confirm("Desea reservar un salón?");
    const fechaSalon = prompt("Indique fecha: ");
    const ocasion = prompt("Indique ocasión. ");
    alert("Muchas gracias! ");
    return;
}










