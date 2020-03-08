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
        <h4 style = {{paddingBottom: 30, fontStyle: 'italic', letterSpacing: 3, color: '#A187E8'}}>“A surplus of effort could overcome a deficit of confidence.” - Sonia Sotomayor</h4>
        <h1 style = {{letterSpacing: 10 }}> ❦ EXPERIENCE </h1>
        <h3>Where did you previously work? What were your responsibilities, and what were your achievements? </h3>
        <h4 style = {{fontStyle: 'italic', color: '#A187E8'}}>Tips: Ensure that you explain any uncommon acronyms, especially for those who may be from a different field. Start your sentences with action words to clearly communicate your achievements to the employer. </h4>
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
