// setup object for ordertype
const orderType = {
  Delivery: "delivery",
  Carryout: "Carryout",
};

const API_URL = "https://order.dominos.ca/power";

// --------------- Code logic starts ---------------

// Based on the output of the api it looks like the system by default returns output based on the distance (closest store earliest).
// Get the nearest store based on the address information
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

getStoreNearAddress(
  orderType.Delivery,
  "Toronto, Ontario, M9A4X8",
  "24 Mabelle Avenue"
).then((json) => {
  // Output for the closest store
  console.log("# Nearest Store: ", json.Stores[0]);
});

// Get the Store information based on the StoreID
async function getStoreInformation(storeID) {
  const response = await fetch(`${API_URL}/store/${storeID}/profile`);
  const json = await response.json();
  return json;
}

getStoreInformation("10335").then((json) => {
  console.log("# Store Information: ", json);
});

// Get the menu information from the store
async function getStoreMenu(storeID) {
  const response = await fetch(
    `${API_URL}/store/${storeID}/menu?lang=en&structured=true`
  );
  const json = await response.json();
  return json;
}

getStoreMenu("10335").then((json) => {
  console.log("# Menu information: ", json);
});

// Get the coupon information
async function getCouponInformation(couponID) {
  const response =
    await fetch(`${API_URL}/store/10335/coupon/${couponID}?lang=en
`);
  const json = await response.json();
  return json;
}

getCouponInformation("8375").then((json) => {
  console.log("# Coupon information: ", json);
});
