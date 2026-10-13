import { useEffect, useState } from "react";
import type { Movie } from "../types";
import {
  getFavorites,
  toggleFavoriteToLocal,
} from "../services/favoritesService";

const useFavorites = (movie?: Movie) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const isFavorite = movie
    ? favorites.some((fav) => fav.id === movie.id)
    : false;

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggleFavorite = (movie: Movie) => {
    toggleFavoriteToLocal(movie);
    setFavorites(getFavorites());
  };

  return { favorites, isFavorite, toggleFavorite };
};

export default useFavorites;
