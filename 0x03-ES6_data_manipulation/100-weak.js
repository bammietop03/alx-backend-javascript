// Create a WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Define the queryAPI function
function queryAPI(endpoint) {
  // Get the current count of queries for the endpoint from the weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the weakMap
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    // If it is, throw an error
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
