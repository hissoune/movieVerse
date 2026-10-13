import type { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
    const handleDetails = () => {
        console.log("Movie details:", movie);
    }
  return (
    <button onClick={handleDetails} className="  bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 ">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          No poster available
        </div>
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>

        <p className="text-gray-600 text-sm">
          {movie.release_date || "Release date unknown"}
        </p>

        <p className="text-gray-800 mt-2 line-clamp-2 group-hover:line-clamp-none">
          {movie.overview || "No overview available."}
        </p>

        <p className="text-sm font-medium mt-3">
          ⭐ {movie.vote_average.toFixed(1)} / 10
        </p>
      </div>

    </button>
  );
}

export default MovieCard;
