import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

function Trending() {
const { movies, loading, error } = useMovies();
  

if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-20">
      {movies.map((movie) => ( <MovieCard key={movie.id} movie={movie} /> ))}
    </div>
  );
}

export default Trending;