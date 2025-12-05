import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

if (typeof globalThis.fetch === "undefined") {
  globalThis.fetch = fetch;
}

// a)

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching URL data:", error.message);
    throw error;
  }
}

fetchURLData("http://jsonplaceholder.typicode.com/todos/1") // invalid url
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

if (typeof globalThis.fetch === "undefined") {
  globalThis.fetch = fetch;
}
