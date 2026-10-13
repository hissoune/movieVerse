
import { Link } from "react-router-dom";
import { Heart, Film } from "lucide-react";
import SearchBar from "./SearchBar";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  return (
    <nav className="bg-gray-900 px-4 py-3 text-white sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-xl font-bold text-red-500 sm:text-2xl"
        >
          <Film size={24} />
          MovieVerse
        </Link>

        <Link
          to="/favorites"
          className="flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-red-400 sm:text-base"
        >
          <Heart size={18} />
          Favorites
        </Link>

        <div className="order-3 w-full min-w-0 md:order-none md:ml-auto md:w-auto md:flex-1 md:max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

