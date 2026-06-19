import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState } from "react";
import MovieCard from "./components/MovieCard";

const App = () => {
  console.log(import.meta.env.VITE_OMDB_API_KEY);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`,
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.Search || []);
    setQuery("");
  };

  return (
    <>
      <Navbar />
      <SearchBar query={query} setquery={setQuery} fetchMovies={fetchMovies} />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            type={movie.Type}
          />
        ))}
      </div>
    </>
  );
};

export default App;
