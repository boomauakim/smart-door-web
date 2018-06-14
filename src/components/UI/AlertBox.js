import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  background: #02c5ff;
  border-radius: 10px;
  padding: 5vh 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;
  margin: 10px:
`;

const alertBox = props => (
  <Wrapper>
    <Title>{props.msg}</Title>
    <Button color="white" onClick={props.hideResult}>
      OK
    </Button>
  </Wrapper>
);

alertBox.propTypes = {
  msg: PropTypes.string.isRequired,
  hideResult: PropTypes.func.isRequired
};

export default alertBox;
