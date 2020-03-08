
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Input, Container, TextField, Grid, Card, CardHeader, CardContent, Select, Chip } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import programming_skills from '../../Data/programming_skills.json';
import applications_skills from '../../Data/applications_skills.json';
import tools_skills from '../../Data/tools_skills.json';
import CAD_design_skills from '../../Data/CAD_design_skills.json';
import constants from '../../constants.json';


import './styles.css';

class ProjectDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDescriptionInEdit: undefined,
      syntaxAnalysisResults: undefined,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount() {
    const { state, props } = this;
    if (props.currentDescription) {
      return await this.setState({ ...state, currentDescriptionInEdit: props.currentDescription });
    }
  }

  async handleChange(e) {
    const value = e.target.value;
    const { state } = this;
    await this.setState({ ...state, currentDescriptionInEdit: value });
  }

  async handleUpdate() {
    const { state, props } = this;
    await props.handleUpdate(props.isEdit, state.currentDescriptionInEdit);
    return await this.setState({ ...state, currentDescriptionInEdit: undefined,  syntaxAnalysisResults: undefined }); 
  }

  async handleCheck() {
    const content = this.state.currentDescriptionInEdit;
    const url = `https://language.googleapis.com/v1/documents:analyzeSyntax?key=${constants.API_KEY}`;
    const data = {
      "encodingType": "UTF8",
      "document": {
        "type": "PLAIN_TEXT",
        "content": content,
      }
    };
    const res = await axios.post(url, data);
    const tokens = res.data.tokens;
    // const partsOfSpeech = {};
    const verbTokens = tokens.filter(token => {
      if (token.partOfSpeech.tag === 'VERB') return true;
    });
    const adjectiveTokens = tokens.filter(token => {
      if (token.partOfSpeech.tag === 'ADJ') return true;
    });
    const verbs = verbTokens.map(verbToken => {
      return verbToken.text.content;
    });
    const adjectives = adjectiveTokens.map(adjectiveToken => {
      return adjectiveToken.text.content;
    });

    const syntaxAnalysisResults = {
      verbs,
      adjectives
    };
    return await this.setState({ ...this.state, syntaxAnalysisResults });
  }

  render() {
    const { props, state } = this;
    return (<Container>
      <h3> What's something you created that you're proud of? What effects did it have on yourself/others?</h3>
      <TextField label='Describe it!' variant='outlined' margin='normal' fullWidth multiline={true} valueDefault={state.currentDescription} onChange={(e) => this.handleChange(e)} />
      <p> {`Character Count: 
        ${state.currentDescription ?
          state.currentDescription.length : 0}`}
      </p>
      <Button onClick={this.handleUpdate}>Update</Button>
      <Button onClick={this.handleCheck}>Check</Button>
      {state.syntaxAnalysisResults &&
        <React.Fragment>
          <p> {`Verbs (${state.syntaxAnalysisResults.verbs.length}): ${state.syntaxAnalysisResults.verbs.join(', ')}`}
          </p>
          <p> {`Adjectives (${state.syntaxAnalysisResults.adjectives.length}): 
        ${state.syntaxAnalysisResults.adjectives.join(', ')}`}
          </p>
        </React.Fragment>
      }
    </Container>);
  }
}

ProjectDescription.propTypes = {
  currentDescription: PropTypes.string,
  handleUpdate: PropTypes.func.isRequired,
};

export default ProjectDescription;
