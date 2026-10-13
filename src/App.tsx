import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Trending from "./pages/trending";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;