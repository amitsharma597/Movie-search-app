import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`,
      );

      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovie(data);
      }

      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />

      <div className="movie-info">
        <h1>{movie.Title}</h1>

        <p>
          <strong>⭐ IMDb:</strong> {movie.imdbRating}
        </p>
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.Runtime}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <h3>Plot :</h3>
          {movie.Plot}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
