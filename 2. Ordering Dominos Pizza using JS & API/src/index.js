const { json } = require("node:stream/consumers");

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

// All Available coupons
async function getAllCoupons(storeID) {
  const getMenu = await getStoreMenu(storeID);
  return getMenu.Coupons;
}

getAllCoupons("10335").then((json) => {
  console.log("# All available coupons: ", json);
});

// Get the coupon information
async function getCouponInformation(storeID, couponID) {
  const response =
    await fetch(`${API_URL}/store/${storeID}/coupon/${couponID}?lang=en
`);
  const json = await response.json();
  return json;
}

getCouponInformation("10335", "8375").then((json) => {
  console.log("# Coupon information: ", json);
});

// Validate the order
async function validateOrder(order) {
  const response = await fetch(
    "https://order.dominos.ca/power/validate-order",
    {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(order),
      method: "POST",
    }
  );
  return response.json();
}

const order = {
  Order: {
    Address: {
      City: "ETOBICOKE",
      Region: "ON",
      Coordinates: { Latitude: 43.59603, Longitude: -79.52566 },
      PostalCode: "M8W1N1",
      StoreID: "10547",
    },
    Coupons: [],
    CustomerID: "",
    Email: "",
    Extension: "",
    FirstName: "",
    LastName: "",
    LanguageCode: "en",
    OrderChannel: "OLO",
    OrderID: "",
    OrderMethod: "Web",
    OrderTaker: null,
    Payments: [],
    Phone: "",
    PhonePrefix: "",
    Products: [{ Code: "B2PCLAVA", Qty: 1, ID: 1, isNew: true, Options: {} }],
    ServiceMethod: "Carryout",
    SourceOrganizationURI: "order.dominos.com",
    StoreID: "10547",
    Tags: {},
    Version: "1.0",
    NoCombine: true,
    Partners: {},
    HotspotsLite: false,
    OrderInfoCollection: [],
  },
};

validateOrder(order).then((json) => {
  console.log("Validate order result ", json);
});

// Price the order
async function getOrderPrice(order) {
  const response = await fetch("https://order.dominos.ca/power/price-order", {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(order),
    method: "POST",
  });
  return response.json();
}

getOrderPrice(order).then((json) => {
  console.log("# Order Price: ", json);
});
