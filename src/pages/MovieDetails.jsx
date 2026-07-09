import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${imdbID}`,
      );

      const data = await response.json();
      console.log(data);

      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovie(data);
      }

      setLoading(false);
    };

    fetchMovie();
  }, [imdbID]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="movie-details">
        <img
          src={movie.Poster === "N/A" ? "/placeholder.png" : movie.Poster}
          alt={movie.Title}
        />

        <div className="movie-info">
          <h1>🎬 {movie.Title}</h1>

          <p>
            <strong>⭐ IMDb Rating:</strong> {movie.imdbRating}
          </p>

          <p>
            <strong>📅 Released:</strong> {movie.Released}
          </p>

          <p>
            <strong>🎭 Genre:</strong> {movie.Genre}
          </p>

          <p>
            <strong>⏱️ Runtime:</strong> {movie.Runtime}
          </p>

          <p>
            <strong>🎬 Director:</strong> {movie.Director}
          </p>

          <p>
            <strong>🎤 Actors:</strong> {movie.Actors}
          </p>

          <p>
            <strong>🗣️ Language:</strong> {movie.Language}
          </p>

          <p>
            <strong>💰 Box Office:</strong> {movie.BoxOffice}
          </p>

          <h3>📝 Plot</h3>
          <p>{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
