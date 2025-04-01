import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites</h1>
      <div className="grid-container">
        {favorites.map((item) =>
          item.type === "movie" ? (
            <MovieCard key={item.id} movie={item} />
          ) : (
            <BookCard key={item.id} book={item} />
          )
        )}
      </div>
    </div>
  );
}
