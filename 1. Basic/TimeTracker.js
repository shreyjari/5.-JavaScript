/*
# Things to consider when making a time tracker
1. Controls: Ask user to start, pause, stop & finish day
2. For each New Activity ask user to:
    - Name of activity
    - Estimate to complete (in mins)
    - Select a List of projects
3. Save the response in json.
*/

const prompt = require("prompt-sync")();
let data = {};

const getTime = () => {
  const projectName = prompt("What is the name of the Project?");

  return projectName;
};

const output = getTime();
console.log(output);
