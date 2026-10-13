import { useEffect, useState } from "react";
import { getTrendingMovies, searchMovies } from "../services/moviesService";
import type { Movie } from "../types";

const useMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {

        setLoading(query.trim() ? false : true);
        setError(null);

  const results = query.trim()
          ? await searchMovies(query.trim())
          : await getTrendingMovies();
        setMovies(results);
      } catch {
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return { movies, loading, error };
};

export default useMovies;

