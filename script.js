const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");

const equalsBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");

const previousOperandOutput = document.querySelector("[data-previous-operand]");
const currentOperandOutput = document.querySelector("[data-current-operand]");

var calState = {
  previousOperandOutput: previousOperandOutput,
  currentOperandOutput: currentOperandOutput,
};

var currentOperand = "";
var previousOperand = "";
var operation = undefined;

const clear = () => {
  (currentOperand = ""), (previousOperand = ""), (operation = undefined);
};

const appendNumber = (number) => {
  //   currentOperand = number;
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
};

const chooseOperation = (operation) => {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = operation;
  previousOperand = currentOperand;
  currentOperand = "";
};

const compute = () => {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
};

const updateDisplay = () => {
  currentOperandOutput.innerText = currentOperand;
  previousOperandOutput.innerText = previousOperand;
};

//===============

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.innerText);
    updateDisplay();
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    chooseOperation(btn.innerText);
    updateDisplay();
  });
});

equalsBtn.addEventListener("click", (btn) => {
  compute();
  updateDisplay();
});
