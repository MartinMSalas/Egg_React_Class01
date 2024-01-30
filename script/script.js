// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensaje");
  
    // Cambia el contenido del elemento <p>
    mensajeElement.textContent = "El enlace entre HTML y JavaScript en el header ha sido exitoso!";
  });
  
  /*
  var fullName = prompt("Hola, ingresa tu nombre");
  var yearOfBirth = prompt("Hola, ingresa tu año de nacimiento");
  var monthOfBirth = prompt("Hola, ingresa tu mes de nacimiento");
  var dayOfBirth = prompt("Hola, ingresa tu dia de nacimiento");
  
  // Create a new Date object for the current date
  var currentDate = new Date();
  
  // Create a new Date object for the date of birth
  // Subtract 1 from the month because JavaScript counts months from 0 to 11
  var birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);
  
  // Calculate the difference in years
  var age = currentDate.getFullYear() - birthDate.getFullYear();
  
  // If the current month and day are before the month and day of birth, subtract 1 from the age
  if (currentDate.getMonth() < birthDate.getMonth() || 
      (currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
  }
  
  console.log(`Hola ${fullName}, tu edad es ${age} años.`);
  alert(`Hola ${fullName}, tu edad es ${age} años.`);
*/

  // Secrets Try
  function tryDiscountPassword() {
    var numberOfTry = 0;
    let foundPassword = false;
    const secretDiscountPassword = "martin";
    while (numberOfTry < 5) {
      var discountPassword = prompt("Ingrese la contraseña para obtener el descuento");
      if (discountPassword === secretDiscountPassword) {
        foundPassword = true;
        break;
      } else {
        numberOfTry++;
      }
    }
    if(!foundPassword) {
      alert("Lo sentimos, no puedes obtener el descuento");
    } else {
    alert("Felicitaciones, obtuviste el descuento!");
    }
  }
  function moneyChange() {
    var amount = prompt("Ingrese la cantidad de pesos a cambiar");
    var rate = prompt("Ingrese el tipo de cambio");
    var result = (amount / rate).toFixed(2);
    alert(`El resultado es ${result} Hermosos y verdes dolares`);
  }
  function wordSize() {
    var word = prompt("Ingrese una palabra");
    var size = word.length;
    alert(`La palabra ${word} tiene ${size} caracteres`);
  }



