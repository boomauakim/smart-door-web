import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const buttonColor = color => {
  switch (color) {
    case 'red':
      return '#FD6E6E';
    case 'green':
      return '#16d493';
    case 'white':
      return '#FFFFFF';
    default:
      return '#FFFFFF';
  }
};

const buttonHoverColor = color => {
  switch (color) {
    case 'red':
      return '#E96363';
    case 'green':
      return '#18c58a';
    case 'white':
      return '#F3F3F3';
    default:
      return '#FFFFFF';
  }
};

const Button = styled.button`
  background: ${props => buttonColor(props.color)};
  border: none;
  border-radius: 40px;
  box-sizing: border-box;
  width: 100%;
  color: ${props => (props.color === 'white' ? '#000000' : '#FFFFFF')};
  cursor: pointer;
  font-size: 0.8rem;
  font-family: inherit;
  width: 200px;
  height: 40px;
  margin: 8px;
  text-align: center;
  outline: none;
  &:hover {
    background: ${props => buttonHoverColor(props.color)};
  }
`;

const button = props => <Button {...props}>{props.children}</Button>;

button.propTypes = {
  children: PropTypes.string.isRequired
};

export default button;
