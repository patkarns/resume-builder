import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import './styles.css';

class School extends React.Component {
    render() {
      return (
        <div>
            <TextField
            id='school_name'
            label='School Name'
            onChange={this.props.handleChange}
            /><br/><br/>
            <TextField
                id='start_date'
                label='start date'
            />
            <TextField
                id='end_date'
                label='end date'
            />
        </div>
    );
}
}

  School.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default School;