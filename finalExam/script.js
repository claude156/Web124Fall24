// Select DOM elements
const calculateButton = document.getElementById("calculate-button");
const Input = document.getElementById("numbers");
const additionButton = document.getElementById("addition");
const subtractionButton = document.getElementById("subtraction");
const multiplicationButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");

function calculateAddition(numbers) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${numbers} + ${i} = ${numbers + i}\n`;
  }
  addition.textContent = result;
}

function calculateSubtraction(numbers) {
  let result = "";
  let i = 1;
  while (i <= 10) {
    result += `${numbers} - ${i} = ${numbers - i}\n`;
    i++;
  }
  subtraction.textContent = result;
}

function calculateMultiplication(numbers) {
  let result = "";
  let i = 1;
  do {
    result += `${numbers} * ${i} = ${numbers * i}\n`;
    i++;
  } while (i <= 10);
  multiplication.textContent = result;
}

function calculateDivision(numbers) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${numbers} / ${i} = ${(numbers / i).toFixed(2)}\n`;
  }
  division.textContent = result;
}

function calculateAll() {
  const numbers = parseFloat(Input.value);
  if (isNaN(numbers)) {
    alert("Please enter a valid number");
    return;
  }
  calculateAddition(numbers);
  calculateSubtraction(numbers);
  calculateMultiplication(numbers);
  calculateDivision(numbers);
}

calculateButton.addEventListener("click", calculateAll);
