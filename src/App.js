import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import requestProducts from './utils/request';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await requestProducts();
      const {items} = results;
      setProducts(items);
    };
    fetchProducts();
  }, []);

  return (
    <main>
      <Navbar />
      <Filter />
    </main>
  );
}

export default App;
