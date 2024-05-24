// Credit to ChatGPT for assistance and code comments.
// userApi.js

const fetch = require("node-fetch");

/**
 * Fetches user data from a placeholder API.
 * @returns {Promise<Object>} The user data.
 * @throws {Error} If the network response is not ok.
 */
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

module.exports = getUser;
