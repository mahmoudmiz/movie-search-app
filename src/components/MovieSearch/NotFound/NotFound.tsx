import { Typography } from "@mui/material";

interface NotFoundProps {
  query: string;
}

const NotFound = ({ query }: NotFoundProps) => {
  return <div data-testid='not-found' > 
    <Typography
      variant="h5"
      color="error"
      align="center"
      style={{ margin: "2rem 0" }}
    >
      No movies found for <strong>{query}</strong>.
    </Typography>
    </div>
  ;
};

export default NotFound;
