function sumar() {
  const numeroA = prompt("Ingrese el primer número:");
  const numeroB = prompt("Ingrese el segundo número:");

  const suma = parseInt(numeroA) + parseInt(numeroB);

  alert("la suma es: " + suma);
}

function temperatura() {
  const tempCelcius = prompt("Ingrese temperatura en Celcius:");
  const tempFah = Math.floor(parseInt(tempCelcius) * 1.8 + 32);
  alert("La temperatura en Fahrenheit es: " + tempFah);
}

function dividir10() {
  const numero = prompt("Ingrese número:");
  const div = parseInt(numero) / 10;

  alert("Resultado de la división por 10: " + div);
}

function tipoDato(dato) {
  alert("El tipo de dato ingresado es: " + typeof dato);
}
