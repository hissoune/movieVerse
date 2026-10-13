import { useEffect, useState } from "react";
import { getTrendingMovies, searchMovies } from "../services/moviesService";
import type { Movie } from "../types";

const useMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        const results = query.trim()
          ? await searchMovies(query.trim(), page)
          : await getTrendingMovies(page);

            setMovies(results.results);
            setTotalPages(results.total_pages);
        
      } catch {
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [query, page]);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return {
    movies,
    loading,
    error,
    page,
    totalPages,
    changePage,
  };
};

export default useMovies;
