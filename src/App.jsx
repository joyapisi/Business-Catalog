import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CategoriesPage from "./pages/CategoriesPage";
import GalleryPage from "./pages/galleryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/category/:categoryPath" element={<GalleryPage />} />
    </Routes>
  );
}

