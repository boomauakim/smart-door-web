import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AlertBox from './AlertBox';

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
`;

const backdrop = props =>
  props.show ? (
    <div>
      <Backdrop onClick={props.hideResult} />
      <AlertBox msg={props.msg} hideResult={props.hideResult} />
    </div>
  ) : null;

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  hideResult: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired
};

export default backdrop;
