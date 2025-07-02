import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';

export default function CategoryCard({ category, onClick }) {
 return (
    <Card sx={{ display: 'flex', mb: 2, height: 150 }}>
      <CardActionArea sx={{ display: 'flex' }} onClick={() => onClick(category.path)}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: '100%', objectFit: 'cover' }}
          image={category.image}
          alt={category.title}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
          <CardContent>
            <Typography variant="h6">{category.title}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}