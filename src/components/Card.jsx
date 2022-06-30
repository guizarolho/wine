import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddButton = styled.button`
  background: palevioletred
`;

function Card(props) {
  // const element = require('../mocks/mockwine.json');
  const {element} = props;
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return (
    <>
      <div>
        <img src={element.image} />
        <h3>{element.name}</h3>
        <h6>SÓCIO WINE {formatter.format(element.priceMember)}</h6>
        <h6>NÃO SÓCIO {formatter.format(element.priceNonMember)}</h6>
      </div>
      <AddButton>
        Adicionar
      </AddButton>
    </>
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
