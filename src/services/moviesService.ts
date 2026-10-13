import type { Movie } from "../types";
import axiosInstance from "./apiClient";



interface MoviesResponse {
page: number;
results: Movie[];
total_pages: number;
total_results: number;
}

export const getTrendingMovies = async (): Promise<Movie[]> => {
const response = await axiosInstance.get<MoviesResponse>(
"/trending/movie/day"
);

console.log("Fetched trending movies:", response.data.results);

return response.data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
const response = await axiosInstance.get<MoviesResponse>("/search/movie", {
params: { query },
});
return response.data.results;
};

export const getMovieDetails = async (id: string): Promise<Movie> => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};
