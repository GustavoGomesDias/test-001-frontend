import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { useHistory } from 'react-router-dom';

import { Container, Header, Form } from '../../styles/GlobalStyles';
import axios from '../../config/axios';
import { validationField } from '../../validations/validations';

export default function SaleForme({ location }) {
  const vehicle = location.state;

  const [value, setValue] = useState(0);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (validationField(value)) {
      formErrors = true;
      toast.error('Todos os campos precisam ser preenchindos.');
    }

    if (formErrors) return;

    try {
      const { id } = vehicle.ac;
      await axios.post('/sales', {
        acquisition_id: id,
        value,
      });
      toast.success('Vendido com sucesso.');
      history.push('/acquisitions');
    } catch (err) {
      console.log(err);

      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <Header>
        <h1>Vender um veículo</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="price">
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

SaleForme.defaultProps = {
  location: {
    pathname: '',
  },
};

SaleForme.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.object),
  }),
};
