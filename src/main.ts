import "./style.scss";

let currentDisplayValue: string = "0";
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");

function updateDisplay() {
  const displayElement = document.getElementById("display") as HTMLInputElement;
  displayElement.value = currentDisplayValue;
}

function handleButtonClick(event: Event) {
  const target = event.target as HTMLButtonElement;
  const buttonValue = target.value || target.innerText;

  if (buttonValue === "AC") {
    currentDisplayValue = "0";
  } else if (buttonValue === "=") {
    currentDisplayValue = currentDisplayValue.toString();
  } else {
    currentDisplayValue += buttonValue;
  }

  updateDisplay();
}

function setupButtonListeners() {
  const buttons = document.querySelectorAll(".calculator__button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}

document.addEventListener("DOMContentLoaded", setupButtonListeners);
