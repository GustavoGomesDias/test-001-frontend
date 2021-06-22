import React, { useState, useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../config/axios';
import { SaleContainer, Header } from './styled';

export default function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getSales() {
      const response = await axios.get('/sales');
      setSales(response.data);
    }

    getSales();
  }, []);

  console.log(sales);

  return (
    <Container>
      <Header>
        <h1>
          <h1>Histórico de veículos vendidos</h1>
        </h1>
      </Header>
      <SaleContainer>
        {sales.map((sale) => (
          <div key={sale.id} className="items">
            <p>Valor da venda: {sale.value}</p>
            <p>Comissão do vendedor: {sale.commission}</p>
            <p>Chassis do veículo: {sale.Acquisition.chassis}</p>
            <p>Prço de aquisição do veículo: R$ {sale.Acquisition.price}</p>
            <p>
              Data da venda:
              {new Date(sale.created_at).getDate() < 10
                ? `0${new Date(sale.created_at).getDate()}/`
                : `${new Date(sale.created_at).getDate()}/${
                    new Date(sale.created_at).getMonth() + 1 < 10
                      ? `0${new Date(sale.created_at).getMonth() + 1}`
                      : new Date(sale.created_at).getMonth() + 1
                  }/${new Date(sale.created_at).getFullYear()}`}
            </p>
          </div>
        ))}
      </SaleContainer>
    </Container>
  );
}
