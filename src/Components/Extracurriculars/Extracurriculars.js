
import React from 'react';
import PropTypes from 'prop-types';
import Selector from '../Selector/Selector.js';
import ActivityCategory from '../ActivityCategory/ActivityCategory.js';
import { Container, Grid } from '@material-ui/core';

import './styles.css';

class Extracurriculars extends React.Component {
    state = {
        activityCategories: [
            'Academic',
            'Athletics',
            'Arts',
            'Volunteering',
            'Community Involvement',
        ],
        activityCards: [],
    }

    render() {
      return <Container>
          <h1> Extracurriculars </h1>
          <Selector
            handleChange={this.props.handleChange}
            label={'Activity Type'}
            options={this.state.activityCategories}
            onOptionSelect={this.addActivityCard.bind(this)}
          />
          <Grid container spacing={1}>
            {this.state.activityCards}
          </Grid>
    </Container>
    }

    addActivityCard(category) {
        this.setState({
            ...this.state,
            activityCategories: this.state.activityCategories.indexOf(category) >= 0 ?
                this.state.activityCategories : [...this.state.activityCategories, category],
            activityCards: [
                ...this.state.activityCards,
                <ActivityCategory
                    key={category}
                    title={category}
                    handleChange={this.props.handleChange}
                />
            ],
        });
    }
}

  Extracurriculars.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default Extracurriculars;