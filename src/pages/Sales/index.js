import React, { useState, useEffect } from 'react';

import { Container, Header } from '../../styles/GlobalStyles';
import axios from '../../config/axios';
import { SaleContainer } from './styled';

export default function Sales() {
  const [sales, setSales] = useState([]);
  // const [date, setDate] = useState('');

  function formatDate(dateHeader) {
    const fullDate =
      new Date(dateHeader).getDate() < 10
        ? ` 0${new Date(dateHeader).getDate()}/`
        : ` ${new Date(dateHeader).getDate()}/${
            new Date(dateHeader).getMonth() + 1 < 10
              ? `0${new Date(dateHeader).getMonth() + 1}`
              : new Date(dateHeader).getMonth() + 1
          }/${new Date(dateHeader).getFullYear()}`;
    return fullDate;
  }

  useEffect(() => {
    async function getSales() {
      const response = await axios.get('/sales');
      setSales(response.data);
      document.title = 'Vendas';
    }

    getSales();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Histórico de veículos vendidos</h1>
      </Header>
      <SaleContainer>
        {sales.map((sale) => (
          <div key={sale.id} className="items">
            <h3 className="header">{formatDate(sale.created_at)}</h3>
            <div className="infos">
              <p>
                <span className="field description">Valor da venda</span>{' '}
                {sale.value}
              </p>
              <p>
                <span className="field description">Comissão do vendedor</span>{' '}
                {sale.commission}
              </p>
              <p>
                <span className="field description">Chassi do veículo</span>{' '}
                {sale.Acquisition.chassis}
              </p>
              <p>
                <span className="field description">
                  Preço de aquisição do veículo
                </span>{' '}
                R$ {sale.Acquisition.price}
              </p>
            </div>
          </div>
        ))}
      </SaleContainer>
    </Container>
  );
}
