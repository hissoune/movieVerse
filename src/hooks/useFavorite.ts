import { useEffect, useState } from "react";
import type { Movie } from "../types";
import {
  getFavorites,
  toggleFavoriteToLocal,
} from "../services/favoritesService";

const FAVORITES_CHANGED = "favorites-changed";

const useFavorites = (movie?: Movie) => {
  const [favorites, setFavorites] = useState<Movie[]>(() => getFavorites());

  useEffect(() => {
    const syncFavorites = () => {
      setFavorites(getFavorites());
    };

    window.addEventListener(FAVORITES_CHANGED, syncFavorites);

    return () => {
      window.removeEventListener(FAVORITES_CHANGED, syncFavorites);
    };
  }, []);

  const isFavorite = movie
    ? favorites.some((fav) => fav.id === movie.id)
    : false;

  const toggleFavorite = (movie: Movie) => {
    toggleFavoriteToLocal(movie);

    setFavorites(getFavorites());

    window.dispatchEvent(new Event(FAVORITES_CHANGED));
  };

  return { favorites, isFavorite, toggleFavorite };
};

export default useFavorites;
