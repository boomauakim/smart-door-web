import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from '../UI/Box';
import Button from '../UI/Button';

class Door extends Component {
  openDoor = () => {
    this.props.showResult('THE DOOR IS OPENED !');
  };

  lockDoor = () => {
    this.props.toggleDoorLock();
    if (this.props.lock) {
      this.props.showResult('THE DOOR IS UNLOCKED !');
    } else {
      this.props.showResult('THE DOOR IS LOCKED !');
    }
  };

  render() {
    return (
      <Box title="DOOR">
        <Button color="green" onClick={this.openDoor}>
          OPEN
        </Button>
        <Button color="red" onClick={this.lockDoor}>
          {this.props.lock ? 'UNLOCK' : 'LOCK'}
        </Button>
      </Box>
    );
  }
}

Door.propTypes = {
  showResult: PropTypes.func.isRequired,
  toggleDoorLock: PropTypes.func.isRequired,
  lock: PropTypes.bool
};

Door.defaultProps = {
  lock: false
};

export default Door;
