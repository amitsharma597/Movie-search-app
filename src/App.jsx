import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import { useState, useEffect } from "react";
import { Clapperboard } from "lucide-react";

const App = () => {
  console.log(import.meta.env.VITE_OMDB_API_KEY);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(
    <div className="empty-state">
      <div className="empty-icon">
        <Clapperboard size={72} strokeWidth={1.8} />
      </div>
      <h2>Discover Your Next Movie</h2>
      <p>
        Find movies, series, and more.
        <br />
        Start by typing a title above.
      </p>
    </div>,
  );

  const fetchMovies = async () => {
    if (!query.trim()) {
      setError("Please enter a movie name.");
      setMovies([]);
      setEmpty("");
      return;
    }
    setloading(true);
    setError("");
    setEmpty("");

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`,
    );

    const data = await response.json();

    if (data.Response === "False") {
      setError(data.Error);
      setMovies([]);
      setloading(false);
    } else {
      setMovies(data.Search || []);
      setloading(false);
    }

    setQuery("");
  };
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");

    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              setFavorites={setFavorites}
              query={query}
              setQuery={setQuery}
              movies={movies}
              setMovies={setMovies}
              loading={loading}
              setloading={setloading}
              error={error}
              setError={setError}
              empty={empty}
              setEmpty={setEmpty}
              fetchMovies={fetchMovies}
            />
          }
        />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/favorite"
          element={
            <Favorite favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
