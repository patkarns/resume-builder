import React from 'react';
import PropTypes from 'prop-types';
import Selector from '../Selector/Selector.js';
import { Card, CardContent, CardHeader, Container, Chip, Grid } from '@material-ui/core';
class ActivityCategory extends React.Component {
    state = {
        activities: [],
    }

    render() {
      return <Container>
          <Card>
              <CardHeader title={this.props.title} />
              <CardContent>
                  <Selector
                        handleChange={this.props.handleChange}
                        options={[]}
                        label={'Add Activity'}
                        onOptionSelect={this.addActivity.bind(this)}
                    />
              </CardContent>
              <Grid container spacing={1}>
                    {this.state.activities}
               </Grid>
          </Card>
    </Container>
    }

    addActivity(activity) {
        const activityChip = <Chip key={activity} label={activity} onDelete={() => this.onDeleteChip(0, activity)}/>;
        this.setState({activities: [...this.state.activities, activityChip ]});
    }

    onDeleteChip(activity) {
        const activities = this.state.activities;
        activities.splice(activity, 1)
        this.setState({...this.state, activities});
    }
}

  ActivityCategory.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default ActivityCategory;