# MovieVerse 🎬

MovieVerse is a movie discovery application built with React, TypeScript and Vite. It lets users explore trending movies, search for titles, view movie details and manage a personal list of favorites, using the public [TMDB API](https://developer.themoviedb.org/docs).

## Features

### Core features

* **Trending movies**: browse the movies trending on TMDB, displayed as cards (poster, title, rating, release date).
* **Search**: search movies by title, with debounced requests and a message when there are no results.
* **Movie details**: dedicated page with poster, title, description, release date and rating.
* **Favorites**: add or remove a movie from your favorites, from a dedicated Favorites page.
* **Persistent favorites**: favorites are saved in `localStorage` and survive a page refresh.

### Bonus features

* **Pagination**: Previous / Next controls to navigate through results.
* **Skeleton loading**: placeholder cards are shown while movies are loading.
* **Debounced fetching**: API calls are delayed to avoid a request on every keystroke.
* **Responsive navbar**: navigation and search adapt to mobile and desktop screens.

## Tech stack

| Technology | Usage |
| --- | --- |
| React | UI components |
| TypeScript | Type safety |
| Vite | Dev server and build tooling |
| React Router | Client-side routing |
| Tailwind CSS | Styling and responsive layout |
| Axios | HTTP requests to the TMDB API |
| Lucide React | Icons |
| localStorage | Favorites persistence |

## Getting started

### Prerequisites

* Node.js (v18 or later recommended)
* npm
* A free TMDB API key: create an account on [developer.themoviedb.org](https://developer.themoviedb.org) and generate a key in your account settings.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hissoune/movieVerse.git
   cd movieVerse
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your API key. Create a `.env` file at the project root:

   ```env
   VITE_TMDB_API_KEY=362e8ef5f59bc6c77fabcca4ff8230fb
   ```

   The `.env` file is ignored by Git. Never commit your real key.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |

## Project structure

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
│   ├── apiClient.ts
│   ├── moviesService.ts
│   └── favoritesService.ts
├── types.ts
├── App.tsx
└── main.tsx
```

## Technical choices

* **Custom hooks** (`useMovies`, `useMovieDetails`, `useFavorite`, `useDebounce`) keep data fetching and state logic out of the UI components.
* **Service layer** (`apiClient`, `moviesService`, `favoritesService`) isolates the TMDB calls and the localStorage access from the rest of the app.
* **Reusable components** (`MovieCard`, `SearchBar`, skeletons) are shared across the Trending, Search and Favorites views.
* **TypeScript types** are centralized in `types.ts`.

## API

MovieVerse uses the [TMDB API](https://developer.themoviedb.org/docs) for movie data and images. This product uses the TMDB API but is not endorsed or certified by TMDB
