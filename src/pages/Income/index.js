import React, { useEffect, useState } from 'react';

import { Container, Header } from '../../styles/GlobalStyles';
import { Section } from './styled';
import axios from '../../config/axios';

export default function Component() {
  const [acquisition, setAcquisition] = useState(0);
  const [commission, setCommission] = useState(0);
  const [income, setIncome] = useState(0);
  const [sale, setSale] = useState(0);
  useEffect(() => {
    async function getIncome() {
      const response = await axios.get('/income');

      const { acquisitions, commissions, sales } = response.data;

      setAcquisition(acquisitions);
      setCommission(commissions);
      setIncome(response.data.income);
      setSale(sales);
    }

    getIncome();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Receita do mês</h1>
      </Header>
      <Section>
        <div className="items">
          <h3 className={income < 0 ? 'header loss' : 'header profit'}>
            {income < 0 ? 'Prejuízo' : 'Lucro'}
          </h3>

          <div className="infos">
            <p>
              <span className="field description">Compras</span> R${' '}
              {acquisition.toFixed(2)}
            </p>
            <p>
              <span className="field description">Vendas</span> R${' '}
              {sale.toFixed(2)}
            </p>
            <p>
              <span className="field description">Commissão</span> R${' '}
              {commission.toFixed(2)}
            </p>
            <p className={income < 0 ? 'loss' : 'profit'}>
              <span className="field description">Receita</span> R${' '}
              {income.toFixed(2)}
            </p>
          </div>
        </div>
      </Section>
    </Container>
  );
}
