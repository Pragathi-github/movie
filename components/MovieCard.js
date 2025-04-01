import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
  const { addFavorite } = useContext(FavoritesContext);

  const handleAdd = () => {
    addFavorite({ ...movie, type: "movie" });
  };

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <button onClick={handleAdd}>Add to Favorites</button>
    </div>
  );
}
