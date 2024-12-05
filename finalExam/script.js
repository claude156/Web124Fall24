// Select DOM elements
const calculateBtn = document.getElementById("calculate-button");
const numInput = document.getElementById("num");
const additionButton = document.getElementById("addition");
const subtractionButton = document.getElementById("subtraction");
const multiplicationButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");

function calculateAddition(num) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} + ${i} = ${num + i}\n`;
  }
  addition.textContent = result;
}

function calculateSubtraction(num) {
  let result = "";
  let i = 1;
  while (i <= 10) {
    result += `${num} - ${i} = ${num - i}\n`;
    i++;
  }
  subtraction.textContent = result;
}

function calculateMultiplication(num) {
  let result = "";
  let i = 1;
  do {
    result += `${num} * ${i} = ${num * i}\n`;
    i++;
  } while (i <= 10);
  multiplication.textContent = result;
}

function calculateDivision(num) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} / ${i} = ${(num / i).toFixed(2)}\n`;
  }
  division.textContent = result;
}

function calculateAll() {
  const num = parseFloat(numInput.value);
  if (isNaN(num)) {
    alert("Please enter a valid number");
    return;
  }
  calculateAddition(num);
  calculateSubtraction(num);
  calculateMultiplication(num);
  calculateDivision(num);
}

calculateBtn.addEventListener("click", calculateAll);
