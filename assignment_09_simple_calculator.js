// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
// =============================================================================
const readline = require("readline-sync");

//Function for addition
function addition(a, b) {
    return a + b;
}
//Function for subtraction
function subtraction(a, b) {
    return a - b;
}
//Function fir multiplication
function multiplication(a, b) {
    return a * b;
}
//Function for division
function division(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }
    return a / b;
}
//Function for modulus
function modulus(a, b) {
    if (b === 0) {
        console.log("Error: Cannot perform modulus by zero.");
        return null;
    }
    return a % b;
}
//Function for exponentiation
function exponentiation(a, b) {
    return a ** b;
}

// Display Menu

function showMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// Main Program

let choice;

do {
    showMenu();

    choice = Number(readline.question("Select an operation (1-7): "));

    if (choice >= 1 && choice <= 6) {
        let num1 = Number(readline.question("Enter first number : "));
        let num2 = Number(readline.question("Enter second number: "));
        let result;

        switch (choice) {
            case 1:
                result = addition(num1, num2);
                console.log(`Result: ${num1} + ${num2} = ${result.toFixed(2)}`);
                break;

            case 2:
                result = subtraction(num1, num2);
                console.log(`Result: ${num1} - ${num2} = ${result.toFixed(2)}`);
                break;

            case 3:
                result = multiplication(num1, num2);
                console.log(`Result: ${num1} * ${num2} = ${result.toFixed(2)}`);
                break;

            case 4:
                result = division(num1, num2);
                if (result !== null) {
                    console.log(`Result: ${num1} / ${num2} = ${result.toFixed(2)}`);
                }
                break;

            case 5:
                result = modulus(num1, num2);
                if (result !== null) {
                    console.log(`Result: ${num1} % ${num2} = ${result.toFixed(2)}`);
                }
                break;

            case 6:
                result = exponentiation(num1, num2);
                console.log(`Result: ${num1} ** ${num2} = ${result.toFixed(2)}`);
                break;
        }

    } else if (choice === 7) {
        console.log("Goodbye!");
    } else {
        console.log("Invalid choice. Please select a number between 1 and 7.");
    }

} while (choice !== 7);

