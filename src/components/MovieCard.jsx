const MovieCard = (props) => {
  return (
    <>
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
    </>
  );
};

export default MovieCard;
