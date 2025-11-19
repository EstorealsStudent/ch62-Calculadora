
//funciones
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
        return a / b;   
}
//main

alert("Bienvenido a la calculadora basica de 2 numeros de Hector");
let numero1 = parseFloat(prompt("Ingrese el primer numero:"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
let operacion = parseInt(prompt(
  "Ingrese la operación a realizar (Selecciona un numero del 1 al 4):\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));
  let resultado;
switch (operacion) {
    case 1:
        resultado = sumar(numero1, numero2);
        alert(`El resultado de la suma de ${numero1} + ${numero2} es: ${resultado}`);
        break;
    case 2:
        resultado = restar(numero1, numero2);
        alert(`El resultado de la resta de ${numero1} - ${numero2} es: ${resultado}`);
        break;
    case 3:
        resultado = multiplicar(numero1, numero2);
        alert(`El resultado de la multiplicacion de ${numero1} * ${numero2} es: ${resultado}`);
        break;
    case 4:
        if (numero2 !== 0) {
            resultado = dividir(numero1, numero2);
            alert(`El resultado de la division de ${numero1} / ${numero2} es: ${resultado}`);
        } else {
            alert("Error: No se puede dividir por cero");
        }
        break;
    default:
        alert("Operacion no valida.ingrese una de las siguientes opciones: 1, 2, 3, 4");
        break;
}
