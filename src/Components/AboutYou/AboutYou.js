import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Grid } from '@material-ui/core';

import './styles.css';

class AboutYou extends React.Component {

    render() {
      return (
        <Container>
            <h4 style = {{fontStyle: 'italic', letterSpacing: 3, color: '#A187E8', paddingBottom: 30}}>“Optimism is the faith that leads to achievement.” ~ Helen Keller</h4>
            <h1 style = {{letterSpacing: 10}}> ❦ ABOUT YOU</h1>
            <h3>Let's get started! First, let's get to know you a little.</h3>
            <h4 style = {{fontStyle: 'italic', color: '#A187E8'}}>Tips: Use a professional sounding email. Only include your GitHub if you're prepared for employers to look at it. Make sure that your LinkedIn profile is up to date.</h4>
            <Grid container spacing={2}>
            <Grid item>
                <TextField
                    id='name'
                    label='Name'
                    variant='outlined'
                    onChange={this.props.handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='email'
                    label='Email'
                    variant='outlined'
                    onChange={this.props.handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='phone'
                    label='Phone'
                    variant='outlined'
                    onChange={this.props.handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='github'
                    label='Github'
                    variant='outlined'
                    onChange={this.props.handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='linkedin'
                    label='LinkedIn Profile'
                    variant='outlined'
                    onChange={this.props.handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id='personal_website'
                    label='Personal Website'
                    variant='outlined'
                    onChange={this.props.handleChange}
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