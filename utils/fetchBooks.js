export async function fetchBooks(query, page = 1) {
  let url;
  if (query) {
    url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query
    )}&page=${page}`;
  } else {
    url = `https://openlibrary.org/search.json?q=fiction&page=${page}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      // Get additional details from the response text
      const errorDetails = await res.text();
      throw new Error(
        `Network response was not ok: ${res.status} ${res.statusText}. Details: ${errorDetails}`
      );
    }
    const data = await res.json();

    // Map the API data to our required structure
    return (
      data.docs.map((book) => ({
        id: book.key,
        title: book.title,
        author: book.author_name
          ? book.author_name.join(", ")
          : "Unknown Author",
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "",
        description: book.first_sentence
          ? Array.isArray(book.first_sentence)
            ? book.first_sentence.join(" ")
            : book.first_sentence
          : "",
      })) || []
    );
  } catch (error) {
    console.error("fetchBooks error:", error);
    return [];
  }
}
