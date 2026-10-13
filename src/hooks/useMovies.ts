import { useEffect, useState } from "react";
import { getTrendingMovies, searchMovies } from "../services/moviesService";
import type { Movie } from "../types";

const useMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const results = query.trim() ? await searchMovies(query.trim()) : await getTrendingMovies();
        setMovies(results);
      } catch {
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  return { movies, loading, error };
};

export default useMovies;

