const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a movie name..."
        className="search-input"
      />

      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
