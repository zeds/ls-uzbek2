// Get references to the calculator display and keys
const display = document.querySelector(".calculator-display");
const keys = document.querySelector(".calculator-keys");

// Initialize calculator state
let currentInput = "0"; // Current input value
let previousInput = ""; // Previous input value
let operator = null; // Current operator
let shouldResetDisplay = false; // Flag to reset display on next input

// Function to update the display
function updateDisplay() {
	display.textContent = currentInput;
}

// Function to handle number button clicks
function handleNumberClick(number) {
	if (currentInput === "0" || shouldResetDisplay) {
		currentInput = number;
		shouldResetDisplay = false;
	} else {
		currentInput += number;
	}
	updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(op) {
	if (operator && !shouldResetDisplay) {
		// Perform calculation if an operator already exists
		previousInput = currentInput;
		currentInput = calculate(previousInput, currentInput, operator);
		updateDisplay();
	}
	operator = op;
	shouldResetDisplay = true;
}

// Function to perform calculations
function calculate(a, b, op) {
	a = parseFloat(a);
	b = parseFloat(b);
	switch (op) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "×":
			return a * b;
		case "÷":
			return a / b;
		default:
			return b;
	}
}

// Event listener for button clicks
keys.addEventListener("click", (e) => {
	console.log("e=", e);
	if (e.target.matches("button")) {
		const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;

		if (!action) {
			// Number button clicked
			handleNumberClick(keyContent);
		} else if (action === "operator") {
			// Operator button clicked
			handleOperatorClick(keyContent);
		} else if (action === "clear") {
			// Clear button clicked
			currentInput = "0";
			operator = null;
			shouldResetDisplay = false;
			updateDisplay();
		} else if (action === "equals") {
			// Equals button clicked
			if (operator) {
				currentInput = calculate(previousInput, currentInput, operator);
				updateDisplay();
				operator = null;
			}
		}
	}
});

// Initialize display
updateDisplay();
