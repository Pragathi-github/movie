import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function BookCard({ book }) {
  const { addFavorite } = useContext(FavoritesContext);

  const handleAdd = () => {
    addFavorite({ ...book, type: "book" });
  };

  return (
    <div className="card">
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={handleAdd}>Add to Favorites</button>
    </div>
  );
}
