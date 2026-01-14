import { Box } from '@mui/material';
import { useState } from 'react';
import ImagePreviewModal from './ImagePreviewModal';

export default function GalleryView({ categoryPath }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 8 }).map(
    (_, i) => `/images/${categoryPath}/${i + 1}.jpg`
  );

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          pb: 10,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)', // phone
            sm: 'repeat(3, 1fr)', // tablet
            md: 'repeat(4, 1fr)', // desktop
          },
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            sx={{
              width: '100%',
              borderRadius: 2,
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImage(img)}
            onContextMenu={(e) => {
              e.preventDefault();
              setSelectedImage(img);
            }}
          />
        ))}
      </Box>

      <ImagePreviewModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}


// import { Grid, Typography } from '@mui/material';

// export default function GalleryView({ category }) {
//   // Build path name based on category
//   const folderName = category.toLowerCase().replace(/\s/g, '-');
//   const imageCount = 500; // Number of images in each category folder

//   const images = Array.from({ length: imageCount }, (_, i) => `/images/${folderName}/${i + 1}.jpg`);

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h5" align="center" gutterBottom>
//         {category}
//       </Typography>
//       <Grid key={index} sx={{ flexBasis: { xs: '50%', sm: '33.33%', md: '25%' } }}>
//       <img
//         src={src}
//         alt={`img-${index}`}
//         style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
//         onError={(e) => (e.target.style.display = 'none')}
//       />
//     </Grid>
//     </div>
//   );
// }