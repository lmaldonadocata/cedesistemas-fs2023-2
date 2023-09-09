
let edad = 18

// condicionales simples

if (edad >= 18) { //true
 console.log('mayor de edad')
}

// condicionales compuestos

if (edad >= 18) {
    console.log ('mayor de edad')
} else {
    console.log ('NO es mayor de edad')
}

// condicionales anidados

if (edad >= 18) {
    console.log ('mayor de edad')
} else if (edad ===18){
    console.log ('tiene 18 años')
} else if (edad ===17) {
    console.log ('tiene 17 años')
} else {
    console.log('es menor de 17 años')
}

// condiciones ternarias
let mensaje = edad>=18 ? 'bienvenido' : 'No tienes acceso' 
