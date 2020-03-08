
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Container, TextField, Grid, Card, CardHeader, CardContent, Select, Chip } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import programming_skills from '../../Data/programming_skills.json';
import applications_skills from '../../Data/applications_skills.json';
import tools_skills from '../../Data/tools_skills.json';
import CAD_design_skills from '../../Data/CAD_design_skills.json';

import './styles.css';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const categories = {
  0: 'Programming',
  1: 'Applications',
  2: 'Tools',
  3: 'CAD / Prototyping',
  4: 'Design',
  5: 'Other',
}

const list = [
  { title: 'JavaScript', category: 0 },
  { title: 'Java', category: 0 },
  { title: 'JUnit', category: 2 },
];

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkills: {},
      list: [],
    }
    this.loadList = this.loadList.bind(this);
    this.onSelectedChange = this.onSelectedChange.bind(this);
    this.onDeleteChip = this.onDeleteChip.bind(this);
  }

  async componentDidMount() {
    return await this.loadList();
  }

  async loadList() {
    let list = [];
    const objectOriented = 'object-oriented';
    const objectOrientedLanguages = programming_skills[objectOriented].map(title => {
      return { title, category: 0 };
    });
    list = list.concat(objectOrientedLanguages);
    const functionalLanguages = programming_skills.functional.map(title => {
      return { title, category: 0 };
    });
    list = list.concat(functionalLanguages);
    const procedural = programming_skills.procedural.map(title => {
      return { title, category: 0 };
    });
    list = list.concat(procedural);
    const frameworks = programming_skills.frameworks.map(title => {
      return { title, category: 0 };
    });
    list = list.concat(frameworks);


    const applications = applications_skills.applications.map(title => {
      return { title, category: 1 };
    });
    list = list.concat(applications);

    const tools = tools_skills.tools.map(title => {
      return { title, category: 2 };
    });
    list = list.concat(tools);

    const CAD = CAD_design_skills.CAD.map(title => {
      return { title, category: 3 };
    });
    list = list.concat(CAD);

    const _3D_computer_graphics_key = '3D_computer_graphics';
    const _3D_computer_graphics = CAD_design_skills[_3D_computer_graphics_key].map(title => {
      return { title, category: 3 };
    });
    list = list.concat(_3D_computer_graphics);
    return await this.setState( {...this.state, list });
  }
  
  async onDeleteChip(category, title) {
    const selectedSkills = { ...this.state.selectedSkills };
    delete selectedSkills[category][title];
    return await this.setState({ ...this.state, selectedSkills });
  }

  async onSelectedChange(e, values) {
    if (!values) return;
    const title = values.title;
    const category = values.category;
    const selectedSkills = { ...this.state.selectedSkills };
    if (!selectedSkills[category]) {
      selectedSkills[category] = {};
    }
    selectedSkills[category][title] = values;
    await this.setState({ ...this.state, selectedSkills });
    return await this.props.handleChange(1, selectedSkills);
  }

  render() {
    const { props, state } = this;
    const programmingChips = state.selectedSkills[0] ? Object.keys(state.selectedSkills[0]).map(selectedSkillsKey => {
      const selectedSkills = state.selectedSkills[0][selectedSkillsKey];
      const title = selectedSkills.title;
      return <Chip key={title} label={title} onDelete={() => this.onDeleteChip(0, title)}></Chip>
    }) : '';

    const applicationsChips = state.selectedSkills[1] ? Object.keys(state.selectedSkills[1]).map(selectedSkillsKey => {
      const selectedSkills = state.selectedSkills[1][selectedSkillsKey];
      const title = selectedSkills.title;
      return <Chip key={title} label={title} onDelete={() => this.onDeleteChip(0, title)}></Chip>
    }) : '';

    const toolsChips = state.selectedSkills[2] ? Object.keys(state.selectedSkills[2]).map(selectedSkillsKey => {
      const selectedSkills = state.selectedSkills[2][selectedSkillsKey];
      const title = selectedSkills.title;
      return <Chip key={title} label={title} onDelete={() => this.onDeleteChip(0, title)}></Chip>
    }) : '';

    const CADChips = state.selectedSkills[3] ? Object.keys(state.selectedSkills[3]).map(selectedSkillsKey => {
      const selectedSkills = state.selectedSkills[3][selectedSkillsKey];
      const title = selectedSkills.title;
      return <Chip key={title} label={title} onDelete={() => this.onDeleteChip(0, title)}></Chip>
    }) : '';

    return (<Container>
      <h4 style = {{paddingBottom: 30, fontStyle: 'italic', letterSpacing: 3, color: '#A187E8'}}>“Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.” - Golda Meir</h4>
      <h1 style = {{letterSpacing: 10 }}> ❦ SKILLS</h1>
      <h3>What do you already know how to do?</h3>
      {/* <TextField label="Skills" valueDefault={props.attributes ? props.attributes : ''} onChange={this.handleChange} /> */}
      <Autocomplete
        id="combo-box-demo"
        options={state.list}
        getOptionLabel={option => option.title}
        style={{ width: 300, color: '#7959D5'}}
        onChange={this.onSelectedChange}
        renderInput={params => <TextField {...params} label="Skills" variant="outlined" />}
      />


      {/* <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // onChangeActive={(event, newHover) => {
        //   setHover(newHover);
        // }}
      /> */}
      <React.Fragment>
        <Grid container spacing={1} xs={12}>
          {programmingChips && <Grid item>
            <Card>
              <CardHeader style={{ color: '#7959D5'}} title='Programming' />
              <CardContent> {programmingChips}</CardContent>
            </Card>
          </Grid>}
          {applicationsChips && <Grid item>
            <Card>
              <CardHeader style={{ color: '#7959D5'}} title='Applications' />
              <CardContent> {applicationsChips}</CardContent>
            </Card>
          </Grid>}
          {toolsChips && <Grid item>
            <Card>
              <CardHeader style={{ color: '#7959D5'}} title='Tools' />
              <CardContent> {toolsChips}</CardContent>
            </Card>
          </Grid>}
          {CADChips && <Grid item>
            <Card>
              <CardHeader style={{ color: '#7959D5'}} title='CAD/ Protopying' />
              <CardContent> {CADChips}</CardContent>
            </Card>
          </Grid>}
        </Grid>
      </React.Fragment>
    </Container>);
  }
}

Skills.propTypes = {
  handleChange: PropTypes.func.isRequired,
  attributes: PropTypes.object,
};

export default Skills;
