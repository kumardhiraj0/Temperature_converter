document.getElementById("convert").addEventListener("click",function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;
    
    if (fromUnit === toUnit) {
      result = inputTemp;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      result = inputTemp + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = (inputTemp - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      result = ((inputTemp - 32) * 5/9) + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      result = inputTemp - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      result = ((inputTemp - 273.15) * 9/5) + 32;
    }
    
    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} ${toUnit}`;
  })
