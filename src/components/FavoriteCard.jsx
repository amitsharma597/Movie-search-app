import { Link } from "react-router-dom";
const FavoriteCard = (props) => {
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
