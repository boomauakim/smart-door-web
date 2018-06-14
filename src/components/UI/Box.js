import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 1px 20px 0 rgba(157, 157, 157, 0.3);
  border-radius: 10px;
  padding: 5vh 6vw;
  margin: 10px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  color: #5d5d5d;
  text-align: center;
  margin: 0px 2px 10px;
`;

const box = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
);

box.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired
};

export default box;
