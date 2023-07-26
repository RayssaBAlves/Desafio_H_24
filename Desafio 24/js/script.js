function celsius_to_fahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsius_to_kelvin(celsius) {
    return celsius + 273.15;
}

function updateTemperatures() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitSpan = document.getElementById('fahrenheit');
    const kelvinSpan = document.getElementById('kelvin');

    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsius_to_fahrenheit(celsiusValue).toFixed(2);
        const kelvinValue = celsius_to_kelvin(celsiusValue).toFixed(2);

        fahrenheitSpan.textContent = `${fahrenheitValue} Fahrenheit`;
        kelvinSpan.textContent = `${kelvinValue} Kelvin`;
    } else {
        fahrenheitSpan.textContent = '-';
        kelvinSpan.textContent = '-';
    }
}

const celsiusInput = document.getElementById('celsius');
celsiusInput.addEventListener('input', updateTemperatures);
