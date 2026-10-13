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
