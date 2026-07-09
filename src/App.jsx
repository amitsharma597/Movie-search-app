import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import { useState } from "react";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite favorites={favorites} />} />
      </Routes>
    </>
  );
};

export default App;
