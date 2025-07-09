import { Grid, Typography } from '@mui/material';

export default function GalleryView({ category }) {
  // Build path name based on category
  const folderName = category.toLowerCase().replace(/\s/g, '-');
  const imageCount = 500; // Number of images in each category folder

  const images = Array.from({ length: imageCount }, (_, i) => `/images/${folderName}/${i + 1}.jpg`);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        {category}
      </Typography>
      <Grid key={index} sx={{ flexBasis: { xs: '50%', sm: '33.33%', md: '25%' } }}>
      <img
        src={src}
        alt={`img-${index}`}
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
        onError={(e) => (e.target.style.display = 'none')}
      />
    </Grid>
    </div>
  );
}