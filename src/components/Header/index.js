import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Healder() {
  const [active, setActive] = useState(false);

  return (
    <Nav>
      <nav>
        <div
          className="mobile"
          onClick={() => setActive(!active)}
          onKeyDown={() => setActive(!active)}
          role="button"
          tabIndex={0}
        >
          <div />
          <div />
          <div />
        </div>

        <ul className={active ? 'nav-list active' : 'nav-list'}>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/acquisitions">
              Compras
            </Link>
          </li>
          <li>
            <Link className="link" to="/sales">
              Vendas
            </Link>
          </li>
          <li>
            <Link className="link" to="/income">
              Receita
            </Link>
          </li>
        </ul>
      </nav>
    </Nav>
  );
}
