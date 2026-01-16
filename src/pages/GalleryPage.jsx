import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import categories from "../data/categories";
import ImagePreviewModal from "../components/ImagePreviewModal";
import ChatButton from "../components/ChatButton";
import { useState } from "react";

export default function GalleryPage() {
  const { categoryPath } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const category = categories.find(c => c.path === categoryPath);
  if (!category) return null;

  // load images dynamically
  const MAX_IMAGES = 2000;

  const images = Array.from({ length: MAX_IMAGES }, (_, i) =>
    `/images/${category.path}/${i + 1}.jpg`
  );

  return (
    <Box sx={{ bgcolor: "#5A4636", minHeight: "100vh", pb: 10 }}>
      
      {/* HEADER */}
      <Box sx={{ p: 3, display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: "#fff" }}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <Typography
          sx={{
            ml: 2,
            color: "#fff",
            fontFamily: "serif",
            fontSize: { xs: 22, sm: 26 },
          }}
        >
          Explore <br />
          <strong>{category.title}</strong>
        </Typography>
      </Box>

      {/* GALLERY GRID */}
      <Box
        sx={{
          px: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            sx={{
              width: "100%",
              borderRadius: 2,
              cursor: "pointer",
            }}
            onClick={() => setSelectedImage(img)}
            onContextMenu={(e) => {
              e.preventDefault();
              setSelectedImage(img);
            }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ))}
      </Box>

      <ImagePreviewModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <ChatButton />
    </Box>
  );
}
