import Navbar from "../components/Navbar";
import FavoriteCard from "../components/FavoriteCard";
import { Heart } from "lucide-react";

const Favorite = (props) => {
  return (
    <>
      <Navbar />
      {props.favorites.length === 0 && (
        <div className="favorite-empty">
          <Heart size={64} strokeWidth={1.8} />
          <h2>No Favorites Yet</h2>
          <p>
            Save your favorite movies by tapping the heart icon.
            <br />
            They'll appear here instantly.
          </p>
        </div>
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
