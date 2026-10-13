import { useEffect, useState } from "react";
import type { Movie } from "../types";
import {
  getFavorites,
  toggleFavoriteToLocal,
} from "../services/favoritesService";

const useFavorites = (movie?: Movie) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const isFavorite = movie
    ? favorites.some((fav) => fav.id === movie.id)
    : false;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFavorites(getFavorites());
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  const toggleFavorite = (movie: Movie) => {
    toggleFavoriteToLocal(movie);
    setFavorites(getFavorites());
  };

  return { favorites, isFavorite, loading, toggleFavorite };
};

export default useFavorites;