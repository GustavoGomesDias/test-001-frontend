import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Background } from './styled';
import SaleForm from '../../pages/SaleForm';

export default function BackgroundComponent({ id }) {
  const [vehicle, setVehicle] = useState(0);
  const [render, setRender] = useState(true);

  console.log(render);

  useEffect(() => {
    function handleRender() {
      setVehicle(id);
      setRender(true);
    }

    handleRender();
  }, [id]);

  if (id === 0 || render === false) {
    return <></>;
  }

  return (
    <Background className="bg">
      <div />
      <div className="gamb">
        <SaleForm id={vehicle} />
        <button type="button" className="back" onClick={() => setRender(false)}>
          Voltar
        </button>
      </div>
    </Background>
  );
}

BackgroundComponent.defaultProps = {
  id: 0,
};

BackgroundComponent.propTypes = {
  id: PropTypes.number,
};
