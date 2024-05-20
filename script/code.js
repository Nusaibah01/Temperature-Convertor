
        // function convertTemperature() {
        //     let kelvinInput = document.getElementById("tempKelvin").value;
        //     let celsiusInput = document.getElementById("tempCelsius").value;
        //     let fahrenheitInput = document.getElementById("tempFahrenheit").value;

        //     // Convert Kelvin to Celsius and Fahrenheit
        //     if (kelvinInput !== "") {
        //         let kelvin = parseFloat(kelvinInput);
        //         document.getElementById("tempCelsius").value = (kelvin - 273.15).toFixed(2);
        //         document.getElementById("tempFahrenheit").value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
        //     }

        //     // Convert Celsius to Kelvin and Fahrenheit
        //     if (celsiusInput !== "") {
        //         let celsius = parseFloat(celsiusInput);
        //         document.getElementById("tempKelvin").value = (celsius + 273.15).toFixed(2);
        //         document.getElementById("tempFahrenheit").value = (celsius * 9/5 + 32).toFixed(2);
        //     }

        //     // Convert Fahrenheit to Kelvin and Celsius
        //     if (fahrenheitInput !== "") {
        //         let fahrenheit = parseFloat(fahrenheitInput);
        //         document.getElementById("tempKelvin").value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
        //         document.getElementById("tempCelsius").value = ((fahrenheit - 32) * 5/9).toFixed(2);
        //     }
        const celsiusInput = document.querySelector('#celsius > input');
        const fahrenheitInput = document.querySelector('#fahrenheit > input');
        const kelvinInput = document.querySelector('#kelvin > input');
        
        const roundToTwoDP = (num) => {
          return num.toFixed(2);
        };
        
        
        const celsiusToFaAndKe = () => {
          const celsiusTemp = parseFloat(celsiusInput.value);
          const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
          const kelvinTemp = celsiusTemp + 273.15;
        
          fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
          kelvinInput.value = roundToTwoDP(kelvinTemp);
        };
        
        
        const fahrenheitToCeAndKe = () => {
          const fahrenheitTemp = parseFloat(fahrenheitInput.value);
          const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
          const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);
        
          celsiusInput.value = roundToTwoDP(celsiusTemp);
          kelvinInput.value = roundToTwoDP(kelvinTemp);
        };
        
        const kelvinToCeAndFa = () => {
          const kelvinTemp = parseFloat(kelvinInput.value);
          const celsiusTemp = kelvinTemp - 273;
          const fahrenheitTemp =  1.8 * (kelvinTemp - 273) + 32;
        
          celsiusInput.value = roundToTwoDP(celsiusTemp);
          fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
        };
        
        
        const main = () => {
          celsiusInput.addEventListener('input', celsiusToFaAndKe);
          fahrenheitInput.addEventListener('input', fahrenheitToCeAndKe);
          kelvinInput.addEventListener('input', kelvinToCeAndFa);
        };
        
        main();