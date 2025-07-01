import Header from './components/header';
import Footer from './components/footer';
import CategoryCard from './components/categoryCard';
import categories from './data/categories';

export default function App() {
  return (
    <>
      <Header />
      {categories.map(cat => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
      <Footer />
    </>
  );
}
