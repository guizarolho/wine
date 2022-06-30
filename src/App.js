import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Card from './components/Card';
import requestProducts from './utils/request';
import './index.css';

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

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Filter />
      {products.map((e, index) => <Card key={index} element={e} />)}
    </main>
  );
}

export default App;
