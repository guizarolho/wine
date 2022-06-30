import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddButton = styled.button`
  background: yellowgreen;
  color: white;
  border: none;
  &:hover {
    background: green;
    transition: all 0.2s ease-in-out;  
  };
  &:active {
    background: lightgrey;
    color: grey;
    transition: all 0.15s ease-in-out;  
  };
`;

const PriceTag = styled.h6`
  color: mediumvioletred;
`;

function Card(props) {
  // const element = require('../mocks/mockwine.json');
  const {element} = props;
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex((item) => item.produto == element.name);
    if (index < 0) {
      cart.push({produto: element.name, quantidade: 1});
      return localStorage.setItem('cart', JSON.stringify(cart));
    };
    cart[index].quantidade += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div style={{
      'display': 'flex',
      'flexDirection': 'column',
      'justifyContent': 'center',
      'alignSelf': 'center',
    }}>
      <div style={{
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
      }}>
        <img src={element.image} height='40%' width='40%'/>
        <h5>{element.name}</h5>
        <PriceTag>SÓCIO WINE {formatter.format(element.priceMember)}</PriceTag>
        <h6>NÃO SÓCIO {formatter.format(element.priceNonMember)}</h6>
      </div>
      <AddButton onClick={() => addToCart()}>
        ADICIONAR
      </AddButton>
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    priceMember: PropTypes.number,
    priceNonMember: PropTypes.number,
  }).isRequired,
};

export default Card;
