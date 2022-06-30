import React from 'react';
import Icons from './Icons';

function Navbar() {
  return (
    <nav style={{display: 'flex', flexDirection: 'row', gap: '10px'}} >
      <img src={require('../logo.png')} alt='logo' width='108px' height='30px'/>
      <a href='/clube'>Clube</a>
      <a href='/loja'>Loja</a>
      <a href='/produtores'>Produtores</a>
      <a href='/ofertas'>Ofertas</a>
      <a href='/eventos'>Eventos</a>
      <Icons />
    </nav>
  );
}

export default Navbar;
