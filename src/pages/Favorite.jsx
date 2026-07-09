import Navbar from "../components/Navbar";
import FavoriteCard from "../components/FavoriteCard";

const Favorite = (props) => {
  return (
    <>
      <Navbar />
      <div className="movies-grid">
        {props.favorites.map((favoriteMovies) => {
          return (
            <FavoriteCard
              key={favoriteMovies.imdbID}
              favoriteMovies={favoriteMovies}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorite;
