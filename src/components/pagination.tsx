
export default function Pagination({ page, totalPages, changePage }: { page: number; totalPages: number; changePage: (newPage: number) => void }) {
  return (
    <div className="p-5 flex items-center justify-center gap-6 bg-red-500/10 rounded-lg mt-8">
              <button
                onClick={() => changePage(page - 1)}
                disabled={page === 1}
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              <span className="text-sm text-gray-600">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => changePage(page + 1)}
                disabled={page >= totalPages}
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
  )
}
