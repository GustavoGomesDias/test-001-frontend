import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Container, Header } from '../../styles/GlobalStyles';
import axios from '../../config/axios';
import { SaleContainer } from './styled';

export default function Sales() {
  const [sales, setSales] = useState([]);

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

  async function deleteSale(saleId, e) {
    e.preventDefault();
    try {
      await axios.delete(`/sales/delete/${saleId}`);
      toast.success('Deletado com sucesso!');
      window.location.reload();
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

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
                <span className="field description">Valor da venda</span> R${' '}
                {sale.value.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>
              <p>
                <span className="field description">Comissão do vendedor</span>{' '}
                R${' '}
                {sale.commission.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>
              <p>
                <span className="field description">Chassi do veículo</span>{' '}
                {sale.Acquisition.chassis}
              </p>
              <p>
                <span className="field description">
                  Preço de aquisição do veículo
                </span>{' '}
                R${' '}
                {sale.Acquisition.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="actions">
                <button
                  type="button"
                  className="delete-button"
                  onClick={(e) => deleteSale(sale.id, e)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </SaleContainer>
    </Container>
  );
}
