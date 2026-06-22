import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState } from "react";
import MovieCard from "./components/MovieCard";

const App = () => {
  console.log(import.meta.env.VITE_OMDB_API_KEY);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const fetchMovies = async () => {
    setloading(true);
    seterror("");

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`,
    );

    const data = await response.json();

    if (data.Response === "False") {
      seterror(data.Error);
      setMovies([]);
      setloading(false);
    } else {
      setMovies(data.Search || []);
      setloading(false);
    }

    setQuery("");
  };

  return (
    <>
      <Navbar />
      <SearchBar query={query} setquery={setQuery} fetchMovies={fetchMovies} />
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching movies...</p>
        </div>
      )}
      {error && <p className="error-msg">{error}</p>}
      <div className="movies-grid">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              type={movie.Type}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
