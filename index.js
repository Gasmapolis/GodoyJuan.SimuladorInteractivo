let nombreUsuario = prompt("Ingrese su nombre por favor")

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = parseInt (precio);
    }
}

const pulsera = new Producto("Pulsera", 450);
const mochila = new Producto("Mochila", 2200);
const relojDigital = new Producto("Reloj Digital", 3100);
const relojAnalogico = new Producto("Reloj Analogico", 2000);
const gorras = new Producto("Gorras", 800);
let totalProductos = 0
function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}

function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
}

function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}

function menu() {
    do {
    let opcion = prompt("Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito");
    
        switch (opcion) {
            case "1":
                agregarProducto()
                break
            case "2":
                metodoPago()
                break
            case "3":
                alert("Se han eliminado todos los productos del carrito")
                totalProductos = multiplicacion(totalProductos, 0);
                menu()
            default: 
            mostrarTotal()
                break;
            
        } 
    }while (opcion !== "ESC" || opcion < 3) 
}

function agregarProducto() {
    do {
        agregarProducto = parseInt(prompt("Seleccione el producto que desea agregar al carrito.\n su total hasta ahora es $" + totalProductos + ".\n 1.Pulsera\n 2.Mochila\n 3.Reloj digital\n 4.Reloj Analogico\n 5.Gorras\n 0.Volver al menu anterior."));
        if (agregarProducto === 1) {
            totalProductos = suma(totalProductos, pulsera.precio)
        }if (agregarProducto === 2) {
            totalProductos = suma(totalProductos, mochila.precio)
        }if (agregarProducto === 3) {
            totalProductos = suma(totalProductos, relojDigital.precio)
        }if (agregarProducto === 4) {
            totalProductos = suma(totalProductos, relojAnalogico.precio)
        }if (agregarProducto === 5) {
            totalProductos = suma(totalProductos, gorras.precio)
        }if (agregarProducto >= 6) {
            alert("Seleccione por favor una opcion valida")
        }

    }while (agregarProducto !== 0)
        if (agregarProducto === 0) {
            menu()
        }
}

function mostrarTotal(resultado) {
    alert("El total a pagar es: $" + resultado + "\n !!muchas gracias por su compra!!");
    
}
menu()
function metodoPago() {
    let transferencia = totalProductos
    let efectivo = totalProductos * 0.90
    let credito = totalProductos * 1.15
    let metodoPago = 0

        metodoPago = parseInt(prompt("El total en el carrito es de: $" + totalProductos + "\nComo desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito"));
        if (metodoPago === 1) {
            alert("Se ha aplicado un descuento del 10%");
            totalProductos = efectivo;
            // return totalProductos
            mostrarTotal(totalProductos)    
        }if (metodoPago === 2) {
            totalProductos = transferencia;
            // return totalProductos;
            mostrarTotal(totalProductos)
    
        }if (metodoPago === 3) {
            alert("Se ha aplicado un recargo del 15%");
            totalProductos = credito;
            // return totalProductos
            mostrarTotal(totalProductos)
        }if (metodoPago >= 4) {
            alert("Seleccione una opcion valida")
            
        }
}
    menu()




