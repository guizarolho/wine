import React from 'react';
import Icons from './Icons';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-bottom-width: 4px;
  border-bottom-color: grey;
`;

function Navbar() {
  return (
    <Nav>
      <img src={require('../logo.png')} alt='logo' width='108px' height='30px'/>
      <a href='/clube'>Clube</a>
      <a href='/loja'>Loja</a>
      <a href='/produtores'>Produtores</a>
      <a href='/ofertas'>Ofertas</a>
      <a href='/eventos'>Eventos</a>
      <Icons />
    </Nav>
  );
}

export default Navbar;
