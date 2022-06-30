import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Card from './components/Card';
import requestProducts from './utils/request';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState('');

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
      <Navbar func={setText}/>
      <section style={{'display': 'flex', 'flexDirection': 'row'}}>
        <Filter />
        <div style={{
          'display': 'grid',
          'gridTemplateColumns': 'auto auto auto',
          'gap': '15px',
        }}>
          {products
              .filter((e) => (e.name.toLowerCase())
                  .includes(text.toLowerCase()))
              .map((e, index) => <Card key={index} element={e} />)}
        </div>
      </section>
    </main>
  );
}

export default App;
