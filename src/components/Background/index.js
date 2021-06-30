import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Background } from './styled';
import SaleForm from '../../pages/SaleForm';

export default function BackgroundComponent({ isRender, id }) {
  const [vehicle, setVehicle] = useState(0);
  const [render, setRender] = useState(true);

  useEffect(() => {
    function handleRender() {
      setVehicle(id);
      setRender(isRender);
    }

    handleRender();
  }, [isRender, id]);

  if (id === 0 || render === false) {
    return <></>;
  }

  return (
    <Background className="bg">
      <div />
      <div className="sale">
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
BackgroundComponent.defaultProps = {
  isRender: false,
};

BackgroundComponent.propTypes = {
  id: PropTypes.number,
};

BackgroundComponent.propTypes = {
  isRender: PropTypes.bool,
};
