/*
    1. Ask the user for input
    2. Convert the value to number
    3. Ask for operation: +, -, *, /
    4. Perform the calculation
    5. Print the result
    6. Save the output as output1
    7. Ask the user if they want to use the output
    8. If yes, use output1 as input
    7. If no, ask if they want to exit or continue
    9. If yes, ask for input & repeat from step 2
    10. If no, exit the program
*/

const prompt = require("prompt-sync")()

// Global variables
const operations = ["+", "-", "*", "/"]

// 1 Ask the user for input
const calculator = () => {
    let input1 = prompt("Welcome to Terminal Calc., Enter your value to Start -> ")
    // If the output is not number ask again.
    if (!isNaN(input1)) {
        while (true) {
            let operator = prompt("What operation would you like to perform? (+,-,/,*) ")
            const hasMatch = operator.some(item => operations.includes(item))
            break
        }
        
        
    } else if (isNaN(input1)) {
        while (true) {
            input1 = prompt("Enter a valid number value.")
            isNaN(input1)
            let note = prompt("Do you want to continue? (y/n) ")
        }
              
        return input1
    }
}

const output = calculator()
console.log("The output is: ", output);



