import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from '../UI/Box';
import Button from '../UI/Button';

class Rfid extends Component {
  addRfid = () => {
    this.props.showResult('PLEASE TOUCH RFID TAG !');
  };

  removeRfid = () => {
    this.props.showResult('PLEASE TOUCH RFID TAG !');
  };

  render() {
    return (
      <Box title="RFID Tag">
        <Button color="green" onClick={this.addRfid}>
          ADD
        </Button>
        <Button color="red" onClick={this.removeRfid}>
          REMOVE
        </Button>
      </Box>
    );
  }
}

Rfid.propTypes = {
  showResult: PropTypes.func.isRequired
};

export default Rfid;
