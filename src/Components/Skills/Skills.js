
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Container, TextField, Grid, Card, CardHeader, CardContent, Select, Chip } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import programming_skills from '../../programming_skills.json';

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
  3: 'Testing',
  4: 'CAD / Prototyping',
  5: 'Design',
  6: 'Other',
}

const list = [
  { title: 'JavaScript', category: 0 },
  { title: 'Java', category: 0 },
  { title: 'JUnit', category: 3 },
];

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkills: {},
      list: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSelectedChange = this.onSelectedChange.bind(this);
    this.onDeleteChip = this.onDeleteChip.bind(this);
  }

  async componentDidMount() {
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
    return await this.setState( {...this.state, list });
  }

  async handleChange(e) {
    console.log('change', e.target.value);
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
    return await this.setState({ ...this.state, selectedSkills });
  }

  render() {
    const { props, state } = this;
    const programmingChips = state.selectedSkills[0] ? Object.keys(state.selectedSkills[0]).map(selectedSkillsKey => {
      const selectedSkills = state.selectedSkills[0][selectedSkillsKey];
      const title = selectedSkills.title;
      console.log('title', title)
      return <Chip key={title} label={title} onDelete={() => this.onDeleteChip(0, title)}></Chip>
    }) : '';

    return (<Container>
      <h1> Skills</h1>
      {/* <TextField label="Skills" valueDefault={props.attributes ? props.attributes : ''} onChange={this.handleChange} /> */}
      <Autocomplete
        id="combo-box-demo"
        options={state.list}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
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
              <CardHeader title='Programming' />
              <CardContent> {programmingChips}</CardContent>
            </Card>
          </Grid>}
          <Grid item>
            <Card>
              <CardHeader title='Applications' />
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title='Tools' />
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title='Testing' />
            </Card>
          </Grid>
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
