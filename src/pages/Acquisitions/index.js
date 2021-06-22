import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';

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

  function handleSolds() {
    setAvailable(!available);
    const arr = [];
    acquisitions.map((ac) => (!ac.available ? arr.push(ac) : arr));
    setVehicles(arr);
  }

  async function deleteVehicle(id, e) {
    e.preventDefault();
    try {
      await axios.delete(`/acquisition/delete/${id}`);
      toast.success('Deletado com sucesso!');
      window.location.reload();
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container className="acquisition">
      <Header>
        <h1>Compras</h1>
        <div className="button-actions">
          <Link to="/register/acquisition" className="register">
            Cadastrar nova compra
          </Link>
          <button type="button" className="available" onClick={handleAvaliable}>
            Mostrar disponíveis
          </button>
          <button type="button" className="available" onClick={handleSolds}>
            Mostrar Vendidos
          </button>
        </div>
      </Header>

      <AcContainer>
        {(available ? vehicles : acquisitions).map((ac) => (
          <div key={ac.id} className="items">
            <p>Preço: {ac.price}</p>

            <p>Marca: {ac.brand}</p>

            <p>Modelo: {ac.model}</p>

            <p>Placa: {ac.plate}</p>

            <p>Chassi: {ac.chassis}</p>

            <p>Cor: {ac.color}</p>

            <p>Ano de fabricação: {ac.manufacture_year}</p>

            <p>{ac.available ? 'Disponível' : 'Não disponível'}</p>
            <div className="actions">
              <Link
                to={{
                  pathname: `edit/acquisition`,
                  state: { ac },
                }}
                className="edit-button"
              >
                Editar
              </Link>
              <button
                type="button"
                className="delete-button"
                onClick={(e) => deleteVehicle(ac.id, e)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </AcContainer>
    </Container>
  );
}
