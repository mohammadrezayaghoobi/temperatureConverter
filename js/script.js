const celsiusInput = document.querySelector("input.celsius");
const fahrenheitInput = document.querySelector("input.fahrenheit");

function handleCelsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit.toFixed(2);
}

function handleFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius.toFixed(2);
}

function ShowFahrenheit(event) {
  const celsiusValue = event.target.value;
  fahrenheitInput.value = handleCelsiusToFahrenheit(celsiusValue);
  isInpusEmpty();
}

function handleShowCelsius(event) {
  const fahrenheitValue = event.target.value;
  celsiusInput.value = handleFahrenheitToCelsius(fahrenheitValue);
  isInpusEmpty();
}

celsiusInput.addEventListener("input", ShowFahrenheit);
fahrenheitInput.addEventListener("input", handleShowCelsius);

function isInpusEmpty() {
  if (celsiusInput.value.length <= 0) {
    fahrenheitInput.value = "";
  }
  if (fahrenheitInput.value.length <= 0) {
    celsiusInput.value = "";
  }
}
