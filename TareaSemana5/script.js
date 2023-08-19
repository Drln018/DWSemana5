function showSection(sectionId) {
  const sections = document.querySelectorAll('.exercise-section');
  sections.forEach(section => {
      section.style.display = 'none';
  });
  const targetSection = document.getElementById(sectionId);
  targetSection.style.display = 'block';
}

function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      var imc = peso / (altura * altura);
      
      var categoria = "";
      if (imc < 18.5) {
        categoria = "Bajo peso";
      } else if (imc < 24.9) {
        categoria = "Normal";
      } else if (imc < 29.9) {
        categoria = "Sobrepeso";
      } else {
        categoria = "Obeso";
      }
      
      var resultado = "Tu IMC es: " + imc.toFixed(2) + "<br>Categoría: " + categoria;
      document.getElementById("resultado").innerHTML = resultado;
    } else {
      document.getElementById("resultado").innerHTML = "Ingresa valores válidos para peso y altura.";
    }
      document.getElementById("calcularBtn").addEventListener("click", calcularIMC);
  }
  showSection('imc-section');

  //mostrar likes
  document.addEventListener("DOMContentLoaded", function () {
    var likesInput = document.getElementById("likesInput");
    var likesBtn = document.getElementById("likesBtn");
    var likesOutput = document.getElementById("likesOutput");

    likesBtn.addEventListener("click", function () {
        var likes = parseInt(likesInput.value);

        if (isNaN(likes)) {
            likesOutput.textContent = "Ingrese un número válido";
            return;
        }

        if (likes < 1000) {
            likesOutput.textContent = likes.toString();
        } else if (likes < 1000000) {
            likesOutput.textContent = (likes / 1000).toFixed(0) + "K";
        } else {
            likesOutput.textContent = (likes / 1000000).toFixed(0) + "M";
        }
    });
});
showSection('likes-section');

//login
document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("login-form");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var loginButton = document.getElementById("login-button");
    var loginMessage = document.getElementById("login-message");

    // Datos de usuario y contraseña correctos
    var correctUsername = "usuario";
    var correctPassword = "contrasena";

    loginButton.addEventListener("click", function () {
        var enteredUsername = usernameInput.value.toLowerCase();
        var enteredPassword = passwordInput.value.toLowerCase();

        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            loginMessage.textContent = "Inicio de sesión exitoso.";
        } else {
            loginMessage.textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
        }
    });
});
showSection('login-section');

function calcularImpuestos() {
  var edadInput = document.getElementById('edad');
  var ingresosInput = document.getElementById('ingresos');
  var resultadoParrafo = document.getElementById('impuestoOutput');

  var edad = parseFloat(edadInput.value);
  var ingresos = parseFloat(ingresosInput.value);

  if (isNaN(edad) || isNaN(ingresos)) {
      resultadoParrafo.textContent = "Ingresa valores válidos.";
      return;
  }

  var impuestos = 0;

  if (edad >= 18 && ingresos >= 1000) {
      impuestos = ingresos * 0.4; // 40% de los ingresos
  }

  resultadoParrafo.textContent = "Impuestos: Q" + impuestos.toFixed(2);
}
showSection('impuestos-section');

function imprimirArreglo() {
  var arrayInput = document.getElementById('arrayInput').value;
  var arr = arrayInput.split(',').map(item => item.trim());

  var ul = document.getElementById('resultadoArray');
  ul.innerHTML = ''; // Limpiar contenido previo

  for (var i = 0; i < arr.length; i++) {
      var li = document.createElement('li');
      li.textContent = formatItem(arr[i], i);
      ul.appendChild(li);
  }
}
showSection('array-section');

function formatItem(item, index) {
  var formattedIndex = String.fromCharCode(97 + index); // Convertir a letra: a, b, c, ...
  return formattedIndex + '. ' + item;
}

function calcularNumeroDeCaracteres() {
  var cadenaInput = document.getElementById('cadena').value;
  var caracterInput = document.getElementById('caracter').value;

  if (caracterInput.length !== 1) {
      document.getElementById('resultadoCaracteres').textContent = "Ingresa un solo caracter.";
      return;
  }

  var numCaracteres = numeroDeCaracteres(cadenaInput, caracterInput);
  document.getElementById('resultadoCaracteres').textContent = "Número de veces: " + numCaracteres;
}
showSection('caracteres-section');

function numeroDeCaracteres(cadena, caracter) {
  var count = 0;
  for (var i = 0; i < cadena.length; i++) {
      if (cadena[i] === caracter) {
          count++;
      }
  }
  return count;
}

function calcularSuma() {
  var arregloInput = document.getElementById('arregloSuma').value;
  var numeros = arregloInput.split(',').map(item => parseFloat(item.trim()));

  if (numeros.some(isNaN)) {
      document.getElementById('resultadoSumarArray').textContent = "Ingresa solo números válidos.";
      return;
  }

  var suma = sumarArreglo(numeros);
  document.getElementById('resultadoSumarArray').textContent = "Suma: " + suma;
}
showSection('sumarArray-section');

function sumarArreglo(arreglo) {
  var suma = 0;
  for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
  }
  return suma;
}

function calcularMultiplicacion() {
  var arregloInput = document.getElementById('arregloMulti').value;
  var numeros = arregloInput.split(',').map(item => parseFloat(item.trim()));

  if (numeros.some(isNaN)) {
      document.getElementById('resultadoMulti').textContent = "Ingresa solo números válidos.";
      return;
  }

  var multiplicacion = multiplicarArreglo(numeros);
  document.getElementById('resultadoMulti').textContent = "Multiplicación: " + multiplicacion;
}
showSection('MultiArray-section'); 

function multiplicarArreglo(arreglo) {
  var multiplicacion = 1;
  for (var i = 0; i < arreglo.length; i++) {
      multiplicacion *= arreglo[i];
  }
  return multiplicacion;
}

function calcularSumaRango() {
  var arregloInput = document.getElementById('arreglo').value;
  var posInicial = parseInt(document.getElementById('posInicial').value);
  var posFinal = parseInt(document.getElementById('posFinal').value);

  var numeros = arregloInput.split(',').map(item => parseFloat(item.trim()));

  if (numeros.some(isNaN) || isNaN(posInicial) || isNaN(posFinal) || posInicial > posFinal || posInicial < 0 || posFinal >= numeros.length) {
      document.getElementById('resultadoRango').textContent = "Ingresa valores válidos.";
      return;
  }

  var suma = sumarArreglo(numeros, posInicial, posFinal);
  document.getElementById('resultadoRango').textContent = "Suma del rango: " + suma;
}
showSection('CalRango-section'); 

function sumarArreglo(arreglo, posInicial, posFinal) {
  var suma = 0;
  for (var i = posInicial; i <= posFinal; i++) {
      suma += arreglo[i];
  }
  return suma;
}

function encontrarMaximo() {
  var arregloInput = document.getElementById('arregloMax').value;
  var numeros = arregloInput.split(',').map(item => parseFloat(item.trim()));

  if (numeros.some(isNaN)) {
      document.getElementById('resultadoMax').textContent = "Ingresa solo números válidos.";
      return;
  }

  var maximo = encontrarMaximoSinMathMax(numeros);
  var maximoUsandoMathMax = Math.max(...numeros);

  document.getElementById('resultadoMax').textContent = "Máximo (sin Math.max): " + maximo + "\nMáximo (usando Math.max): " + maximoUsandoMathMax;
}
showSection('Max-section')

function encontrarMaximoSinMathMax(arreglo) {
  var maximo = arreglo[0];
  for (var i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
          maximo = arreglo[i];
      }
  }
  return maximo;
}




  