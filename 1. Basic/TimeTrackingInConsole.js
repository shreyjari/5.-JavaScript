/*
Business Case: I want to develop a Time tracking automation that runs in the console. 
The script would generate a json file with the time entries for the day.
Once the script is instructed to close the day, it will automatically create/update FM Timesheet.
Then it will check if the new timesheet has been updated using PTAG FM Timesheet API.

[ ] Install all necessary dependencies
[ ] Section 1: Collecting Time 
    [ ] Top level would be global variables 
    [ ] Check if the user is inquiring about a pending Time entry?
    [ ] Otherwise Basic Timesheet information setup 
    [ ] Username & ID
    [ ] Project name & ID
    [ ] Job name & ID
    [ ] Start Date Time stamp: extract Date & extract Time
    [ ] Write to the json file 
    [ ] Run Section 2. 
[ ] Section 2: Post Time entries to PTAG FM
    [ ] Using browser automation, open https://go.ptaginc.com/login
    [ ] Login using provided credentials
    [ ] Check if Timesheet exists for the current time period using API
    [ ] IF NOT Navigate to dashboard
    [ ] Create a new Timesheet
    [ ] Enter the time from JSON file
    [ ] Save the Timesheet 
    [ ] Check the Timesheet api for update
    [ ] Log the output
    [ ] Update the json file based on the date & status to complete 
[ ] Section 3: Schedule Automation using Windows Task Scheduler so that the sript runs at set time or triggers. 
*/

require("dotenv").config();
const apiKeys = JSON.parse(process.env.API_KEYS);
if (!apiKeys) {
  console.log("API Key not set in .env file");
  process.exit(1);
} else {
  console.log("Here's the API KEY: ", apiKeys.dev2);
}

const prompt = require("prompt-sync")();

const url = {
  dev2: "dev2",
  dev3: "dev3",
  staging: "ptagstaging",
  prod: "go",
};

const path =
  "C:UsersShreyJariwalaOneDrive - PTAG Inc (1)DesktopLearning/1. JavaScript/5.-JavaScriptTimeEntries.json";

const fillTime = () => {
  /* 
  Check if Time entry is New/In-progress:
  New: update the json file by adding a new row.
  In-Progress: look for the latest record & make update
  */
  const homeUrl = "https://dev2.ptaginc.com/dashboards/timesheets";
  const checkPendingTimeEntry = prompt(
    "Is it a In-progress time entry? (y/n) ",
  );
  const projectName = prompt("What is the name of your project? ");
  const projectId = prompt("What is the PTAG FM Project ID? ");
  const jobName = prompt("What is the name of your job? ");
  const jobId = prompt("What is your Job ID? ");
  const personId = 1;
  const stratTimer = prompt("Do you want to start recording? (y/n)");

  let startTimeStamp;
  let endTimeStamp;

  // What I want to do is create a template json object to store the startTimeStamp, endTimeStamp & duration
  const timeEntryJson = {
    startTimeStamp: null,
    endTimeStamp: null,
    duration: null,
  };

  let currentEntry = { ...timeEntryJson };

  if (stratTimer.toLowerCase() == "y" || stratTimer.toLowerCase() == "yes") {
    currentEntry.startTimeStamp = parseFloat(Date.now());
    console.log("Start time is: " + currentEntry.startTimeStamp);
  } else {
    console.log("User does not want to record time.");
  }
  const endTimer = prompt("Do you want to end recording? (y/n)");
  if (endTimer.toLowerCase() == "y" || endTimer.toLowerCase() == "yes") {
    currentEntry.endTimeStamp = parseInt(Date.now());
    console.log("End time is: " + currentEntry.endTimeStamp);

    currentEntry.duration =
      (currentEntry.endTimeStamp - currentEntry.startTimeStamp) / 1000;
    console.log("The session lasted for: ", currentEntry.duration);
    console.log("Today's session date: ", Date(currentEntry.endTimeStamp));

    return currentEntry;
  } else {
    console.log("User does not want to stop recording.");
  }
};

const test = fillTime();
console.log(test);
