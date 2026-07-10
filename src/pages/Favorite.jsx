import Navbar from "../components/Navbar";
import FavoriteCard from "../components/FavoriteCard";

const Favorite = (props) => {
  return (
    <>
      <Navbar />
      {props.favorites.length === 0 && (
        <p className="empty-msg">❤️ No favorite movies yet.</p>
      )}
      <div className="movies-grid">
        {props.favorites.map((favoriteMovies) => {
          return (
            <FavoriteCard
              key={favoriteMovies.imdbID}
              favoriteMovies={favoriteMovies}
              favorites={props.favorites}
              setFavorites={props.setFavorites}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorite;
