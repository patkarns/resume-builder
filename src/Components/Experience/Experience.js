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
        <h1>Your previous experience</h1>
        <p>Use this section to fill out any previous work experience and/or employment.</p>
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
