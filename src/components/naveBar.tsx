import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="text-2xl font-bold text-red-500">
          MovieVerse
        </Link>

        <div className="w-full md:max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/favorites"
            className="hover:text-red-400 transition-colors"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
