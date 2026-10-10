async function retryApiCall(apiFn, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await apiFn();
      return response;
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }

      console.log(`Attempt ${attempt} failed. Retrying...`);
    }
  }
}

// Example usage
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

retryApiCall(fetchUsers, 3)
  .then((data) => console.log(data))
  .catch((error) => console.error("All retries failed:", error));
