# MovieVerse 🎬

MovieVerse is a movie discovery application built with React and TypeScript. It lets users explore trending movies, search for titles, view movie details, and manage a personal list of favorite movies.

## Features

* **Trending Movies** — Discover trending movies using the TMDB API.
* **Movie Search** — Search for movies by title.
* **Movie Details** — View movie information, posters, release dates, ratings, and descriptions.
* **Favorites** — Add and remove movies from your personal favorites list.
* **Pagination** — Navigate through movie results using Previous and Next controls.
* **Debounced Fetching** — Delay API requests to avoid fetching on every keystroke.
* **Loading Skeletons** — Display placeholder cards while movies are loading.
* **Responsive Navbar** — Navigation and search adapt to different screen sizes.
* **Persistent Favorites** — Save favorites in local storage so they remain available after refreshing the page.

## Tech Stack

* **React** — UI development
* **TypeScript** — Type safety
* **Vite** — Development server and build tooling
* **Tailwind CSS** — Styling and responsive layouts
* **React Router** — Client-side navigation
* **Axios** — HTTP requests
* **Lucide React** — Icons
* **TMDB API** — Movie data and images
* **Local Storage** — Persistent favorites

## Getting Started

### Prerequisites

* Node.js
* npm
* A TMDB API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hissoune/movieVerse.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movieverse
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your TMDB API key using the variable name expected by your existing Axios configuration.

   For example:

   ```env
   VITE_TMDB_API_KEY=362e8ef5f59bc6c77fabcca4ff8230fb
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL provided by Vite in your browser.

## Project Structure

```text
src/
├── components/
│   ├── MovieCard.tsx
│   ├── MovieCardSkeleton.tsx
│   ├── MovieGridSkeleton.tsx
│   ├── Navbar.tsx
│   └── SearchBar.tsx
├── hooks/
│   ├── useDebounce.ts
│   ├── useMovieDetails.ts
│   ├── useMovies.ts
│   └── useFavorite.ts
├── pages/
│   ├── Trending.tsx
│   ├── MovieDetails.tsx
│   └── Favorites.tsx
├── services/
│   ├── moviesService.ts
│   └── favoritesService.ts
│   └── apiClient.ts
├── types.ts
├── App.tsx
└── main.tsx
```

*Adjust the structure above to match your actual project files.*

## API

MovieVerse uses the [TMDB API](https://developer.themoviedb.org/docs) to retrieve movie information.

You will need a TMDB API key to access the API. Keep your credentials in environment variables and never commit your `.env` file.

## Future Improvements

* Dark mode and light mode
* Movie genre filters
* Improved error handling
* Pagination controls and page navigation improvements
* Additional movie discovery features

## License

This project is intended for learning and portfolio purposes. Movie data and images are provided by TMDB and are subject to its terms and attribution requirements.
