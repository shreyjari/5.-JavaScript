/*
1. Deposit some money
2. Determine number of lines to bet on
3. Collect bet amount
4. Spin the wheel
5. Check if the user won
6. Give the user their winnings
7. Play again
*/

// Package to import
const prompt = require("prompt-sync")();

// Global variables
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8    
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

// 1. Deposit money
const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};


// 2. Determine the number of lines to bet on
const getNumberofLines = () => {
    while (true) {
    const Lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberofLines = parseFloat(Lines);
    
    if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) {
        console.log("Invalid number of lines, try again.");
        } else {
            return numberofLines;
        }
    }
};

// 3. Collect the bet amount
const getBet = (balance, lines) => {
    while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);
    
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines) ) {
        console.log("Invalid bet amount, try again.");
        } else {
            return numberBet;
        }
    }

}

// 4. Spin the wheel
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    console.log("COLS:", COLS);
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbolsPool = [...symbols];
        for (let k = 0; k < ROWS; k++) {
            const randomIndex = Math.floor(Math.random() * reelSymbolsPool.length);
            const selectedSymbol =  reelSymbolsPool[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbolsPool.splice(randomIndex, 1);

        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()){
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }

    return winnings;
};

const printBalance = (balance) => {
    let UpdatedBalance = (balance - (Finalbet * 3) );
    UpdatedBalance += winnings;
    return UpdatedBalance;
};

const SufficientBalance = (balance, bet, lines) => {
    let ExitGame = false;
    while (true) {
        if (balance == 0 || balance < (bet * lines)) {
            console.log("You have insufficient balance to continue playing. Kindly deposit more money or exit the game.");
            deposit();
        }
        else if (balance > 0) {
            const PlayAgain = prompt("Do you want to play again? (y/n): ");
            if (PlayAgain.toLowerCase() == 'y') {
               getBet(balance, lines);
               spin();
               transpose(reels);
               printRows(returnedRows);
               console.table({"Bet Amount is": '$' + (Finalbet * 3),"Remaining balance is": '$' + (balance - (Finalbet * 3) )});
               getWinnings(returnedRows, Finalbet, BetLines);
               printBalance(balance);
               console.log("You won, $" + winnings.toString());
               SufficientBalance(NewBalance, Finalbet, BetLines);
               console.log("Your new Balance is: " + NewBalance.toString());

            } else {
                console.log("Thank you for playing!");
                ExitGame = true;
                return ExitGame;
            }
        }   
        break;
    }
}

// Execution of the game

let balance = deposit();
const BetLines = getNumberofLines();
const Finalbet = getBet(balance, BetLines);
const reels = spin();
const returnedRows = transpose(reels);

console.table({"Bet Amount is": '$' + (Finalbet * 3),"Remaining balance is": '$' + (balance - (Finalbet * 3) )});

printRows(returnedRows);
const winnings = getWinnings(returnedRows, Finalbet, BetLines);
let NewBalance = printBalance(balance);
console.log("Your new Balance is: " + NewBalance.toString());

const CheckBalance = SufficientBalance(NewBalance, Finalbet, BetLines);

// 2 last steps to be added:
// Give the user their winnings - subtract the bet amount from initial balance & add winnings - done
// Play again - Ask the user if they want to continue playing.





