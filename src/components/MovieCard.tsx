import { useNavigate } from "react-router-dom";
import type { Movie } from "../types";
import useFavorites from "../hooks/useFavorite";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites(movie);

  const handleDetails = () => {
    navigate(`/movieDetails/${movie.id}`);
  };

  const handleToggleFavorite = () => {
    const wasFavorite = isFavorite;

    toggleFavorite(movie);

    toast.success(
      wasFavorite
        ? "Removed from favorites"
        : "Added to favorites"
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
      <button
        onClick={handleDetails}
        className="block w-full text-left"
      >
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="h-64 w-full object-cover"
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-gray-200">
            No poster available
          </div>
        )}

        <div className="p-4">
          <h2 className="text-lg font-semibold">{movie.title}</h2>

          <p className="text-sm text-gray-600">
            {movie.release_date || "Release date unknown"}
          </p>

          <p className="mt-2 line-clamp-2 text-gray-800">
            {movie.overview || "No overview available."}
          </p>

          <p className="mt-3 text-sm font-medium">
            ⭐ {movie.vote_average.toFixed(1)} / 10
          </p>
        </div>
      </button>

      <button
        onClick={handleToggleFavorite}
        aria-label={
          isFavorite ? "Remove from favorites" : "Add to favorites"
        }
        title={
          isFavorite ? "Remove from favorites" : "Add to favorites"
        }
        className={`absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 ${
          isFavorite
            ? "border-red-500/40 bg-red-500/15 text-red-500"
            : "border-white/20 bg-black/50 text-white hover:border-red-400/50 hover:bg-red-500/20 hover:text-red-400"
        }`}
      >
        <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
      </button>
    </div>
  );
}

export default MovieCard;
