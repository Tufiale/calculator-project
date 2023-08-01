import "./style.scss";

// // Define the variable to hold the current display value
// let currentDisplayValue: string = "0";

// // Function to update the display with the current value
// function updateDisplay() {
//   const displayElement = document.querySelector("#display") as HTMLInputElement;
//   displayElement.innerText = currentDisplayValue;
// }

// // Function to handle button clicks
// function handleButtonClick('event': Event) {
//   const target = event.target as HTMLButtonElement;
//   const buttonValue = target.value || target.innerText;

//   if (buttonValue === "AC") {
//     currentDisplayValue = "0";
//   }
//   // Update the display with the current value
//   updateDisplay();
// }

// TRY AGAIN??

let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".calculator__button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log("clicked");
  });
});
