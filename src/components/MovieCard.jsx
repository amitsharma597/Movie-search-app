import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const MovieCard = (props) => {
  const isFavorite = props.favorites.some(
    (movie) => movie.imdbID === props.movie.imdbID,
  );

  const handleFavorite = (e) => {
    e.preventDefault();

    if (isFavorite) {
      props.setFavorites(
        props.favorites.filter((movie) => movie.imdbID !== props.movie.imdbID),
      );
    } else {
      props.setFavorites([...props.favorites, props.movie]);
    }
  };

  return (
    <>
      <div className="movie-container">
        <Link to={`/movie/${props.movie.imdbID}`}>
          <div className="poster">
            <img
              src={
                props.movie.Poster !== "N/A"
                  ? props.movie.Poster
                  : "https://placehold.co/300x450?text=No+Poster"
              }
              alt={props.movie.Title}
            />
            <button
              onClick={handleFavorite}
              className={`favorite-btn ${isFavorite ? "active" : ""}`}
            >
              <Heart size={22} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <h2>{props.movie.Title}</h2>
          <p>{props.movie.Year}</p>
          <p>{props.movie.Type}</p>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
