// funciones

//funcion de suma, resta, multiplicacion y division
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

// evento del botón
document.getElementById("calcular").addEventListener("click", function () {
  // obtener números del html y se guardan en numero1 y numero2
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  //Aqui obtenemos  la operacion del select
  let operacion = document.getElementById("Operacion").value;

  let resultado;

  // validar que haya números
  if (numero1 == "" || numero2 == "") {
    document.getElementById("Resultado").textContent =
      "Resultado: Por favor llena ambos campos.";
    return;
  }
  // switch según la operación seleccionada
  switch (operacion) {
    case "opcSumar":
      resultado = sumar(numero1, numero2);
      break;
    case "opcRestar":
      resultado = restar(numero1, numero2);
      break;
    case "opcMultiplicar":
      resultado = multiplicar(numero1, numero2);
      break;
    case "opcDividir":
      if (numero2 == 0) {
        resultado = "Error: No se puede dividir entre cero";
      } else {
        resultado = dividir(numero1, numero2);
      }
      break;
    default:
      resultado = "Operación no válida";
  }

  // muestra el resultado en el elemento con el id "Resultado"
  document.getElementById("Resultado").textContent = "Resultado: " + resultado;
});
