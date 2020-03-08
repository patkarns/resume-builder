
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
          <h4 style = {{paddingBottom: 30, fontStyle: 'italic', letterSpacing: 3, color: '#A187E8'}}>“I try to live in a little bit of my own joy and not let people steal it or take it.” ~ Hoda Kotb</h4>
          <h1 style = {{letterSpacing: 10 }}> ❦ EXTRACURRICULARS </h1>
          <h3> What do you do outside of school and work? Pick a category and talk about your passions! </h3>
          <h4 style = {{fontStyle: 'italic', color: '#A187E8'}}>Tips: Demonstrate that you're well-rounded outside of academics and work!</h4>
          <Selector
            handleChange={this.props.handleChange}
            label={'Activity Type'}
            options={this.state.activityCategories}
            onOptionSelect={this.addActivityCard.bind(this)}
          /><br/>
          <Grid container spacing={2} alignItems="center" justify="space-around">
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
                <Grid item xs={12} key={category}>
                    <ActivityCategory
                        title={category}
                        handleChange={this.props.handleChange}
                    />
                </Grid>
            ],
        });
    }
}

  Extracurriculars.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default Extracurriculars;