import { ReactNode } from "react";
import { Movie } from "../../types/movies";


export interface MovieContextType {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: Error | null;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
}


export interface MovieProviderProps {
  children: ReactNode;
}