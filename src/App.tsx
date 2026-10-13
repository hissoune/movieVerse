import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Trending from "./pages/trending";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trending />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;