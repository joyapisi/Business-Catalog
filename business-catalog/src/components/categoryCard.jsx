import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';

export default function CategoryCard({ category, onClick }) {
  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardActionArea sx={{ display: 'flex' }} onClick={() => onClick(category.title)}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
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
