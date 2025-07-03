// App.jsx
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import CategoryCard from './components/categoryCard';
import categories from './data/categories';
import GalleryPage from './components/GalleryPage';
import { Container, Grid } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(`/category/${path}`);
  }

  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {categories.map((cat) => (
            <Grid item xs={12} sm={6} md={4} key={cat.id}>
              <CategoryCard category={cat} onClick={handleCategoryClick} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryPath" element={<GalleryPage />} />
    </Routes>
  );
}
