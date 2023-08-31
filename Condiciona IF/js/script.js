const toppingElegidoCliente = "KITKAT";

const valorHelado = 100;
// const toppings = ["Oreo", "KitKat", "Kinder"];
// const precio = [10, 15, 25];

const toppingKitKat = {
    nombre: "kitkat",
    precio: 15
}
const toppingOreo = {
    nombre: "oreo",
    precio: 15
}
const toppingKinder = {
    nombre: "kinder",
    precio: 15
}
let precioFinal = 0;

if (toppingElegidoCliente.toLowerCase() === toppingKitKat.nombre) {
    /*  */
  precioFinal = valorHelado + toppingKitKat.precio;
  console.log(`El total a pagar es de : $ ${precioFinal}`);
  /*  */
} else if (toppingElegidoCliente === toppings[1]) {
    /*  */
  precioFinal = valorHelado + precio[1];
  console.log(`El total a pagar es de : $ ${precioFinal}`);
  /*  */
} else if (toppingElegidoCliente === toppings[2]) {
    /*  */
  precioFinal = valorHelado + precio[2];
  console.log(`El total a pagar es de : $ ${precioFinal}`);
  /*  */
} else {
  console.log("El topping elegido no es válido.");
}

