function MovieCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-lg bg-white shadow-md">
      <div className="h-64 w-full bg-gray-300" />

      <div className="space-y-3 p-4">
        <div className="h-5 w-3/4 rounded bg-gray-300" />

        <div className="h-4 w-1/3 rounded bg-gray-200" />

        <div className="space-y-2 pt-2">
          <div className="h-3 w-full rounded bg-gray-200" />
          <div className="h-3 w-full rounded bg-gray-200" />
          <div className="h-3 w-2/3 rounded bg-gray-200" />
        </div>

        <div className="h-4 w-1/3 rounded bg-gray-300 pt-1" />
      </div>
    </div>
  );
}

interface MovieGridSkeletonProps {
  count?: number;
}

function MovieGridSkeleton({ count = 12 }: MovieGridSkeletonProps) {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      aria-label="Loading movies"
      aria-busy="true"
    >
      {Array.from({ length: count }, (_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default MovieGridSkeleton;
