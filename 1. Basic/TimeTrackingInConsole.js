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

const prompt = require("prompt-sync")();

const url = {
  dev2: "dev2",
  dev3: "dev3",
  staging: "ptagstaging",
  prod: "go",
};

const homeUrl = "https://dev2.ptaginc.com/dashboards/timesheets";
const checkPendingTimeEntry = prompt("Is it a In-progress time entry? (y/n) ");
const projectName = prompt("What is the name of your project? ");
const projectId = prompt("What is the PTAG FM Project ID? ");
const jobName = prompt("What is the name of your job? ");
const jobId = prompt("What is your Job ID? ");
const personId = 1;
const apikey = "6b246f05d43baffef7bf1c50";
const path =
  "C:UsersShreyJariwalaOneDrive - PTAG Inc (1)DesktopLearning\1. JavaScript\5.-JavaScriptTimeEntries.json";
const jsonFilePath = path.replace(/\\/ / g, "\\");

function fillTime() {
  /* 
    Check if Time entry is New/In-progress:
    New: update the json file by adding a new row.
    In-Progress: look for the latest record & make update
    */
}
