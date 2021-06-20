import React, { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

// modelo, marca, ano de fabricação, placa, cor, chassi, data da compra e valor da compra

export default function RegisterAcquisition() {
  const [chassis, setChassis] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [plate, setPlate] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <Container>
      <h1>Registrar Compra</h1>
      <Form>
        <div className="column-1">
          <label htmlFor="chassis">
            Chassi
            <input
              type="text"
              value={chassis}
              onChange={(e) => setChassis(e.target.value)}
              placeholder="Chassi do Carro"
            />
          </label>
          <label htmlFor="model">
            Modelo
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Modelo do Carro"
            />
          </label>
          <label htmlFor="brand">
            Marca
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Marca do Carro"
            />
          </label>

          <label htmlFor="year">
            Ano de fabricação
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Ano de fabricação do Carro"
            />
          </label>
        </div>
        <div className="column-1">
          <label htmlFor="plate">
            Placa
            <input
              type="text"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              placeholder="Placa do Carro"
            />
          </label>
          <label htmlFor="color">
            Cor
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Cor do Carro"
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Preço do Carro"
            />
          </label>
          <button type="submit" className="cofirm-acquisition">
            Cadastrar compra
          </button>
        </div>
      </Form>
    </Container>
  );
}
