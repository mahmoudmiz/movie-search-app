import { createContext } from 'react';
import { MovieContextType} from './types.ts'

export const MovieContext = createContext<MovieContextType | undefined>(undefined);