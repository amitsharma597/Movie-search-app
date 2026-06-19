const SearchBar = (props) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a movie name..."
        className="search-input"
        value={props.query}
        onChange={(e) => props.setquery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.fetchMovies();
          }
        }}
      />

      <button className="search-btn" onClick={props.fetchMovies}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
