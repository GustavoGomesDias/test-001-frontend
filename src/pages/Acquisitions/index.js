import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import { Container, Header } from '../../styles/GlobalStyles';
import Background from '../../components/Background';
import { AcContainer } from './styled';
import axios from '../../config/axios';

export default function Acquisitions() {
  const [acquisitions, setAcquisitions] = useState([]);
  const [available, setAvailable] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [id, setId] = useState(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    async function getAcquisitions() {
      const response = await axios.get('/acquisition');
      setAcquisitions(response.data);
      document.title = 'Compras';
    }

    getAcquisitions();
  }, []);

  function handleAvaliable() {
    if (available === false) setAvailable(!available);
    const arr = [];
    acquisitions.map((ac) => (ac.available ? arr.push(ac) : arr));
    setVehicles(arr);
  }

  function handleSolds() {
    if (available === false) setAvailable(!available);
    const arr = [];
    acquisitions.map((ac) => (!ac.available ? arr.push(ac) : arr));
    setVehicles(arr);
  }

  async function deleteVehicle(vehicleId, e) {
    e.preventDefault();
    try {
      await axios.delete(`/acquisition/delete/${vehicleId}`);
      toast.success('Deletado com sucesso!');
      window.location.reload();
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  function handleSale(vehicleId) {
    setId(vehicleId);
    setRender(!render);
  }

  return (
    <Container>
      <Background id={id} isRender={render} />
      <Header>
        <h1>Compras</h1>
        <div className="button-actions">
          <Link to="/register/acquisition" className="register">
            Cadastrar compra
          </Link>
          <button type="button" className="available" onClick={handleAvaliable}>
            Mostrar disponíveis
          </button>
          <button type="button" className="available" onClick={handleSolds}>
            Mostrar Vendidos
          </button>
          <button
            type="button"
            className="available"
            onClick={() => setAvailable(false)}
          >
            Mostrar todos
          </button>
        </div>
      </Header>

      <AcContainer>
        {(available ? vehicles : acquisitions).map((ac) => (
          <div key={ac.id} className="items">
            <h3 className="header">{ac.model}</h3>
            <div className="infos">
              <p className="center">
                <span
                  className={
                    ac.available ? 'field available' : 'field not-available'
                  }
                >
                  {ac.available ? 'Disponível' : 'Não disponível'}
                </span>
              </p>
              <p>
                <span className="field description">Preço</span> {ac.price}
              </p>

              <p>
                <span className="field description">Marca</span> {ac.brand}
              </p>

              <p>
                <span className="field description">Placa</span> {ac.plate}
              </p>

              <p>
                <span className="field description">Chassi</span>{' '}
                {ac.chassis.toUpperCase()}
              </p>

              <p>
                <span className="field description">Cor</span>
                {ac.color}
              </p>

              <p>
                <span className="field description">Ano de fabricação</span>{' '}
                {ac.manufacture_year}
              </p>
              <div className="actions">
                {ac.available ? (
                  <button
                    type="button"
                    className="sale-button"
                    onClick={() => handleSale(ac.id)}
                  >
                    Vender
                  </button>
                ) : (
                  <p className="center">
                    <span className="field available">Vendido</span>
                  </p>
                )}

                <Link
                  to={{
                    pathname: `edit/acquisition`,
                    state: { ac },
                  }}
                  className="link"
                >
                  <button type="button" className="edit-button">
                    Editar
                  </button>
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
          </div>
        ))}
      </AcContainer>
    </Container>
  );
}
