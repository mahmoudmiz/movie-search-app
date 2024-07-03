import { useState, useEffect } from "react";
import { useMovieContext } from "../../contexts/MovieContext/useMovieContext";
import { CircularProgress, Grid, Typography, Container } from "@mui/material";

import MovieCard from "./MovieCard/MovieCard";
import useDebounce from "../../hooks/useDebounce";
import SearchInput from "./SearchInput/SearchInput";
import NotFound from "./NotFound/NotFound";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const MovieSearch = () => {
  const { movies, setMovies, loading, setLoading, error, setError } =
    useMovieContext();

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const fetchMovies = async (query: string) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const searchMovies = async () => {
      if (debouncedQuery) {
        setLoading(true);
        setError(null);
        try {
          const results = await fetchMovies(debouncedQuery);
          setMovies(results);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setMovies([]);
      }
    };

    searchMovies();
  }, [debouncedQuery, setMovies, setLoading, setError]);

  return (
    <Container>
      <SearchInput query={query} setQuery={setQuery} />
      {loading && <CircularProgress color="inherit" />}
      {error && <Typography color="error">{error.message}</Typography>}
      {!loading && !error && !movies?.length && query && (
        <NotFound query={query} />
      )}
      <Grid container spacing={3}>
        {movies?.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieSearch;
