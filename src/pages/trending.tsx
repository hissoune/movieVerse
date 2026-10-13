import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";
import Navbar from "../components/naveBar";
import useDebounce from "../hooks/useDebounce";
import MovieFilters from "../components/MovieFilters";
import MovieGridSkeleton from "../components/loadingSkeleton";
import Pagination from "../components/pagination";
import toast from "react-hot-toast";

function Trending() {
const [searchQuery, setSearchQuery] = useState("");
const [yearFilter, setYearFilter] = useState("");
const [sortByFilter, setSortByFilter] = useState("");
const debouncedSearchQuery = useDebounce(searchQuery, 500);
const { movies, loading, error, page,totalPages,changePage, } = useMovies(debouncedSearchQuery);

useEffect(() => {
  if (error) {
    toast.error(error);
  }
}, [error]);

const filteredMovies = movies
  .filter((movie) => {
    if (!yearFilter) return true;

    return movie.release_date?.startsWith(yearFilter);
  })
  .sort((a, b) => {
    switch (sortByFilter) {
      case "popularity":
        return b.popularity - a.popularity;

      case "rating":
        return b.vote_average - a.vote_average;

      case "release_date":
        return (b.release_date || "").localeCompare(
          a.release_date || ""
        );

      default:
        return 0;
    }
  });



 
  return (
    <div>
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {
        debouncedSearchQuery.trim() ? (
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Search Results for "{debouncedSearchQuery}"
            </h2>
          </div>
        ):(
          <div>
          <h1 className="text-4xl font-bold text-center mt-10">Trending Movies</h1>
          </div>
        )
      }
      <div className=" m-10">
         <MovieFilters  year={yearFilter} sortBy={sortByFilter} onYearChange={setYearFilter} onSortChange={setSortByFilter} />

      </div>
      
      {loading ? (
            <MovieGridSkeleton  />
          
      ) : (
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p>No movies found.</p>
            </div>
          )}
        </div>

        {!loading && !error && movies.length > 0 && (
            <Pagination page={page} totalPages={totalPages} changePage={changePage} />
          )}
        </>
       
      )}
    </div>
    
  );
}

export default Trending;