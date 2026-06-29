import { Link } from "react-router-dom";
const MovieCard = (props) => {
  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <div className="movie-container">
          <img
            src={
              props.poster !== "N/A"
                ? props.poster
                : "https://placehold.co/300x450?text=No+Poster"
            }
            alt={props.title}
          />

          <h2>{props.title}</h2>
          <p>{props.year}</p>
          <p>{props.type}</p>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
