import { useParams, Link } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";

export default function GalleryPage() {
  const { categoryPath } = useParams();

  const imageCount = 100; // adjust based on how many you have
  const images = Array.from(
    { length: imageCount },
    (_, i) => `/images/${categoryPath}/${i + 1}.jpg`
  );

  return (
    <Box>
      <Link to="/" style={{ textDecoration: "none" }}>
        &larr; Back to Categories
      </Link>
      <Typography variant="h4" sx={{ mt: 2, mb: 3 }}>
        {categoryPath.replace(/-/g, " ").toUpperCase()}
      </Typography>

      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid
            key={index}
            sx={{ flexBasis: { xs: "50%", sm: "33.33%", md: "25%" } }}
            // item xs={6} sm={4} md={3}
          >
            <img
              src={src}
              alt={`img-${index}`}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', borderRadius: "10px" }}
              onError={(e) => (e.target.style.display = "none")}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
