/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import { Background } from './styled';

export default function BackgroundComponent(props) {
  return (
    <Background className="bg">
      <div />
      <div className="sale">
        {props.children}
        <button type="button" className="back" onClick={() => props.onRender()}>
          Voltar
        </button>
      </div>
    </Background>
  );
}

BackgroundComponent.propTypes = {
  onRender: PropTypes.func.isRequired,
};

BackgroundComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
