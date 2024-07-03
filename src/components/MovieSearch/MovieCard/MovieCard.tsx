import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";
import { Movie } from "../../../types/movies";

// Base URL for movie poster images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
// Placeholder image URL
const PLACEHOLDER_IMAGE_URL =
  "https://via.placeholder.com/500x750?text=No+Image";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  console.log(movie, "movie");
  return (
    <Card
      data-testid="movie-card"
      sx={{
        backgroundColor: "#181818",
        color: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "300px",
          objectFit: "cover",
        }}
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : PLACEHOLDER_IMAGE_URL
        }
        alt={movie.title}
      />
      <CardContent
        sx={{
          backgroundColor: "#181818",
          padding: "10px",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          {movie.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#bbb",
          }}
        >
          {new Date(movie.release_date).getFullYear()}
        </Typography>
        <Rating
          name="movie-rating"
          value={movie.vote_average / 2}
          precision={0.1}
          readOnly
          sx={{ color: "#fbc02d" }}
        />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
