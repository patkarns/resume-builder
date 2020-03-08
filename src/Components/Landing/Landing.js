import React from 'react';
import HelloTech from '../../helloTech_logo.png';
import { Container, Button, Grid } from '@material-ui/core';

import './styles.css';

class Landing extends React.Component {

    render() {
      return (<Container>
          <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
          <h1 style = {{letterSpacing: 10, textAlign: 'center' }}>  WELCOME TO YOUR PERSONALIZED RESUME BUILDER! </h1>
          <img style={{ display: 'block', margin: '0 auto', paddingBottom: 40}} src={HelloTech} alt='helloTech logo'></img>
          <Grid container justify='center'>
          <Button variant='outline' size='large' onClick={this.props.onClick}>Start</Button>
          </Grid>
          </div>
    </Container>);
    }
}

export default Landing;