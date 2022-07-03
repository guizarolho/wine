import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Card from './components/Card';
import requestProducts from './utils/request';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState('');
  const [range, setRange] = useState('');

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

  function filterRange(element) {
    switch (range) {
      case '40':
        return element.price <= 40;
      case '40-60':
        return element.price > 40 && element.price < 60;
      case '60-100':
        return element.price > 60 && element.price < 100;
      case '100-200':
        return element.price > 100 && element.price < 200;
      case '200-500':
        return element.price > 200 && element.price < 500;
      case '>500':
        return element.price >= 500;
      default:
        return true;
    }
  }


  return (
    <main>
      <Navbar func={setText}/>
      <section style={{'display': 'flex', 'flexDirection': 'row'}}>
        <Filter func={setRange} range={range}/>
        <div style={{
          'display': 'grid',
          'gridTemplateColumns': 'auto auto auto',
          'gap': '15px',
        }}>
          {products
              .filter((e) => filterRange(e))
              .filter(({name}) => (name.toLowerCase())
                  .includes(text.toLowerCase()))
              .map((e, index) => <Card key={index} element={e} />)}
        </div>
      </section>
    </main>
  );
}

export default App;
