"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "7f95e777";
const API_KEY = "91cde3ab18b956f09ed5b395b49b4099";
const TYPE = "public";

export const fetchData = async function (queries, successCallback) {
  const query = queries
    ?.map(q => q.join("="))
    .join("&");

  const url = `${ACCESS_POINT}?type=${TYPE}&app_id=${APP_ID}&app_key=${API_KEY}${query ? `&${query}` : ""}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Edamam-Account-User": "hirva-vora"
      }
    });

    if (!response.ok) {
      console.error("Edamam API error:", response.status);
      return;
    }

    const data = await response.json();
    successCallback(data);

  } catch (error) {
    console.error("Fetch failed:", error);
  }
};


