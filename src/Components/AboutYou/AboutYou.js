import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Grid } from '@material-ui/core';

import './styles.css';

class AboutYou extends React.Component {

    render() {
      return (
        <Container>
            <h1> About You </h1>
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