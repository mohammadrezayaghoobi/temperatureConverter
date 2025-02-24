const celsiusInput = document.querySelector("input.celsius");
const fahrenheitInput = document.querySelector("input.fahrenheit");
const showDegInput = document.querySelector("#showDeg");
const showDeleteInput = document.querySelector("#showBtnDelete");
const clearBtn = document.querySelector("#clearBtn");

let isShowDeg = showDegInput.checked;

showDegInput.addEventListener("input", (event) => {
  const el = event.target.checked;
  isShowDeg = el;
});

showDeleteInput.addEventListener("input", (event) => {
  const el = event.target.checked;
  if (el) {
    clearBtn.classList.add("show");
  } else {
    clearBtn.classList.remove("show");
  }
});

clearBtn.addEventListener("click", () => {
  fahrenheitInput.value = "";
  celsiusInput.value = "";
});

function handleCelsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit.toFixed(2);
}

function handleFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius.toFixed(2);
}

function ShowFahrenheit(event) {
  const celsiusValue = event.target.value?.split("°").at(0);
  fahrenheitInput.value =
    handleCelsiusToFahrenheit(celsiusValue) + (isShowDeg ? "°F" : "");
  isInpusEmpty();
}

function handleShowCelsius(event) {
  const fahrenheitValue = event.target.value?.split("°").at(0);
  celsiusInput.value =
    handleFahrenheitToCelsius(fahrenheitValue) + (isShowDeg ? "°C" : "");
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
