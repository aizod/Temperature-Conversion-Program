const inputBox = document.getElementById(`inputBox`);
const toFahrenheit = document.getElementById(`toFahrenheit`);
const toCelsius = document.getElementById(`toCelsius`);
const convertBtn = document.getElementById(`convertBtn`);
const result = document.getElementById(`result`);
let temp;

function convert() {
    
    if (toFahrenheit.checked) {
        temp = Number(inputBox.value);
        temp = (temp * 9/5) +32;
        result.textContent = `${temp.toFixed(1)} °F`;
        
    }
    else if (toCelsius.checked) {
        temp = Number(inputBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = `${temp.toFixed(1)} °C`;
    }
    else {
        result.innerHTML = `Please select one conversion option.`;
    }
}