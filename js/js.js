


class CantidadDeTomas {
    constructor(cantidad, id, valorCantidad) {

        this.cantidad = cantidad;
        this.id = id;
        this.valorCantidad = valorCantidad;
    }
}
class TamañoDeTomas {
    constructor(tamaño, id, valorTamañoDeTomas) {


        this.tamaño = tamaño;
        this.id = id;
        this.valorTamañoDeTomas = valorTamañoDeTomas;
    }

}
class MedioDeCancelacionTasa {
    constructor(metodo, id, tasa) {

        this.metodo = metodo;
        this.id = id;
        this.tasa = tasa;

    }
}


const fotos3 = new CantidadDeTomas('Tres tomas', 3, 500)
const fotos6 = new CantidadDeTomas('Seis tomas', 6, 1000)

const tamaño10151 = new TamañoDeTomas('10 X 15', 1, 1000)
const tamaño15251 = new TamañoDeTomas('15 x 25', 2, 2000)

const medioDeCancelacion1 = new MedioDeCancelacionTasa('Efectivo', 1, -0.1)
const medioDeCancelacion3 = new MedioDeCancelacionTasa('tres cuotas', 3, 1.1)
const medioDeCancelacion6 = new MedioDeCancelacionTasa('seis cuotas', 6, 1.5)
const medioDeCancelacion12 = new MedioDeCancelacionTasa('doce cuotas', 12, 1.8)



let cantidadDeTomasElegidas = parseInt(prompt('seleccione la cantidad de fotografias a realizar 3 o 6'));
let tamañoDeLasTomasEleguidas = parseInt(prompt('selecione el tamaño de la impresion, 1 para 10 X 15, 2 para 15 X 25.'));
let medioDeCancelacionEleguido = parseInt(prompt('selecione medio de pago, 1 para efectivo, o 3, 6 o 12 cuotas con interes'));



let cantidadSEleccionada = false
let dimencionDeTomas = false
let medioDePago = false

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
                dimencionDeTomas = true
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
            } else {
                tamañoDeLasTomasEleguidas = parseInt(prompt('Seleccione una opcion correcta 1. para 10 X 15, 2 para 15 X 25'))

            }



        }

    } else if (cantidadDeTomasElegidas === 6) {
        cantidadSEleccionada = true
        cantidadDeTomasElegidas = fotos6
        while (dimencionDeTomas === false) {
            if (tamañoDeLasTomasEleguidas === 2) {

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
                dimencionDeTomas = true
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




    } else {
        cantidadDeTomasElegidas = parseInt(
            prompt('escoja la cantidad de tomas disponibles 3 o 6.')
        )
    }

    function suma (monto1, monto2,monto3){
        monto1 = cantidadDeTomasElegidas.valorCantidad
        monto2 = tamañoDeLasTomasEleguidas.valorTamañoDeTomas
        monto3 = medioDeCancelacionEleguido.tasa

        const suma = parseInt(((monto1 + monto2) * monto3))
        return suma
    } 

    console.log(cantidadDeTomasElegidas.valorCantidad)
    console.log(tamañoDeLasTomasEleguidas.valorTamañoDeTomas)
    console.log(medioDeCancelacionEleguido.tasa)
    console.log(cantidadDeTomasElegidas.valorCantidad)


}
alert(`El valor total por la impresion de ${cantidadDeTomasElegidas.id} fotografias, con un tamaño de ${tamañoDeLasTomasEleguidas.tamaño} abonando en ${medioDeCancelacionEleguido.metodo} es de: $ ${(cantidadDeTomasElegidas.valorCantidad + tamañoDeLasTomasEleguidas.valorTamañoDeTomas)*medioDeCancelacionEleguido.tasa}`)


