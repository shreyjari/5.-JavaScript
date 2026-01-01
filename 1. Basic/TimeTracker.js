/*
# Things to consider when making a time tracker
1. When user types anything ask user to Start? 
    If they have active timer ask to Pause/Stop (Finish day)
2. Save the response in a variable.
*/

const prompt = require("prompt-sync")();
let data = {};

const calculateTime = () => {
  const projectName = prompt("Enter Project name? ");
  let startTimer = prompt("Do you want to start tracking time? (y) ");

  if (startTimer == "y") {
    const startTimeStamp = Date.now();
    let stopTimer = prompt("Do you want to stop the timer? (y)");

    if (stopTimer == "y") {
      const stopTimer = Date.now();
      let trackedDuration = Math.round(
        (stopTimer - startTimeStamp) / 1000 / 60,
        1
      );
      return trackedDuration;
    }
  } else {
    console.log("Invalid input.");
  }
};

const output = calculateTime();
console.log("Your session lasted (in minutes): ", output);
