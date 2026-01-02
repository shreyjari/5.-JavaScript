// latest version of node has fetch built-in

// setup object for ordertype
const orderType = {
  Delivery: "delivery",
  Carryout: "Carryout",
};

const API_URL = "https://order.dominos.ca/power";

async function getStoreNearAddress(
  orderType,
  cityStateZip,
  streetAddress,
  latitude,
  longitude
) {
  const response = await fetch(
    `${API_URL}/store-locator?type=${orderType}&c=${cityStateZip}&s=${streetAddress}&wasChangedByUser=true&isOrderStarted=false&ignoreWarnings=true`
  );
  const json = await response.json();
  return json;
}

// Based on the output of the api it looks like the system by default returns output based on the distance (closest store earliest).
getStoreNearAddress(
  orderType.Delivery,
  "Toronto, Ontario, M9A4X8",
  "24 Mabelle Avenue"
).then((json) => {
  // Output for the closest store
  console.log(json.Stores[0]);
});

async function getStoreInformation(storeID) {
  const response = await fetch(`${API_URL}/store/${storeID}/profile`);
  const json = await response.json();
  return json;
}

getStoreInformation("10335").then((json) => {
  console.log(json);
});
