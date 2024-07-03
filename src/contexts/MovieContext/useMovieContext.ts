import { useContext } from "react";
import { MovieContextType } from "./types";
import { MovieContext } from "./MovieContext";

export const useMovieContext = (): MovieContextType => {
    const context = useContext(MovieContext);
    if (context === undefined) {
      throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
  };