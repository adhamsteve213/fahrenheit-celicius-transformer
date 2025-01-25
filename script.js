const textbox = document.getElementById("textBox");
const topFarenheit = document.getElementById("topFarenheit");
const Celsius = document.getElementById("Celsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (topFarenheit.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32; 
    result.textContent = temp.toFixed(2) + "°F"; 
  } else if (Celsius.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(2) + "°C"; 
  } else {
    result.textContent = "Select a unit";
  }
}