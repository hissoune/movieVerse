import { Heart } from "lucide-react";
import useFavorites from "../hooks/useFavorite";
import MovieCard from "../components/MovieCard";
import NoFavorites from "../components/noFavorites";
import MovieGridSkeleton from "../components/loadingSkeleton";

function Favorites() {
  const { favorites ,loading } = useFavorites();

  if (favorites.length === 0) {
    return (
      <NoFavorites />
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
         {loading ? (
            <MovieGridSkeleton  />
          
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        )} 
        
      </div>
    </main>
  );
}

export default Favorites;
