import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Grid } from '@material-ui/core';

import './styles.css';

class AboutYou extends React.Component {

    render() {
      return (
        <Container>
            <h1 style = {{letterSpacing: 10}}> ❦ ABOUT YOU</h1>
            <h3>Let's get started! First, let's get to know you a little.</h3>
            <Grid container spacing={2}>
            <Grid item>
                <TextField
                    id='name'
                    label='Name'
                    variant='outlined'
                    onChange={(e) => this.props.handleChange(0, { name: e.target.value })}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='email'
                    label='Email'
                    variant='outlined'
                    onChange={(e) => this.props.handleChange(0, { email: e.target.value })}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='phone'
                    label='Phone'
                    variant='outlined'
                    onChange={(e) => this.props.handleChange(0, { phone: e.target.value })}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='github'
                    label='Github'
                    variant='outlined'
                    onChange={(e) => this.props.handleChange(0, { github: e.target.value })}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='linkedin'
                    label='LinkedIn Profile'
                    variant='outlined'
                    onChange={(e) => this.props.handleChange(0, { linkedin: e.target.value })}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='personal_website'
                    label='Personal Website'
                    variant='outlined'
                    onChange={(e) => this.props.handleChange(0, { website: e.target.value })}
                />
            </Grid>
        </Grid>
        </Container>
    );
}
}

  AboutYou.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default AboutYou;