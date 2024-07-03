import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput = ({ query, setQuery }: SearchInputProps) => {
  return (
    <TextField
      label="Search for a movie..."
      variant="outlined"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      autoComplete="off"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#fff" }} />
          </InputAdornment>
        ),
        style: {
          color: "#fff",
        },
      }}
      InputLabelProps={{
        style: {
          color: "#bbb",
        },
      }}
      sx={{
        width: "100%",
        backgroundColor: "#333",
        borderRadius: "4px",
        marginBottom: "2rem",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#e50914",
          },
          "&:hover fieldset": {
            borderColor: "#e50914",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#e50914",
          },
        },
      }}
    />
  );
};

export default SearchInput;
