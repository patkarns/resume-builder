import React from 'react'
import Proptypes from 'prop-types'
import { Input, Container, Button } from '@material-ui/core';

import './styles.css'

class Experience extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return ( <Container>
        <div>
        <h1 style = {{letterSpacing: 10 }}> ❦ EXPERIENCE </h1>
        <h3>Where did you previously work? What were your responsibilities, and what were your achievements? </h3>
        <br/>
        <br/>
        </div>
        <div>
        <h2> Technical experience </h2>
        {this.props.TechExp}
        <br/>
        <br/>
        <Button variant="contained"
          onClick={this.props.addTechExp}
          >Add technical experience</Button>
        </div>
        <br/>
        <div>
        <h2> Other experience </h2>
        {this.props.OtherExp}
        <Button variant="contained"
          onClick={this.props.addOtherExp}
          >Add other experience</Button>
        </div>
        </Container>
      )
    }

}

export default Experience;
