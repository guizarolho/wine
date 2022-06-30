import React from 'react';
import Icons from './Icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-bottom-width: 4px;
  border-bottom-color: grey;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: grey;
  line-height: 24px;
`;

function Navbar(props) {
  const {func} = props;
  return (
    <Nav>
      <img src={require('../logo.png')} alt='logo' width='108px' height='30px'/>
      <Anchor href='/clube'>Clube</Anchor>
      <Anchor href='/loja'>Loja</Anchor>
      <Anchor href='/produtores'>Produtores</Anchor>
      <Anchor href='/ofertas'>Ofertas</Anchor>
      <Anchor href='/eventos'>Eventos</Anchor>
      <Icons func={func}/>
    </Nav>
  );
}

Navbar.propTypes = {
  func: PropTypes.func.isRequired,
};

export default Navbar;
