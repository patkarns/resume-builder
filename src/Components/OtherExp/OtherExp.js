import React from 'react';
import Proptypes from 'prop-types';
import {TextField, Container, } from '@material-ui/core';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import Columns from 'react-columns';
import Grid from '@material-ui/core/Grid';

import './styles.css';

class OtherExp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
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
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start date"
        />
        </Grid>
        <Grid item xs={6}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End date"
        />
        </Grid>

      </MuiPickersUtilsProvider>
      <Grid item xs={12}>
      <TextField
        fullWidth
        id="standard-multiline-flexible"
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
