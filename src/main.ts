import "./style.scss";

// Define the variable to hold the current display value
let currentDisplayValue: string = "0";
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");

// Function to update the display with the current value
function updateDisplay() {
  const displayElement = document.getElementById("display") as HTMLInputElement;
  displayElement.value = currentDisplayValue;
}

// Function to handle button clicks
function handleButtonClick(event: Event) {
  const target = event.target as HTMLButtonElement;
  const buttonValue = target.value || target.innerText;

  if (buttonValue === "AC") {
    currentDisplayValue = "0";
  } else if (buttonValue === "=") {
    // Evaluate the expression and update the display
    currentDisplayValue = currentDisplayValue.toString();
  } else {
    // clicked button value to the current display value
    currentDisplayValue += buttonValue;
  }
  // Update the display with the current value
  updateDisplay();
}
// Function to add click event listeners to all buttons
function setupButtonListeners() {
  const buttons = document.querySelectorAll(".calculator__button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}

// Call the setupButtonListeners function after the DOM has loaded
document.addEventListener("DOMContentLoaded", setupButtonListeners);
