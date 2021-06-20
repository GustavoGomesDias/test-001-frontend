import React, { useState, useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { AcContainer, Header } from './styled';
import axios from '../../config/axios';

export default function Acquisitions() {
  const [acquisitions, setAcquisitions] = useState([]);
  const [available, setAvailable] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function getAcquisitions() {
      const response = await axios.get('/acquisition');
      console.log(response.data);
      setAcquisitions(response.data);
    }

    getAcquisitions();
  }, []);

  function handleAvaliable() {
    setAvailable(!available);
    const arr = [];
    acquisitions.map((ac) => (ac.available ? arr.push(ac) : arr));
    setVehicles(arr);
  }

  return (
    <Container>
      <Header>
        <h1>Compras</h1>
        <div className="button-actions">
          <a href="/register/acquisitins">Cadastrar nova compra</a>
          <button type="button" className="available" onClick={handleAvaliable}>
            Mostrar disponíveis
          </button>
        </div>
      </Header>

      <AcContainer>
        <table>
          <thead>
            <tr>
              <th>Preço</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Placa</th>
              <th>Chassi</th>
              <th>Cor</th>
              <th>Ano de Fabricação</th>
              <th>Disponibilidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {available
              ? vehicles.map((ac) => (
                  <tr key={ac.id}>
                    <td>{ac.price}</td>
                    <td>{ac.brand}</td>
                    <td>{ac.model}</td>
                    <td>{ac.plate}</td>
                    <td>{ac.chassis}</td>
                    <td>{ac.color}</td>
                    <td>{ac.manufacture_year}</td>
                    <td>{ac.available ? 'Disponível' : 'Não disponível'}</td>
                    <td className="actions">
                      <a href="/" className="edit-button">
                        Editar
                      </a>
                      <button type="button" className="delete-button">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
              : acquisitions.map((ac) => (
                  <tr key={ac.id}>
                    <td>{ac.price}</td>
                    <td>{ac.brand}</td>
                    <td>{ac.model}</td>
                    <td>{ac.plate}</td>
                    <td>{ac.chassis}</td>
                    <td>{ac.color}</td>
                    <td>{ac.manufacture_year}</td>
                    <td>{ac.available ? 'Disponível' : 'Não disponível'}</td>
                    <td className="actions">
                      <a href="/" className="edit-button">
                        Editar
                      </a>
                      <button type="button" className="delete-button">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </AcContainer>
    </Container>
  );
}
