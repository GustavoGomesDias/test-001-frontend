import React, { useState, useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../config/axios';
import { SaleContainer, Header } from './styled';

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
              <p>Valor da venda: {sale.value}</p>
              <p>Comissão do vendedor: {sale.commission}</p>
              <p>Chassis do veículo: {sale.Acquisition.chassis}</p>
              <p>Prço de aquisição do veículo: R$ {sale.Acquisition.price}</p>
            </div>
          </div>
        ))}
      </SaleContainer>
    </Container>
  );
}
