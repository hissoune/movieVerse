import { Heart, Film } from "lucide-react";
import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorite";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center py-24 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
            <Heart size={36} className="text-white/40" />
          </div>

          <h1 className="mb-3 text-3xl font-bold">Your Favorites</h1>

          <p className="mb-8 max-w-sm text-white/50">
            You haven't saved any movies yet. Explore movies and add the ones
            you love to your favorites.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold transition hover:bg-red-600"
          >
            <Film size={18} />
            Explore Movies
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <Heart size={28} className="fill-red-500 text-red-500" />
            <h1 className="text-3xl font-bold">Your Favorites</h1>
          </div>

          <p className="text-white/50">
            {favorites.length} {favorites.length === 1 ? "movie" : "movies"} saved
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Favorites;
