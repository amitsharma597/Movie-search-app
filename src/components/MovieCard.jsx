import { useState } from "react";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const [favorite, setfavorite] = useState(false);

  return (
    <>
      <div className="movie-container">
        <Link to={`/movie/${props.id}`}>
          <div className="poster">
            <img
              src={
                props.poster !== "N/A"
                  ? props.poster
                  : "https://placehold.co/300x450?text=No+Poster"
              }
              alt={props.title}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                setfavorite(!favorite);
              }}
              className={`favorite-btn ${favorite ? "active" : ""}`}
            >
              ❤
            </button>
          </div>

          <h2>{props.title}</h2>
          <p>{props.year}</p>
          <p>{props.type}</p>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
