
        function convertTemperature() {
            let kelvinInput = document.getElementById("tempKelvin").value;
            let celsiusInput = document.getElementById("tempCelsius").value;
            let fahrenheitInput = document.getElementById("tempFahrenheit").value;

            // Convert Kelvin to Celsius and Fahrenheit
            if (kelvinInput !== "") {
                let kelvin = parseFloat(kelvinInput);
                document.getElementById("tempCelsius").value = (kelvin - 273.15).toFixed(2);
                document.getElementById("tempFahrenheit").value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
            }

            // Convert Celsius to Kelvin and Fahrenheit
            if (celsiusInput !== "") {
                let celsius = parseFloat(celsiusInput);
                document.getElementById("tempKelvin").value = (celsius + 273.15).toFixed(2);
                document.getElementById("tempFahrenheit").value = (celsius * 9/5 + 32).toFixed(2);
            }

            // Convert Fahrenheit to Kelvin and Celsius
            if (fahrenheitInput !== "") {
                let fahrenheit = parseFloat(fahrenheitInput);
                document.getElementById("tempKelvin").value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
                document.getElementById("tempCelsius").value = ((fahrenheit - 32) * 5/9).toFixed(2);
            }
}