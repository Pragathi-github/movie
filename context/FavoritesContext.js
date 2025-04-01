import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const addFavorite = (item) => {
    // Prevent duplicate favorites (optional)
    const exists = favorites.find(
      (fav) => fav.id === item.id && fav.type === item.type
    );
    if (exists) return;

    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const value = { favorites, addFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
