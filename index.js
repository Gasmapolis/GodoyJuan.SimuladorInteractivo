let nombreUsuario = prompt("Ingrese su nombre por favor")
let pulsera = 450
let mochila = 2200
let relojDigital = 3100
let relojAnalogico = 2000
let gorras = 800
let agregarProducto = 0;
let totalProductos = 0;


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

function division(numeroUno, numeroDos) {
    let resultado = numeroUno / numeroDos;
    return resultado;
}

function monstrarTotal(resultado) {
    alert("El total a pagar es: $" + resultado + "\n !!muchas gracias por su compra!!");
    
}

function menu() {
    let opcion = prompt("Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito");
    while (opcion !== "ESC") {
        switch (opcion) {
            case "1":
                    agregarProducto = parseInt(prompt("Seleccione el producto que desea agregar al carrito.\n su total hasta ahora es $" + totalProductos + ".\n 1.Pulsera\n 2.Mochila\n 3.Reloj digital\n 4.Reloj Analogico\n 5.Gorras\n 0.Ir a pagar productos."));
                    if (agregarProducto === 1) {
                        totalProductos = suma(totalProductos, pulsera)
                    }if (agregarProducto === 2) {
                        totalProductos = suma(totalProductos, mochila)
                    }if (agregarProducto === 3) {
                        totalProductos = suma(totalProductos, relojDigital)
                    }if (agregarProducto === 4) {
                        totalProductos = suma(totalProductos, relojAnalogico)
                    }if (agregarProducto === 5) {
                        totalProductos = suma(totalProductos, gorras)
                    }if (agregarProducto >= 6) {
                        alert("Seleccione por favor una opcion valida")
                    }if (agregarProducto === 0) {
                        
                    }else{
                        break
                    }
            case "2":
                let transferencia = totalProductos
                let efectivo = totalProductos * 0.90
                let credito = totalProductos * 1.15
                let metodoPago = 0

                    metodoPago = parseInt(prompt("El total en el carrito es de: $" + totalProductos + "\nComo desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito"));
                    if (metodoPago === 1) {
                        alert("Se ha aplicado un descuento del 10%");
                        totalProductos = efectivo;
                        return totalProductos

                    }if (metodoPago === 2) {
                        totalProductos = transferencia;
                        return totalProductos;

                    }if (metodoPago === 3) {
                        alert("Se ha aplicado un recargo del 15%");
                        totalProductos = credito;
                        return totalProductos
                    }else {
                        alert("Seleccione una opcion valida")
                        
                    }
            
            case "3":
                alert()
                totalProductos = multiplicacion(totalProductos, 0);
                return totalProductos
                
            
        } 
    
    }
}

menu(totalProductos)
monstrarTotal(totalProductos);