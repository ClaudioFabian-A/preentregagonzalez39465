// prompt("hola");

// const nombre = prompt('ingrese su nombre de usuario,(Hypatia)').toLocaleLowerCase();
// const passWor = +prompt('ingrese su password');
//                 console.log(passWor);
//                 console.log(nombre);

//                 if ((nombre === "") || (nombre != 'hypatia') || (passWor != 123) ){
//                     alert('datos incorrectos');
//                 }else{                    
//                    alert('bienvenido '+ nombre);
//                    document.write("<h1> hola "+ nombre+"</h1>");


//                 }

// function muestraMensaje(elemento) {
//     const seleccionA = prompt('¿desea agendar fecha de entrevista?');
//     const seleccionC = prompt('¿desea cancelar una cita?');
//     const dia = prompt('seleccione un dia disponible de la semana.');
//     const hora = prompt('seleccione un horario disponible.');
//     const cancela = prompt('tiene cita para el 5 de marzo a las 18 hs.¿desae cancelar?');
//     if (seleccionA === 'a') {
//         document.write("<h2>" + seleccionA + "</h2>");
//         console.log(seleccionA);
//     }
// }
// document.write("hola");

let cantidadDeTomasElegidas = parseInt(prompt('seleccione la cantidad de fotografias a realizar 3 o 6'));
let tamañoDeLasTomasEleguidas = parseInt(prompt('selecione el tamano en que quiere sean reveladas y si desea album'));
let medioDeCancelacionEleguido = parseInt(prompt('selecione medio de pago'));


function cantidadDeTomas(cantidad, id, valorCantidad) {
    this.cantidad = cantidad;
    this.id = id;
    this.valorCantidad = valorCantidad;



}
function tamañoDeTomas(tamaño, id, valorTamañoDeTomas) {

    this.tamaño = tamaño;
    this.id = id;
    this.valorTamañoDeTomas = valorTamañoDeTomas;

}
function medioDeCancelaciontasa(metodo, id, tasa) {
    this.metodo = metodo;
    this.id = id;
    this.tasa = tasa;

}


const fotos3 = new cantidadDeTomas('Tres tomas', 3, 500)
const fotos6 = new cantidadDeTomas('Seis tomas', 6, 1000)

const tamaño10151 = new tamañoDeTomas('10 X 15', 1, 1000)
const tamaño15251 = new tamañoDeTomas('15 x 25', 2, 2000)

const medioDeCancelacion1 = new medioDeCancelaciontasa('Efectivo', 1, -0.1)
const medioDeCancelacion3 = new medioDeCancelaciontasa('tres cuotas', 3, 1.1)
const medioDeCancelacion6 = new medioDeCancelaciontasa('seis cuotas', 6, 1.5)
const medioDeCancelacion12 = new medioDeCancelaciontasa('doce cuotas', 12, 1.8)

let cantidadSEleccionada = false
let dimencionDeTomas = false
let medioDePago = false

// let cantidadDeTomas


while (cantidadSEleccionada === false) {
    if (cantidadDeTomasElegidas === 3) {
        cantidadSEleccionada = true
        cantidadDeTomasElegidas = fotos3

        while (dimencionDeTomas === false) {
            if (tamañoDeLasTomasEleguidas === 1) {

                dimencionDeTomas = true

                tamañoDeLasTomasEleguidas = tamaño10151

                while (medioDePago === false) {
                    if (medioDeCancelacionEleguido === 1) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion1
                    } else if (medioDeCancelacionEleguido === 3) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion3

                    } else if (medioDeCancelacionEleguido === 6) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion6
                    } else if (medioDeCancelacionEleguido === 12) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion12
                    } else {
                        medioDeCancelacionEleguido = parseInt(
                            prompt('escoja un medio de pago correcto.')
                        )
                    }
                }
            } else if (tamañoDeLasTomasEleguidas === 2) {
                tamañoDeTomas = true
                tamañoDeLasTomasEleguidas = tamaño15251

                while (medioDePago === false) {
                    if (medioDeCancelacionEleguido === 1) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion1
                    } else if (medioDeCancelacionEleguido === 3) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion3

                    } else if (medioDeCancelacionEleguido === 6) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion6
                    } else if (medioDeCancelacionEleguido === 12) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion12
                    } else {
                        medioDeCancelacionEleguido = parseInt(
                            prompt('escoja un medio de pago correcto.')
                        )
                    }
                }
            }



        }

    } else if (cantidadDeTomasElegidas === 6) {
        cantidadSEleccionada = true
        cantidadDeTomasElegidas = fotos6
        while (dimencionDeTomas === false) {
            if (tamañoDeLasTomasEleguidas === 1) {

                dimencionDeTomas = true

                tamañoDeLasTomasEleguidas = tamaño10151

                while (medioDePago === false) {
                    if (medioDeCancelacionEleguido === 1) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion1
                    } else if (medioDeCancelacionEleguido === 3) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion3

                    } else if (medioDeCancelacionEleguido === 6) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion6
                    } else if (medioDeCancelacionEleguido === 12) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion12
                    } else {
                        medioDeCancelacionEleguido = parseInt(
                            prompt('escoja un medio de pago correcto.')
                        )
                    }
                }
            } else if (tamañoDeLasTomasEleguidas === 2) {
                tamañoDeTomas = true
                tamañoDeLasTomasEleguidas = tamaño15251

                while (medioDePago === false) {
                    if (medioDeCancelacionEleguido === 1) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion1
                    } else if (medioDeCancelacionEleguido === 3) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion3

                    } else if (medioDeCancelacionEleguido === 6) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion6
                    } else if (medioDeCancelacionEleguido === 12) {
                        medioDePago = true
                        medioDeCancelacionEleguido = medioDeCancelacion12
                    } else {
                        medioDeCancelacionEleguido = parseInt(
                            prompt('escoja un medio de pago correcto.')
                        )
                    }
                }
            }



        }




    }





    else {
        cantidadDeTomasElegidas = parseInt(
            prompt('escoja la cantidad de tomas disponibles 3 o 6.')
        )
    }



}



console.log(cantidadDeTomasElegidas);
// console.log(tamañoDeLasTomasEleguidas);
// console.log(medioDeCancelacionEleguido);


