import { Film, Heart } from "lucide-react"
import { Link } from "react-router-dom"

function NoFavorites() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center py-24 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
            <Heart size={36} className="text-white/40" />
          </div>

          <h1 className="mb-3 text-3xl font-bold">Your Favorites</h1>

          <p className="mb-8 max-w-sm text-white/50">
            You haven't saved any movies yet. Explore movies and add the ones
            you love to your favorites.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold transition hover:bg-red-600"
          >
            <Film size={18} />
            Explore Movies
          </Link>
        </div>
      </main>
  )
}

export default NoFavorites