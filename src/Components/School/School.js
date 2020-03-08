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
        name: '',
    }

    async handleStartDateChange(startDate) {
        if (startDate > this.state.endDate) {
            // make it so that start date cannot be after the end date
            await this.setState({ ...this.state, endDate: startDate, startDate });

        } else {
            await this.setState({ ...this.state, startDate });
        }

        const id = this.props.id.toString();
        const schoolChange = {
            id,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            awards: this.state.awards,
            name: this.state.name,
        };
        await this.props.handleChange(1, schoolChange);
    }

    async handleEndDateChange(endDate) {
        if (endDate < this.state.startDate) {
            // make it so that end date cannot be before the start date
            await this.setState({ ...this.state, startDate: endDate, endDate});
        } else {
            await this.setState({ ...this.state, endDate });
        }
        const id = this.props.id.toString();
        const schoolChange = {
            id,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            awards: this.state.awards,
            name: this.state.name,
        };
        await this.props.handleChange(1, schoolChange);
    }

    async handleAwardsChange(awards) {
        await this.setState({ ...this.state, awards });
        const id = this.props.id.toString();
        const schoolChange = {
            id,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            awards: this.state.awards,
            name: this.state.name,
        };
        await this.props.handleChange(1, schoolChange);
    }

    async handleNameChange(e) {
        const name = e.target.value;
        await this.setState({ ...this.state, name });
        const id = this.props.id.toString();
        const schoolChange = {
            id,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            awards: this.state.awards,
            name: this.state.name,
        };
        await this.props.handleChange(1, schoolChange);
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
                onChange={this.handleNameChange.bind(this)}
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
    id: PropTypes.any.isRequired,
  };

export default School;