import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import MovieSearch from "./MovieSearch";
import { MovieContext } from "../../contexts/MovieContext/MovieContext";
import {
  makeMoviesContextFixture,
  makeMovieFixture,
} from "../../fixtures/movies";

describe("MovieSearch", () => {
  it("renders search input", () => {
    render(
      <MovieContext.Provider value={makeMoviesContextFixture()}>
        <MovieSearch />
      </MovieContext.Provider>
    );
    expect(screen.getByLabelText(/Search for a movie.../i)).toBeInTheDocument();
  });

  it("shows loading indicator when loading", async () => {
    render(
      <MovieContext.Provider
        value={makeMoviesContextFixture({ loading: true })}
      >
        <MovieSearch />
      </MovieContext.Provider>
    );

    const input = screen.getByLabelText(/Search for a movie.../i);
    userEvent.type(input, "harry");

    await waitFor(() => {
      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });
  });

  it("shows error message when there is an error", async () => {
    render(
      <MovieContext.Provider
        value={makeMoviesContextFixture({
          error: { message: "failed to fetch movies", name: "error" },
        })}
      >
        <MovieSearch />
      </MovieContext.Provider>
    );

    const input = screen.getByLabelText(/Search for a movie.../i);
    userEvent.type(input, "Movie");

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch movies/i)).toBeInTheDocument();
    });
  });

  it("fetches and displays movies based on the search query", async () => {
    render(
      <MovieContext.Provider
        value={makeMoviesContextFixture({
          movies: [
            makeMovieFixture({ title: "Movie 1" }),
            makeMovieFixture({ title: "Movie 2" }),
          ],
        })}
      >
        <MovieSearch />
      </MovieContext.Provider>
    );

    const input = screen.getByLabelText(/Search for a movie.../i);
    userEvent.type(input, "Movie");

    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
      expect(screen.getByText("Movie 2")).toBeInTheDocument();
    });
  });

  it("show Not Found component when there is no movies for the query", async () => {
    render(
      <MovieContext.Provider
        value={makeMoviesContextFixture({
          movies: [],
          error: null,
          loading: false,
        })}
      >
        <MovieSearch />
      </MovieContext.Provider>
    );

    const input = screen.getByLabelText(/Search for a movie.../i);
    userEvent.type(input, "movie that does not exist");

    await waitFor(() => {
      expect(screen.getByText(/No movies found/i)).toBeInTheDocument();
    });
  });
});
