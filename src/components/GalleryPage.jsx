import { useParams, Link } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

export default function GalleryPage() {
  const { categoryPath } = useParams();

  const imageCount = 200; // adjust based on how many you have
  const images = Array.from(
    { length: imageCount },
    (_, i) => `/images/${categoryPath}/${i + 1}.jpg`
  );

  return (

    <Box sx={{ p: 3 }}>
          <Link to="/" style={{ position: 'fixed', top: 20, left: 20, zIndex: 1000 }}>
  <IconButton
    sx={{
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      '&:hover': { backgroundColor: '#f5f5f5' },
    }}
  >
    <ArrowBackIcon />
  </IconButton>
</Link>
      <Typography variant="h4" 
      sx={{ mb: 3, ml: 8 }}>
        {categoryPath.replace(/-/g, " ").toUpperCase()}
      </Typography>

      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid
            key={index}
            // sx={{ flexBasis: { xs: "50%", sm: "33.33%", md: "25%" } }}
            item xs={6} sm={4} md={3}
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