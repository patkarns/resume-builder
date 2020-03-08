import React from 'react'
import { Container, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
          <IconButton onClick={this.props.addTechExp}>
              <AddCircleIcon />
          </IconButton>
        </div>
        <br/>
        <div>
        <h2> Other experience </h2>
        {this.props.OtherExp}
          <IconButton onClick={this.props.addOtherExp}>
                <AddCircleIcon />
          </IconButton>
        </div>
        </Container>
      )
    }

}

export default Experience;
