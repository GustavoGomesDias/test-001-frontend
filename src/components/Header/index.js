import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Healder() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/acquisitions">Compras</Link>
      <Link to="/sales">Vendas</Link>
    </Nav>
  );
}
