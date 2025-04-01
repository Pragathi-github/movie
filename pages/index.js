import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";
import { fetchMovies } from "../utils/fetchMovies";
import { fetchBooks } from "../utils/fetchBooks";
import Pagination from "../components/Pagination";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetchMovies(query, page, genre).then(setMovies);
    fetchBooks(query, page).then(setBooks);
  }, [query, page, genre]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar
        setQuery={setQuery}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        setGenre={setGenre}
      />
      <div className="grid-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
