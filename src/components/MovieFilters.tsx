interface MovieFiltersProps {
  year: string;
  sortBy: string;
  onYearChange: (year: string) => void;
  onSortChange: (sortBy: string) => void;
}

function MovieFilters({
  year,
  sortBy,
  onYearChange,
  onSortChange,
}: MovieFiltersProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-end sm:justify-between sm:p-5">
      <div className="col-span-full sm:col-span-1 gap-1.5">
        <p className="text-base font-semibold text-gray-900">Discover movies</p>
        <p className="mt-1 text-sm text-gray-500">
          Filter and sort your results
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex w-full flex-col gap-1.5 sm:w-auto">
          <label
            htmlFor="movie-year"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
          >
            Release year
          </label>

          <select
            id="movie-year"
            value={year}
            onChange={(event) => onYearChange(event.target.value)}
            className="min-w-40 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:border-gray-300 focus:border-red-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-100"
          >
            <option value="">All years</option>

            {Array.from(
              { length: currentYear - 1894 },
              (_, index) => currentYear - index
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full flex-col gap-1.5 sm:w-auto">
          <label
            htmlFor="movie-sort"
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
          >
            Sort by
          </label>

          <select
            id="movie-sort"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="min-w-44 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:border-gray-300 focus:border-red-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-100"
          >
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="release_date">Release date</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MovieFilters;
