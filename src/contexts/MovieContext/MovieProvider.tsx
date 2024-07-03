import { useState } from "react";
import { MovieContext } from "./MovieContext";
import { MovieProviderProps } from "./types";
import { Movie } from "../../types/movies";

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, loading, setLoading, error, setError }}
    >
      {children}
    </MovieContext.Provider>
  );
};
