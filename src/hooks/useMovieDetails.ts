import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/moviesService";

const useMovieDetails = (id: string | undefined) => {
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setMovie(null);
      setLoading(false);
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieDetails(id);
        setMovie(result);
      } catch {
        setError("Failed to load movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movie, loading, error };
};

export default useMovieDetails;