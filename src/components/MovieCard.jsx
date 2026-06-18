const MovieCard = (props) => {
  return (
    <>
     const MovieCard = (props) => {
  return (
    <div className="movie-container">
      <img src={props.poster} alt={props.title} />

      <h2>{props.title}</h2>
      <p>{props.year}</p>
      <p>{props.type}</p>
    </div>
  );
};
    </>
  );
};

export default MovieCard;
