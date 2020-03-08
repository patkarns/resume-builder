
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, TextField } from '@material-ui/core';

import './styles.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { isNull } from 'util';

class Extracurriculars extends React.Component {
    state={
        addedCards: [],
        selectedCategory: false,
    }

    render() {
      return <Container>
          <h1> Extracurriculars </h1>
          <Autocomplete
            key={this.state.selectedCategory}
            freeSolo
            value={null}
            options={this.props.activityCategories}
            onChange={this.onSelectCategory.bind(this)}
            clearOnEscape={true}
            renderInput={(params) => <TextField {...params} label="Activity Category" variant="outlined" />}
          />
          <Grid container spacing={1}>
            {this.props.activityCards}
          </Grid>
    </Container>
    }

    onSelectCategory(event, category) {
        console.log(`category on select ${category}`);
        if (!category || category.length === 0 || this.state.addedCards.indexOf(category) >= 0) {
            // don't add a card that doesn't have a category or if the card with
            // that category has already been added
            return;
        }
        console.log(`category ${category}`);
        this.props.addActivityCard(category);
        this.setState({
            ...this.state,
            selectedCategory: !this.state.selectedCategory,
            addedCards: [...this.state.addedCards, category],
        });
    }
}

  Extracurriculars.propTypes = {
    handleChange: PropTypes.func.isRequired,
    addActivityCard: PropTypes.func.isRequired,
  };

export default Extracurriculars;