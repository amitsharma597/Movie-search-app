import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { useState } from "react";

const App = () => {
  console.log(import.meta.env.VITE_OMDB_API_KEY);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [empty, setempty] = useState("Search for a movie to get started!");

  const fetchMovies = async () => {
    setloading(true);
    seterror("");
    setempty("");

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
