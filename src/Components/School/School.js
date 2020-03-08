import React from 'react';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import { TextField, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import './styles.css';

class School extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        awards: '',
    }

    handleStartDateChange(startDate) {
        if (startDate > this.state.endDate) {
            // make it so that start date cannot be after the end date
            this.setState({ ...this.state, endDate: startDate, startDate });
        } else {
            this.setState({ ...this.state, startDate });
        }
    }

    handleEndDateChange(endDate) {
        if (endDate < this.state.startDate) {
            // make it so that end date cannot be before the start date
            this.setState({ ...this.state, startDate: endDate, endDate});
        } else {
            this.setState({ ...this.state, endDate });
        }
    }

    handleAwardsChange(awards) {
        this.setState({ ...this.state, awards });
    }

    render() {
      return (
        <div className='school_info'>
        <Grid container direction='row' alignItems='stretch' spacing={3}>
        <Grid item xs={12}>
            <TextField
                id='school_name'
                label='School Name'
                variant='outlined'
                onChange={this.props.handleChange}
            />
        </Grid>
        <Grid item>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        disableToolbar
                        id='start_date'
                        label='Start Date'
                        variant="inline"
                        inputVariant="outlined"
                        onChange={this.handleStartDateChange.bind(this)}
                        value={this.state.startDate}
                    />
                </MuiPickersUtilsProvider>
        </Grid>
        <Grid item>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    disableToolbar
                    id='end_date'
                    label='End Date'
                    variant="inline"
                    inputVariant="outlined"
                    onChange={this.handleEndDateChange.bind(this)}
                    value={this.state.endDate}
                />
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
            <TextField
                id="awards"
                label="Awards"
                multiline
                rows="2"
                onChange={this.handleAwardsChange.bind(this)}
                variant="outlined"
            />
        </Grid>
      </Grid>
        </div>
    );
}
}

  School.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default School;