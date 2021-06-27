import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Container, Form } from '../../styles/GlobalStyles';
import axios from '../../config/axios';
import { validationField } from '../../validations/validations';

export default function SaleForm({ id }) {
  const [value, setValue] = useState(0);
  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (validationField(value) || value === 0) {
      formErrors = true;
      toast.error('Todos os campos precisam ser preenchindos.');
    }

    if (formErrors) return;

    try {
      await axios.post('/sales', {
        acquisition_id: id,
        value,
      });
      toast.success('Vendido com sucesso.');
      window.location.reload();
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container className="saleform">
      <Form onSubmit={handleSubmit}>
        <label htmlFor="price" className="full">
          Preço de venda
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Chassi do Carro"
          />
        </label>

        <button type="submit" className="cofirm-acquisition">
          Vender
        </button>
      </Form>
    </Container>
  );
}

SaleForm.defaultProps = {
  id: 0,
};

SaleForm.propTypes = {
  id: PropTypes.number,
};
