import { useParams, Link } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

export default function GalleryPage() {
  const { categoryPath } = useParams();

  const imageCount = 200;
  const images = Array.from(
    { length: imageCount },
    (_, i) => `/images/${categoryPath}/${i + 1}.jpg`
  );

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Link
        to="/"
        style={{ position: "fixed", top: 20, left: 20, zIndex: 1000 }}
      >
        <IconButton
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Link>

      <Typography variant="h4" sx={{ mb: 3, ml: 8, pt: 6 }}>
        {categoryPath.replace(/-/g, " ").toUpperCase()}
      </Typography>

      <Grid container spacing={2} wrap="wrap">
        {categoryPath === "wall-murals" && (
          <Typography
            component="ul"
            sx={{
              color: "grey.800",
              textAlign: "left",
              mb: 3,
              ml: 8,
              pt: 6,
              pl: 2,
            }}
          >
            <li>
              All wall murals cost KES 3,000 per meter squared(Everything
              inclusive except transport outside Nairobi). The AREA of your wall
              determines the total cost (Price = 3000 * Area(m²)).Our wall
              murals are customized and printed on quality, washable and
              easy-to-clean canvas.
            </li>
            <li>
              We do site visits for complicated surfaces like staircases or
              ceilings. Whatsapp us on +254 787 292 863.
            </li>
          </Typography>
        )}
        {categoryPath === "wallpapers" && (
          <Typography
            component="ul"
            sx={{
              color: "grey.800",
              textAlign: "left",
              mb: 3,
              ml: 8,
              pt: 6,
              pl: 2,
            }}
          >
            <li>
              All WALL PAPERS cost 2,500 per roll. 1 roll covers an Area of 5m².
              Installation costs 500 per meter squared.
            </li>
            <li>
              We do site visits for complicated surfaces like staircases or
              ceilings. Whatsapp us on +254 787 292 863.
            </li>
          </Typography>
        )}
        ,
        {categoryPath === "wall-stickers" && (
          <Typography
            component="ul"
            sx={{
              color: "grey.800",
              textAlign: "left",
              mb: 3,
              ml: 8,
              pt: 6,
              pl: 2,
            }}
          >
            <li>Clear wall stickers cost 2,000 per meter squared</li>
            <li>Stickers with white background cost 2,500 per meter squared</li>
            <li>
              Laminated stickes(combines clear sticker and sticker with white
              backgroud) costs 3,000 per meter squared
            </li>
          </Typography>
        )}
        ,
        {categoryPath === "contact-papers" && (
          <Typography
            component="ul"
            sx={{
              color: "grey.800",
              textAlign: "left",
              mb: 3,
              ml: 8,
              pt: 6,
              pl: 2,
            }}
          >
            <li>
              All CONTACT PAPERS cost 2,500 per roll. 1 roll covers an Area of 6m².
              Installation costs 500 per meter squared.
            </li>
            <li>
              We do site visits for complicated surfaces like staircases or
              ceilings. Whatsapp us on +254 787 292 863.
            </li>
          </Typography>
        )}
        ,
        {images.map((src, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <img
              src={src}
              alt={`img-${index}`}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "10px",
              }}
              onError={(e) => (e.target.style.display = "none")}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
