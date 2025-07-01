import { Grid, Card, CardMedia, Typography } from '@mui/material';

export default function GalleryView({ category }) {
  // Build path name based on category
  const folderName = category.toLowerCase().replace(/\s/g, '-');
  const imageCount = 6; // Number of images in each category folder

  const images = Array.from({ length: imageCount }, (_, i) => `/images/${folderName}/${i + 1}.jpg`);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        {category}
      </Typography>
      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" image={img} alt={`Image ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
