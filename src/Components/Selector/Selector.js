
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import './styles.css';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Selector extends React.Component {
    state={
        haveSelectedOption: false,
        selectedOptions: [],
    }

    render() {
      return (<Autocomplete
            key={this.state.haveSelectedOption}
            freeSolo
            value={null}
            options={this.props.options}
            onChange={this.handleChange.bind(this)}
            clearOnEscape={true}
            renderInput={(params) => <TextField {...params} label={this.props.label} variant="outlined" />}
          />);
    }

    handleChange(event, option) {
        if (!option || option.length === 0 || this.state.selectedOptions.indexOf(option.toLowerCase().trim()) >= 0) {
            // don't allow a selection of null, empty string, or an already selected option
            return;
        }
        this.setState({
          ...this.state,
          haveSelectedOption: !this.state.haveSelectedOption,
          selectedOptions: [...this.state.selectedOptions, option.toLowerCase().trim()],
      });
        this.props.onOptionSelect(option);
    }
}

  Selector.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onOptionSelect: PropTypes.func.isRequired,
  };

export default Selector;