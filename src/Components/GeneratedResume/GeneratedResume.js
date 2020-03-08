import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//     width: '100%',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   },
//   view: {
//     width: '100%',
//     height: '100%',
//     padding: 0,
//     backgroundColor: 'white',
// },
// });

// // Create Document Component
// const GeneratedResume = () => (
//   <Document>
//     <Page size="LETTER" style={styles.page}>
//       <View style={styles.view}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    width: '100%',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  view: {
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: 'white',
  },
});

class GeneratedResume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      skillChanges: {},
      educationChanges: {},
    }
  }

  async componentDidMount() {
    const educationChanges = this.props.educationChanges;
    const skillChanges = this.props.skillChanges;
    return await this.setState({...this.state, educationChanges, skillChanges });
  }

  componentDidUpdate(prevProps) {
    const newState = { ...this.state };
    if (this.props.educationChanges !== prevProps.educationChanges) {
      newState.educationChanges = this.props.educationChanges;
    }
    if (this.props.skillChanges !== prevProps.skillChanges) {
      newState.skillChanges = this.props.skillChanges;
    }
  }

  render() {
    const { props, state } = this; 
    console.log('hi', (Object.keys(state.skillChanges).length > 0), props.educationChanges, props.skillChanges);

    return <Document>
      <Page size="LETTER" style={styles.page}>
      <View style={styles.view}>
          <Text>Resume</Text>
          {(Object.keys(state.skillChanges).length > 0) && <Text> HIIII</Text>}
        </View>

        {(Object.keys(state.educationChanges).length > 0) && <View style={styles.view}>
          <Text>Section #1</Text>
        </View>}
        {(Object.keys(state.skillChanges).length > 0) && <View style={styles.section}>
          <Text>Section #2</Text>
        </View>}
      </Page>
    </Document>;
  }
}

  GeneratedResume.propTypes = {
    educationChanges: PropTypes.object.isRequired,
    skillChanges: PropTypes.object.isRequired,
  };

  export default GeneratedResume;