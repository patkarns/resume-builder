import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
    // flexDirection: 'row',
    // backgroundColor: '#E4E4E4',
    // width: '100%',
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
  header: {
    fontSize: 80,
    fontWeight: 'extralight',
    color: '#d2faf1',
    textAlign: 'center',
    padding: '30px',
    backgroundColor: '#4e8da1',
    letterSpacing: 9,
  },
  header2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    padding: '8px',
    backgroundColor: '#d2faf1',
    letterSpacing: 5,
  },
  header3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'left',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
  },
  header35: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 3,
    columnFill: 'balanced',
    columnGap: 40,
  },
  header4: {
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
    paddingTop: '1px',
    paddingLeft: '50px',
    paddingBottom: '8px',
    columnCount: 3,
  },
});

class GeneratedResume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      skillChanges: {},
      educationChanges: {},
      projectChanges: [],
    }
  }

  async componentDidMount() {
    const educationChanges = this.props.educationChanges;
    const skillChanges = this.props.skillChanges;
    const projectChanges = this.props.projectChanges;
    console.log('generator 0', skillChanges, projectChanges)
    return await this.setState({...this.state, educationChanges, skillChanges, projectChanges });
  }

  async componentDidUpdate(prevProps) {
    const newState = { ...this.state };
    let setState = false;
    if (this.props.educationChanges !== prevProps.educationChanges) {
      newState.educationChanges = this.props.educationChanges;
      setState = true;
    }
    if (this.props.skillChanges !== prevProps.skillChanges) {
      newState.skillChanges = this.props.skillChanges;
      setState = true;
    }
    if (this.props.projectChanges !== prevProps.projectChanges) {
      newState.projectChanges  = this.props.projectChanges;
      setState = true;
    }
    console.log('generator 1', this.props.skillChanges, this.props.projectChanges)
    if (setState) return await this.setState(newState);
  }

  render() {
    const { props, state } = this; 
    console.log('hi', (Object.keys(state.skillChanges).length > 0), props.educationChanges, props.skillChanges);
    // const projects = state.projectChanges.map(projectChange => {
    //   const date = '';

    //   <React.Fragment>
    //     <Text style={styles.header3}>{projectChange.name}</Text>
    //     <Text style={styles.header3}>{projectChange.startMonth ? `${projectChange.startMonth}-${projectChange.startYear}` : projectChange.startYear}</Text>
    //   </React.Fragment>
    // })
    return <Document>
      <Page size="LETTER" style={styles.page}>
      <View style={styles.view}>
            <Text id='header' style={styles.header}>RESUME</Text>
          <Text style={styles.header2}>EDUCATION</Text>
          <Text style={styles.header3}>Insert some text here.</Text>
          <Text style={styles.header4}>Insert some text here.</Text>
          <Text style={styles.header2}>SKILLS</Text>
          <Text style={styles.header35}>Skill 1            |           Skill 2           |            Skill 3</Text>
          <Text style={styles.header3}>Insert some text here.</Text>
          <Text style={styles.header2}>EXPERIENCE</Text>
          <Text style={styles.header3}>Insert some text here.</Text>
          <Text style={styles.header4}>Insert some text here.</Text>
          <Text style={styles.header3}>Insert some text here.</Text>
          <Text style={styles.header4}>Insert some text here.</Text>
          <Text style={styles.header2}>PROJECTS</Text>
          <Text style={styles.header3}>Insert some text here.</Text>
          <Text style={styles.header4}>Insert some text here.</Text>
          <Text style={styles.header3}>Insert some text here.</Text>
          <Text style={styles.header4}>Insert some text here.</Text>
          <Text style={styles.header2}>EXTRACURRICULARS</Text>
          <Text style={styles.header3}>Insert some text here.</Text>
          {(Object.keys(state.skillChanges).length > 0) && <Text></Text>}
        </View>
        {(Object.keys(state.educationChanges).length > 0) && <View style={styles.view}>
          <Text>Education</Text>
        </View>}
        {(Object.keys(state.skillChanges).length > 0) && <View style={styles.section}>
          <Text>Skills</Text>
        </View>}
      </Page>
    </Document>;
  }
}

  GeneratedResume.propTypes = {
    educationChanges: PropTypes.object.isRequired,
    skillChanges: PropTypes.object.isRequired,
    projectChanges: PropTypes.object.isRequired,
  };

  export default GeneratedResume;