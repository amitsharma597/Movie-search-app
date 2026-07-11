import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
const FavoriteCard = (props) => {
  const isFavorite = props.favorites.some(
    (movie) => movie.imdbID === props.favoriteMovies.imdbID,
  );

  const handleFavorite = (e) => {
    e.preventDefault();

    if (isFavorite) {
      props.setFavorites(
        props.favorites.filter(
          (movie) => movie.imdbID !== props.favoriteMovies.imdbID,
        ),
      );
    } else {
      props.setFavorites([...props.favorites, props.favoriteMovies]);
    }
  };
  return (
    <div>
      <Link to={`/movie/${props.favoriteMovies.imdbID}`}>
        <div className="movie-container">
          <div className="poster">
            <img
              src={
                props.favoriteMovies.Poster !== "N/A"
                  ? props.favoriteMovies.Poster
                  : "https://placehold.co/300x450?text=No+Poster"
              }
              alt={props.favoriteMovies.Title}
            />
            <button
              onClick={handleFavorite}
              className={`favorite-btn ${isFavorite ? "active" : ""}`}
            >
              <Heart size={22} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <h2>{props.favoriteMovies.Title}</h2>
          <p>{props.favoriteMovies.Year}</p>
          <p>{props.favoriteMovies.Type}</p>
        </div>
      </Link>
    </div>
  );
};

export default FavoriteCard;
