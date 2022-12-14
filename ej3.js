const NUMERO = /^\d+$/;
function conteo() {
  const valorTope = parseInt(prompt("Ingrese valor tope: "));
  for (let index = 0; index <= valorTope; index++) {
    console.log(index);
  }
}

function conteoV2() {
  const valorTope = parseInt(prompt("Ingrese valor tope: "));
  for (let index = 0; index <= valorTope; index = index + 2) {
    console.log(index);
  }
}

function conteoV3() {
  const valorTope = parseInt(prompt("Ingrese valor tope: "));
  for (let index = valorTope; index >= 0; index--) {
    console.log(index);
  }
}

function tablaDelX(x) {
  let factor1 = x ? x : 9;
  let factor2 = 0;
  let result = 0;
  while (factor2 < 11) {
    result = factor1 * factor2;
    console.log(`${factor1} x ${factor2} = ${result}`);
    factor2++;
  }
}

function sumaDigitos() {
  const numero = prompt("Ingrese número: ");
  let suma = 0;

  if (NUMERO.test(numero)) {
    let array = Array.from(numero, (x) => parseInt(x));
    for (let index = 0; index < array.length; index++) {
      suma = suma + array[index];
    }

    console.log("TOTAL: " + suma);
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO");
  }
}

function sumaPares() {
  const a = prompt("Ingrese número desde: ");
  const b = prompt("Ingrese número hasta: ");
  let suma = 0;

  if (NUMERO.test(a) && NUMERO.test(b)) {
    for (let index = parseInt(a); index <= parseInt(b); index++) {
      if (index % 2 == 0) {
        console.log(index);
        suma = suma + index;
      }
    }

    console.log("TOTAL: " + suma);
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO");
  }
}

function sumaNumeros() {
  const b = prompt("Ingrese número hasta: ");
  let suma = 0;

  if (NUMERO.test(b)) {
    for (let index = 0; index <= parseInt(b); index++) {
      console.log(index);
      suma = suma + index;
    }

    console.log("TOTAL: " + suma);
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO");
  }
}

function factorial() {
  const b = prompt("Ingrese número hasta: ");
  let producto = 1;

  if (NUMERO.test(b)) {
    for (let index = 1; index <= parseInt(b); index++) {
      console.log(index);
      producto = producto * index;
    }

    console.log("PRODUCTO: " + producto);
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO");
  }
}

function divisores(value) {
  const numero = value ? value : prompt("Ingrese número: ");
  let divisores = [];
  if (NUMERO.test(numero)) {
    for (let index = 1; index <= parseInt(numero); index++) {
      if (parseInt(numero) % index == 0) {
        console.log(`${numero} es divisible por ${index}`);
        divisores.push(index);
      }
    }

    return divisores;
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO");
  }
}

function esPrimo(value) {
  const numero = value ? value : prompt("Ingrese número: ");

  if (NUMERO.test(numero) && parseInt(numero) >= 2) {
    const array = divisores(numero);
    if (array.length > 2) {
      console.log("NÚMERO NO PRIMO");
      return false;
    } else {
      console.log("NÚMERO PRIMO");
      return true;
    }
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO O NO ES MAYOR IGUAL QUE 2");
  }
}

function esNumPerfecto(value) {
  const numero = value ? value : prompt("Ingrese número: ");
  let suma = 0;
  if (NUMERO.test(numero)) {
    const array = divisores(numero);
    for (let index = 0; index < array.length - 1; index++) {
      suma = suma + array[index];
    }
    console.log("SUMA DE SUS DIVISORES: " + suma);
    if (suma === parseInt(numero)) {
      console.log("NÚMERO PERFECTO");
      return true;
    } else {
      console.log("NO ES UN NÚMERO PERFECTO");
      return false;
    }
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO");
  }
}

function numerosPrimosN(numero) {
  if (NUMERO.test(numero) && numero >= 2) {
    for (let index = 2; index <= numero; index++) {
      if (esPrimo(index)) {
        console.log(index);
      }
    }
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO O NO ES MAYOR IGUAL QUE 2");
  }
}

function numPerfectosN(numero) {
  if (NUMERO.test(numero)) {
    for (let index = 1; index <= numero; index++) {
      if (esNumPerfecto(index)) {
        console.log(index);
      }
    }
  } else {
    console.log("EL VALOR INGRESADO NO ES UN NÚMERO");
  }
}

function dibujo(op) {
  switch (op) {
    case 1:
      cuadrado();
      break;
    case 2:
      cuadradoHueco();
      break;
    case 3:
      tableroAjedrez();
      break;
    case 4:
      piramideIzq();
      break;
    case 5:
      diamante();
      break;
    case 6:
      piramideInv();
      break;
    case 7:
      piramideCentrada();
      break;
  }
}

function cuadrado() {
  const fila = 5;

  for (let index = 0; index < fila; index++) {
    document.write("*****");
    document.write("<br>");
  }
}

function cuadradoHueco() {
  const fila = 5;

  for (let index = 0; index < 2; index++) {
    document.write("*****");
    document.write("<br>");
    if (index === 0) {
      for (let index = 0; index < fila - 2; index++) {
        document.write("*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*");
        document.write("<br>");
      }
    }
  }
}

function tableroAjedrez() {
  const fila = 7;

  for (let index = 0; index < (fila - 1) / 2; index++) {
    document.write("********");
    document.write("<br>");
    document.write("&nbsp;*******");
    document.write("<br>");
  }
  document.write("********");
}

function piramideIzq() {
  const fila = 5;
  let imprimir = "*";
  for (let index = 0; index < fila; index++) {
    document.write(imprimir);
    document.write("<br>");
    imprimir = imprimir + "*";
  }
}

function diamante() {
  const fila = 5;
  let imprimir = "*";
  for (let index = 0; index < fila; index++) {
    document.write(imprimir);
    document.write("<br>");
    imprimir = imprimir + "*";
  }

  for (let index = 0; index < imprimir.length - 1; index++) {
    document.write(imprimir.slice(0, imprimir.length - (index + 1)));
    document.write("<br>");
  }
}

function piramideInv() {
  const cant = 9;
  let imprimir = "*";

  for (let index = 0; index < cant; index++) {
    imprimir = imprimir + "*";
  }

  for (let index = 0; index < imprimir.length; index++) {
    document.write(imprimir.slice(0, imprimir.length - (index + 1)));
    document.write("<br>");
  }
}

function piramideCentrada() {
  const cant = 9;
  let imprimir = "*";
  let fila = (cant + 1) / 2;
  let repeat = fila;
  console.log(fila);
  for (let index = 0; index < repeat; index++) {
    document.write("&nbsp;".repeat(fila * 2) + imprimir);
    document.write("<br>");
    imprimir = "**" + imprimir;
    fila--;
  }
}
