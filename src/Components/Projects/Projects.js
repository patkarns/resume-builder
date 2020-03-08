
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Input, Container, TextField, Grid, Card, CardHeader, CardContent, Select, Chip, Icon, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import programming_skills from '../../Data/programming_skills.json';
import applications_skills from '../../Data/applications_skills.json';
import tools_skills from '../../Data/tools_skills.json';
import CAD_design_skills from '../../Data/CAD_design_skills.json';
import constants from '../../constants.json';

import ProjectDescription from './ProjectDescription';

import './styles.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changes: [],
      currentIndexInEdit: undefined,
    }
    this.handleCurrentDescriptionChange = this.handleCurrentDescriptionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.projectChanges !== prevProps.projectChanges) {
      const changes = [...this.props.projectChanges];
      await this.setState({ ...this.state, changes });
    } else if (this.props.projectChanges.length !== this.state.changes.length) {
      const changes = [...this.props.projectChanges];
      await this.setState({ ...this.state, changes });
    }
  }

  async handleCurrentDescriptionChange(e) {
    const value = e.target.value;
    const { state } = this;
    await this.setState({ ...state, currentDescriptionInEdit: value });
  }

  async handleChange(e, index, attribute) {
    console.log('e', e)
    const value = e.target.value;
    const { state } = this;
    const changes = [...state.changes];
    const change = { ...state.changes[index] };
    change[attribute] = value;
    changes[index] = change;
    await this.setState({ ...this.state, changes });
    await this.props.handleChange(3, changes);
  }

  async handleDescriptionUpdate(isEdit, value) {
    const changes = [...this.state.changes];
    if (isEdit) {
      changes[this.state.currentIndexInEdit].description = value;
    } else {
      const nextIndex = changes.length;
      changes[nextIndex] = {};
      changes[nextIndex].description = value;
    }
    await this.setState({ ...this.state, currentIndexInEdit: undefined, changes });
    await this.props.handleChange(3, changes);
    console.log('LINE 73', this.state.changes)
  }

  render() {
    const { props, state } = this;

    console.log('changes', state.changes)
    const projectCards = props.projectChanges.map((change, index) => {
      const name = change.name;
      const description = change.description;
      const startMonth = change.startMonth;
      const startYear = change.startYear;
      return <Card>
        {/* <CardHeader>
        <TextField label='Project Name' margin='normal' valueDefault={change.name} onChange={(e) => this.handleCurrentDescriptionChange(e)} />
        </CardHeader> */}
        <CardContent>
          <Grid container spacing={1} xs={12}>
            <Grid item spacing={1} xs={4}>
              <TextField label='Project Name' margin='normal' valueDefault={change.name} onChange={(e) => this.handleChange(e, index, 'name')} />
            </Grid>
            <Grid item spacing={1} xs={4}>
              <Select
                className="select"
                label='Month'
                value={startMonth}
                onChange={(e) => this.handleChange(e, index, 'startMonth')}
              >
                <MenuItem value={'Jan'}>Jan</MenuItem>
                <MenuItem value={'Feb'}>Feb</MenuItem>
                <MenuItem value={'Mar'}>Mar</MenuItem>
                <MenuItem value={'Apr'}>Apr</MenuItem>
                <MenuItem value={'May'}>May</MenuItem>
                <MenuItem value={'Jun'}>Jun</MenuItem>
                <MenuItem value={'Jul'}>Jul</MenuItem>
                <MenuItem value={'Aug'}>Aug</MenuItem>
                <MenuItem value={'Sep'}>Sep</MenuItem>
                <MenuItem value={'Oct'}>Oct</MenuItem>
                <MenuItem value={'Nov'}>Nov</MenuItem>
                <MenuItem value={'Dec'}>Dec</MenuItem>
              </Select>
            </Grid>
            <Grid item spacing={1} xs={4}>
              <Select
                className="select"
                label='Year'
                value={startYear}
                onChange={(e) => this.handleChange(e, index, 'startYear')}
              >
                <MenuItem value={'2020'}>2020</MenuItem>
                <MenuItem value={'2019'}>2019</MenuItem>
                <MenuItem value={'2018'}>2018</MenuItem>
                <MenuItem value={'2017'}>2017</MenuItem>
                <MenuItem value={'2016'}>2016</MenuItem>
                <MenuItem value={'2015'}>2015</MenuItem>
                <MenuItem value={'2014'}>2014</MenuItem>
                <MenuItem value={'2013'}>2013</MenuItem>
                <MenuItem value={'2012'}>2012</MenuItem>
                <MenuItem value={'2011'}>2011</MenuItem>
                <MenuItem value={'2010'}>2010</MenuItem>
                <MenuItem value={'2009'}>2009</MenuItem>
                <MenuItem value={'2009'}>2008</MenuItem>
                <MenuItem value={'2009'}>2007</MenuItem>
                <MenuItem value={'2009'}>2006</MenuItem>
                <MenuItem value={'2009'}>2005</MenuItem>
                <MenuItem value={'2009'}>2004</MenuItem>
                <MenuItem value={'2009'}>2003</MenuItem>
                <MenuItem value={'2009'}>2002</MenuItem>
                <MenuItem value={'2009'}>2001</MenuItem>
                <MenuItem value={'2009'}>2000</MenuItem>
              </Select>
            </Grid>
          </Grid>
          {description}
        </CardContent>
      </Card>;
    });

    return (<Container>
      <h1> Projects</h1>
      <ProjectDescription
        currentDescription={state.currentIndexInEdit ? state.changes[state.currentIndexInEdit].description : undefined}
        handleUpdate={this.handleDescriptionUpdate}
      />
      {projectCards}
    </Container>);
  }
}

Projects.propTypes = {
  handleChange: PropTypes.func.isRequired,
  projectChanges: PropTypes.array,
};

export default Projects;
