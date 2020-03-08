
import React from 'react';
import PropTypes from 'prop-types';
import { Container, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './styles.css';

class Education extends React.Component {
    render() {
      return <Container>
          <h1 style = {{letterSpacing: 10 }}> ❦ EDUCATION </h1>
          {this.props.schools}
          <IconButton
            onClick={this.props.addSchool}
          >
            <AddCircleIcon />
          </IconButton>
    </Container>
    }
}

  Education.propTypes = {
    handleChange: PropTypes.func.isRequired,
    addSchool: PropTypes.func.isRequired,
  };

export default Education;
