let degreevalue = document.querySelector('.tempform input[type="text"]');
let typeselect = document.getElementById('inp1');
let result = document.querySelector('.res input[type="text"]');
let convertButton = document.querySelector('.convert button');


function convertTemperature() {
  let degree = parseFloat(degreevalue.value);
  let selectedType = parseInt(typeselect.value);

  if (isNaN(degree)) {
    result.value = "Invalid input";
    return;
  }
  if (selectedType === 2) {
    let celsius = (degree - 32) * 5/9;
    result.value = celsius.toFixed(2) + "°C";
  } else if (selectedType === 3) {
    let fahrenheit = (degree * 9/5) + 32;
    result.value = fahrenheit.toFixed(2) + "°F";
  }
}

convertButton.addEventListener('click', convertTemperature);
