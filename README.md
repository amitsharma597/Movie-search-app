# MovieApp 🎬

A responsive movie search application built with React and the OMDb API. Users can search for movies and view movie posters, titles, release years, and media types in a clean, modern interface.

## Features

- 🔍 Search movies by title
- 🎥 Display movie poster, title, year, and type
- ⌨️ Search using Enter key or Search button
- ⏳ Loading spinner while fetching data
- ❌ Error handling for invalid searches
- 📭 Empty state before any search is performed
- 📱 Responsive design for desktop, tablet, and mobile devices
- 🎨 Modern dark-themed UI

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS3
- OMDb API

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   └── MovieCard.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## Installation

### Clone the repository

```bash
git clone <https://github.com/amitsharma597/Movie-search-app>
cd movie-app
```

### Install dependencies

```bash
npm install
```

### Create a .env file

```env
VITE_OMDB_API_KEY=your_api_key_here
```

Get your free API key from:

https://www.omdbapi.com/

### Start the development server

```bash
npm run dev
```

## How It Works

1. User enters a movie title.
2. The application sends a request to the OMDb API.
3. While data is being fetched, a loading spinner is displayed.
4. Search results are rendered as movie cards.
5. If no movies are found, an error message is shown.
6. Before any search, an empty-state message is displayed.

## Learning Outcomes

This project helped practice:

- React Components
- Props
- useState Hook
- Conditional Rendering
- API Integration
- Environment Variables
- Responsive Design
- Loading States
- Error Handling

## Future Improvements

- Movie Details Page
- Favorites / Watchlist
- Pagination
- Search History
- Popular Movies on Startup

## Author

Amit Sharma

Built with React and OMDb API 🎬
