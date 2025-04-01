async function fetchMovies(query) {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&page=1`
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null; // Return null so the app doesn't crash
  }
}

// Example usage:
fetchMovies("harry potter").then((data) => {
  if (data) {
    console.log("Movies fetched:", data);
  } else {
    console.log("Failed to fetch movies.");
  }
});
