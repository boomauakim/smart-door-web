import React, { Component } from 'react';
import styled from 'styled-components';

import Backdrop from '../components/UI/Backdrop';
import Door from '../components/Door/Door';
import Rfid from '../components/Rfid/Rfid';

const Title = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 2.25rem;
  letter-spacing: 3px;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class SmartDoor extends Component {
  state = {
    result: false,
    resultMsg: '',
    lock: false
  };

  showResult = msg => {
    this.setState({
      result: true,
      resultMsg: msg
    });
  };

  hideResult = () => {
    this.setState({
      result: false,
      resultMsg: ''
    });
  };

  toggleDoorLock = () => {
    this.setState({
      lock: !this.state.lock
    });
  };

  render() {
    return (
      <Wrapper>
        <Backdrop
          show={this.state.result}
          msg={this.state.resultMsg}
          hideResult={this.hideResult}
        />
        <Title>SMART DOOR</Title>
        <Door
          showResult={this.showResult}
          toggleDoorLock={this.toggleDoorLock}
          lock={this.state.lock}
        />
        <Rfid showResult={this.showResult} />
      </Wrapper>
    );
  }
}

export default SmartDoor;
