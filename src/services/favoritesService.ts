import type { Movie } from "../types";

const FAVORITES_KEY = "favorites";

export function getFavorites(): Movie[] {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
}

export function toggleFavoriteToLocal(movie: Movie) {
  const favorites = getFavorites();
  if (!favorites.some((fav) => fav.id === movie.id)) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, movie]));
  }else {
    removeFavorite(movie)
  }
}

 function removeFavorite(movie: Movie) {
  const favorites = getFavorites();
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites.filter((fav) => fav.id !== movie.id)));
}
