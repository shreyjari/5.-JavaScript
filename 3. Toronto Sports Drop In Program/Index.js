/*
This script will help me find out all the nearest locations where I can go for:
1. Ice Skating
2. Select a Sport
3. Drop In program based on the current time

# Setup user profile / preferences:
1. Ask the user their Name, Birth date
2. Sports/Activity preference
3. Availability (Preferred times as well as a option to select Current)

# The script should be able to get the following information:
- Find the location
	- [ ] Choose the location
	- [ ] Shows the schedule of available activities today & going forward
	- [ ] choose a activity
	- [ ] Give directions to the activity
	- [ ] Give the ETA if I left right now

*/

// Required dependencies

// Global variables at the top of the script
const baseUrl = "https://www.toronto.ca/data/parks/live/skate_allupdates.json";

async function getAllLocations() {
  const response = await fetch(
    "https://www.toronto.ca/data/parks/live/skate_allupdates.json"
  );
  // response returns all ids in text format convert & clean-up json to be used later
  const jsonResponse = response.json();
  return response.json();
}

getAllLocations().then((json) => {
  console.log(json);
});
