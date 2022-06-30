const requestProducts = async () => {
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json; charset=utf-8'},
  };
  const products = fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10', options)
      .then((response) => response.json())
      .then((data) => data);

  return products;
};

export default requestProducts;
