function esPar() {
  const numero = prompt("Ingrese número:");

  const resto = parseInt(numero) % 2;

  if (resto === 0) {
    alert("ES PAR");
  } else {
    alert("ES IMPAR");
  }
}

function esDivisible5() {
  const numero = prompt("Ingrese número:");

  const resto = parseInt(numero) % 5;

  if (resto === 0) {
    console.log("ES DIVISIBLE POR 5");
  } else {
    console.log("NO ES DIVISIBLE POR 5");
  }
}

function esDivisible5y11() {
  const numero = prompt("Ingrese número:");

  const esDiv5 = parseInt(numero) % 5 === 0 ? true : false;
  const esDiv11 = parseInt(numero) % 11 === 0 ? true : false;

  if (esDiv5 && esDiv11) {
    console.log("ES DIVISIBLE POR 5 y 11");
  } else if (esDiv5) {
    console.log("ES DIVISIBLE POR 5");
  } else if (esDiv11) {
    console.log("ES DIVISIBLE POR 11");
  } else {
    console.log("NO ES DIVISIBLE NI POR 5 NI POR 11");
  }
}

function numeroMayor() {
  const numeroA = parseInt(prompt("Ingrese el primer número:"));
  const numeroB = parseInt(prompt("Ingrese el segundo número:"));

  if (numeroA > numeroB) {
    alert("El número más grande es: " + numeroA);
  } else {
    alert("El número más grande es: " + numeroB);
  }

  // Ternario
  //(numeroA > numeroB) ? alert("El número más grande es: " + numeroA) : alert("El número más grande es: " + numeroB);
}

function comoEmpieza() {
  const data = prompt("Ingrese alguna palabra:");
  value = parseInt(data[0]);

  if (value >= 0 || value <= 0) {
    console.log("La palabra empieza con un número");
  } else {
    console.log("La palabra empieza con una letra");
  }
}

function esTriangulo(alfa, beta, omega) {
  const suma = alfa + beta + omega;

  if (suma === 180) {
    console.log("ES UN TRIÁNGULO");
  } else {
    console.log("NO ES UN TRIÁNGULO");
  }
}

function esUpperCase(data) {
  if (data.charAt(0) === data.charAt(0).toUpperCase()) {
    console.log("EMPIEZA CON MAYÚSCULA");
  } else {
    console.log("NO EMPIEZA CON MAYÚSCULA");
  }
}

function esBisiesto(anio) {
  const bool =
    anio % 400 === 0 ? true : anio % 100 === 0 ? false : anio % 4 === 0;

  bool
    ? console.log("ES UN ANIO BISIESTO")
    : console.log("NO ES UN ANIO BISIESTO");
}

function adivinaNumero() {
  const numeroAleatorio = Math.ceil(Math.random() * 10);
  let numero = 0;
  do {
    numero = parseInt(prompt("Adivina el número:"));
  } while (numeroAleatorio === numero);
  {
    console.log("NO CORRESPONDE :(");
    numero = parseInt(prompt("Adivina el número:"));
  }

  console.log("ESE SI ES. BUEN TRABAJO!!");
}

// Obtener edad
/*  
    if (edad < 13) {
        console.log("Es niño");
    } else (edad >= 13 ){
        console.log("Es adolecente");
    }
*/

function tablaVerdad1(a, b) {
  console.log(!!a && !!b);
}

function tablaVerdad2(a, b) {
  console.log(!!a || !!b);
}
