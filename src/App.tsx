import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Trending from "./pages/trending";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/farorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;