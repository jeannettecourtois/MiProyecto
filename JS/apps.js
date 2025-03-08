//Reservar mesa solamente 

/*alert("Recuerde que creando una cuenta podrá sumar puntos!");

let nuevosCLientes = []; 


let nombreCliente = prompt("Indique su nombre: "); 
let apellidoCliente = prompt("Indique su apellido: ");
let emailCliente = prompt("Indique su mail: "); 
let telefonoCliente = prompt("Indique su numero de teléfono: "); 

let objetoNuevoCliente = {
    nombre: nombreCliente,
    apellido : apellidoCliente, 
    email : emailCliente,
    telefono: telefonoCliente
}; 

nuevosCLientes.push(objetoNuevoCliente); 

console.log(`Cantidad de clientes: ${nuevosCLientes.length}`);*/



//Crear cuenta y comprar online

//El cliente tiene cuenta? 



let cuentaAsegurada = prompt("¿Usted tiene una cuenta? Si es así, escriba Sí, sino escriba No").trim().toLowerCase();
//trim()? 
//toLowerCase()?
if (cuentaAsegurada === "sí" || cuentaAsegurada === "si") {
    alert("¡Perfecto! Puede conectarse.");
} else if (cuentaAsegurada === "no") {
    alert("Cree una cuenta antes de hacer las compras ;)");
} else {
    cuentaAsegurada = prompt("Por favor, escriba Sí o No. ¿Tiene una cuenta?").trim().toLowerCase();
}


const objetosDeLaTienda = ["queso vegano", "salchichas veggies", "carne vegetal", "verduras", "lentejas"]; 




let carrito = [];


function compras(objetoDeseado = ''){
    let objetoDeseado = prompt("Qué desea comprar? ");
    while(!objetosDeLaTienda.includes(objetoDeseado)){
        alert("Ese producto no està en stock");
        objetoDeseado = prompt("Elija otro producto");
    }
    alert("El objeto que desea se encuentra en nuestra tienda :)!");  
    carrito.push(objetoDeseado); // Agrega el producto al carrito

}

while(carrito.length === 0){
    compras();
}

alert(`Gracias por su compra! Su carrito: ${carrito.join()}`);



