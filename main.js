// let a = 5;
// let b = 5;
// if (!(a>=b)) {
//     console.log(`${a} no es mayor que ${b} pero el operador NOT cambio su resultado a true.`);
// } else {
//     console.log(`${a} si es mayor que ${b} pero el operador NOT cambio su resultado a false`)
// }

// let a = 5;
// let b = 10;
// let numero = parseInt(prompt(`Ingrese un numero.`));
// if (numero >= a && numero <= b) {
//     console.log(`El numero ${numero} esta entre el rango ${a} y ${b}, por lo tanto es permitido`);
// } else {
//     console.log(`El numero ${numero} no esta entre el rango ${a} y ${b}, por lo tanto es permitido`);
// }


let opciones = prompt(`
Ingrese una de las opciones para entrar a la puerta Inteligente
    A. Ingresar la llave.
    B. Huella dactilar.
    C. Lectura de voz.
`);
if( (opciones == 'A' || opciones == 'B') || opciones == 'C'){
    console.log(`La puerta se esta abriendo BIENVENIDO usuario ingresantes la credencial correcta`);
}else{
    console.log(`La puerta esta cerra acceso denegado :(`);
}

// let mensaje = (true)
// ?(
//     console.log(":V"),
//     console.log(5+8),
//     "Condicion Permitida"
// )
// :
//     "Condicion denegada";
//     console.log(mensaje);

// let mensaje = (false) ? "Condicion Permitida" : "Condicion denegada";
// console.log(mensaje);

// if(true)
//      console.log("Condicion Permitida");
// else
//     console.log("Condicion denegada");

// if(false) console.log("Condicion Permitida");
// else console.log("Condicion denegada");