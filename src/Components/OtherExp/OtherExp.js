import React from 'react';
import {TextField, Container, } from '@material-ui/core';
import {MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Grid from '@material-ui/core/Grid';

import './styles.css';

class OtherExp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(),
        endDate: new Date(),
      }
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

  render() {
    return ( <Container>
    <Grid container spacing={3}>
     <Grid item xs={6}>
      <TextField
        id='outlined-basic'
        variant='outlined'
        label = 'Company name'
      />
      </Grid>
      <Grid item xs={6}>
      <TextField
        id='outlined-basic'
        variant='outlined'
        label = 'Job name'
      />
      </Grid>

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid item xs={6}>
        <DatePicker
          disableToolbar
          variant="inline"
          margin="normal"
          inputVariant="outlined"
          id="date-picker-inline"
          onChange={this.handleStartDateChange.bind(this)}
          label="Start date"
          value={this.state.startDate}
        />
        </Grid>
        <Grid item xs={6}>
        <DatePicker
          disableToolbar
          variant="inline"
          margin="normal"
          inputVariant="outlined"
          id="date-picker-inline"
          onChange={this.handleEndDateChange.bind(this)}
          label="End date"
          value={this.state.endDate}
        />
        </Grid>

      </MuiPickersUtilsProvider>
      <Grid item xs={12}>
      <TextField
        fullWidth
        id="standard-multiline-flexible"
        variant='outlined'
        label='Main responsibilites/achievements'
        multiline
        rowsMax="4"
      />
      </Grid>
      </Grid>
      <br/>
      <br/>
    </Container>
    )
  }
}

export default OtherExp;
