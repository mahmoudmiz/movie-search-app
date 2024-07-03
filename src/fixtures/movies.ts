import { makeFixture } from "make-fixture";
import { MovieContextType } from "../contexts/MovieContext/types";
import { Movie } from "../types/movies";

export const makeMoviesContextFixture = (
  overrides?: Partial<MovieContextType>
) => {
  const defaults = {
    movies: [],
    setMovies: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
  };

  return makeFixture(defaults, overrides);
};

export const makeMovieFixture = (overrides?: Partial<Movie>) => {
  const defaults = {
    id: 1,
    title: "Movie 1",
    release_date: "2021-01-01",
    poster_path: "/path/to/poster1.jpg",
    vote_average: 7.6
  };

  return makeFixture(defaults, overrides);
};
