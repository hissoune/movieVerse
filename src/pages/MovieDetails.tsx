import { Link, useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import useFavorites from "../hooks/useFavorite";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { movie, loading, error } = useMovieDetails(id);
  const { isFavorite, toggleFavorite } = useFavorites(movie);
  console.log("Movie details:", isFavorite);

     const handleToggleFavorite = () => {
            const wasFavorite = isFavorite;

            toggleFavorite(movie);

            toast.success(
            wasFavorite
                ? "Removed from favorites"
                : "Added to favorites"
            );
  };


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
        <p className="animate-pulse text-lg text-gray-400">
          Loading movie details...
        </p>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-950 px-6 text-white">
        <h1 className="text-2xl font-bold">
          {error ? "Something went wrong" : "Movie not found"}
        </h1>

        <p className="text-gray-400">
          {error || "We couldn't find this movie."}
        </p>

        <Link
          to="/"
          className="rounded-lg bg-white px-5 py-2.5 font-medium text-gray-950 transition hover:bg-gray-200"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="relative isolate min-h-[650px]">
        {movie.backdrop_path && (
          <img
            src={`${IMAGE_BASE_URL}/original${movie.backdrop_path}`}
            alt=""
            className="absolute inset-0 z-10 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 z-20 bg-black/50 opacity-70" />

  <div className="relative z-30 mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:gap-14 md:px-10 md:py-20">
          <div className="w-full max-w-[280px] shrink-0">
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
                className="w-full rounded-2xl shadow-2xl shadow-black/50"
              />
            ) : (
              <div className="flex aspect-[2/3] items-center justify-center rounded-2xl bg-gray-800 text-gray-400">
                No poster available
              </div>
            )}
          </div>

          <div className="max-w-3xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
            >
              <span aria-hidden="true">←</span> Back to movies
            </Link>

           <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                {movie.title}
            </h1>

            <button
                onClick={handleToggleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 ${
                isFavorite
                    ? "border-red-500/40 bg-red-500/15 text-red-400"
                    : "border-white/20 bg-white/10 text-white hover:border-red-400/50 hover:bg-red-500/15 hover:text-red-400"
                }`}
            >
                <Heart
                size={22}
                fill={isFavorite ? "currentColor" : "none"}
                strokeWidth={2}
                />
            </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              {movie.release_date && (
                <span>{movie.release_date.slice(0, 4)}</span>
              )}

              {movie.runtime != null && (
                <>
                  <span>·</span>
                  <span>
                    {Math.floor(movie.runtime / 60)}h{" "}
                    {movie.runtime % 60}m
                  </span>
                </>
              )}

              <span>·</span>

              <span className="flex items-center gap-1.5 text-yellow-400">
                <span aria-hidden="true">★</span>
                <span className="font-semibold">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-gray-400">/ 10</span>
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {movie.genres.map((genre:any) => (
                <span
                  key={genre.id}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-gray-200"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold">Overview</h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                {movie.overview || "No overview available."}
              </p>
            </div>

            {movie.release_date && (
              <div className="mt-8">
                <p className="text-sm text-gray-400">Release date</p>
                <p className="mt-1 font-medium">
                  {new Date(
                    `${movie.release_date}T12:00:00`
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
