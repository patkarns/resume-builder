
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Container } from '@material-ui/core';

import './styles.css';

class Education extends React.Component {
    render() {
      return <Container>
          <h1> This is the Education page</h1>
          <Input onChange={this.props.handleChange}></Input>
    </Container>
    }
  }
  
  Education.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default Education;
