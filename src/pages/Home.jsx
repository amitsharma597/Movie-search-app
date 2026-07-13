import SearchBar from "../components/SearchBar";

import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <SearchBar
        query={props.query}
        setquery={props.setQuery}
        fetchMovies={props.fetchMovies}
      />
      {props.loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching movies...</p>
        </div>
      )}
      {props.error && <p className="error-msg">{props.error}</p>}
      {!props.error && !props.loading && (
        <p className="empty-msg">{props.empty}</p>
      )}
      <div className="movies-grid">
        {props.movies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              favorites={props.favorites}
              setFavorites={props.setFavorites}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
