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
