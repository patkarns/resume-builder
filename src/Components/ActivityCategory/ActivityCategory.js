import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, Container } from '@material-ui/core';
class ActivityCategory extends React.Component {
    state = {
        content: [],
    }

    render() {
      return <Container>
          <Card>
              <CardHeader title={this.props.title} />
              <CardContent>{this.state.content}</CardContent>
          </Card>
    </Container>
    }
}

  ActivityCategory.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

export default ActivityCategory;