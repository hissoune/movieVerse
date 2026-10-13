import type { Movie } from "../types";
import axiosInstance from "./apiClient";



interface MoviesResponse {
page: number;
results: Movie[];
total_pages: number;
total_results: number;
}
export const getTrendingMovies = async (
  page = 1
): Promise<MoviesResponse> => {
  const response = await axiosInstance.get<MoviesResponse>("/trending/movie/day", {
    params: { page },
  });

  return response.data;
};

export const searchMovies = async (
  query: string,
  page = 1
): Promise<MoviesResponse> => {
  const response = await axiosInstance.get<MoviesResponse>("/search/movie", {
    params: { query, page },
  });

  return response.data;
};

export const getMovieDetails = async (id: string): Promise<Movie> => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};
