// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
// Function to read a matrix
function readMatrix(rows, cols, name) {
    let matrix = [];

    console.log(`\nEnter elements for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        while (true) {
            let row = readlineSync.question(`Enter row ${i + 1}: `);
            let values = row.split(" ").map(Number);

            if (values.length === cols && !values.some(isNaN)) {
                matrix.push(values);
                break;
            } else {
                console.log(`Please enter exactly ${cols} numbers separated by spaces.`);
            }
        }
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

//Function for Transpose of a matrix
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];

    for (let j = 0; j < cols; j++) {
        transpose[j] = [];

        for (let i = 0; i < rows; i++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    return transpose;
}

//Function for Addition of matrix
function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];

        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

//Function for multipication of matrix
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Main Function
function main() {

    //Function for Transpose of a matrix
    
    console.log("===== PART A: TRANSPOSE MATRIX =====");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols, "A");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrix));


    //Function for Addition of matrix
    console.log("\n===== PART B: MATRIX ADDITION =====");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix1 = readMatrix(rows, cols, "A");
    let matrix2 = readMatrix(rows, cols, "B");

    console.log("\nResult of Addition:");
    displayMatrix(addMatrices(matrix1, matrix2));

    // Function for multipication of matrix
    console.log("\n===== PART C: MATRIX MULTIPLICATION =====");

    let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
    let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

    let A = readMatrix(rowsA, colsA, "A");

    let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
    let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (colsA !== rowsB) {
        console.log("\nError: Matrix multiplication is not possible.");
        console.log("Columns of Matrix A must equal rows of Matrix B.");
        return;
    }

    let B = readMatrix(rowsB, colsB, "B");

    console.log("\nResult of Multiplication:");
    displayMatrix(multiplyMatrices(A, B));
}
// Run the program
main();