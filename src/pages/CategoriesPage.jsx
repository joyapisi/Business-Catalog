import { Container, Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "C:/Users/lenovo/Documents/Business-Catalog/src/components/Footer.jsx";
import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";

export default function CategoriesPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#5A4636", // SAME brown as gallery
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* PAGE TITLE (replaces Header) */}
      <Box
        sx={{
          pt: 6,
          pb: 4,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif", // same as Gallery
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            letterSpacing: "0.15em",
            color: "#F5F1EC",
            textTransform: "uppercase",
            textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Explore Product Catalog
        </Typography>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          px: { xs: 2, sm: 4 },
          flexGrow: 1,
        }}
      >
        <Grid container spacing={3} justifyContent="space-around">
          {categories.map((cat) => (
            <Grid item xs={12} sm={6} md={4} key={cat.id}>
              <CategoryCard
                category={cat}
                onClick={(path) => navigate(`/category/${path}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
