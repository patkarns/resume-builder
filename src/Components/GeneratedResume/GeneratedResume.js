import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import moment from 'moment';

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

const categories = {
  0: 'Programming',
  1: 'Applications',
  2: 'Tools',
  3: 'CAD / Prototyping',
  4: 'Design',
  5: 'Other',
}

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
    color: '#E2D1E6',
    textAlign: 'center',
    paddingTop: '30px',
    backgroundColor: '#8676E4',
    letterSpacing: 9,
  },
  header15: {
    fontSize: 10,
    fontWeight: 'extralight',
    color: '#E2D1E6',
    textAlign: 'center',
    paddingTop: '8px',
    paddingBottom: '30px',
    backgroundColor: '#8676E4',
    letterSpacing: 9,
  },
  header2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A187E8',
    textAlign: 'center',
    padding: '8px',
    backgroundColor: '#E2D1E6',
    letterSpacing: 5,
  },
  header3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '##7959D5',
    textAlign: 'left',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
  },
  header15Content: {
    fontSize: 12,
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 1,
    columnFill: 'balanced',
    columnGap: 40,
  },
  header25Content: {
    fontSize: 12,
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 2,
    columnFill: 'balanced',
    columnGap: 40,
  },
  header35Content: {
    fontSize: 12,
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 3,
    columnFill: 'balanced',
    columnGap: 40,
  },
  header25: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 2,
    columnFill: 'balanced',
    columnGap: 40,
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
  header45: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 4,
    columnFill: 'balanced',
    columnGap: 40,
  },
  header55: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 5,
    columnFill: 'balanced',
    columnGap: 40,
  },
  header1Col: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 1,
    columnFill: 'balanced',
    columnGap: 40,
  },
  header2Col: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 2,
    columnFill: 'balanced',
    columnGap: 50,
  },
  header3Col: {
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
  header4Col: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 4,
    columnFill: 'balanced',
    columnGap: 36,
  },
  header5Col: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#406084',
    textAlign: 'center',
    paddingTop: '8px',
    paddingLeft: '35px',
    paddingBottom: '8px',
    columnCount: 5,
    columnFill: 'balanced',
    columnGap: 30,
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
  header4Center: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    paddingTop: '1px',
    // paddingLeft: '50px',
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
      generalChanges: {},
    }
  }

  async componentDidMount() {
    const generalChanges = this.props.generalChanges;
    const educationChanges = this.props.educationChanges;
    const skillChanges = this.props.skillChanges;
    const projectChanges = this.props.projectChanges;
    console.log('generator 0', generalChanges)
    return await this.setState({...this.state, generalChanges, educationChanges, skillChanges, projectChanges });
  }

  async componentDidUpdate(prevProps) {
    const newState = { ...this.state };
    let setState = false;
    if (this.props.generalChanges !== prevProps.generalChanges) {
      newState.generalChanges = this.props.generalChanges;
      setState = true;
    }
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
    console.log('generator 1', this.props.educationChanges)
    if (setState) return await this.setState(newState);
  }

  render() {
    const { props, state } = this;
    let name = '';
    if (state.generalChanges && state.generalChanges.name) {
      name = state.generalChanges.name;
    }

    
    
    const generalChangesKeys = Object.keys(state.generalChanges).filter(key => {
      return (key !== 'name');
    });
    const generalAttrs = generalChangesKeys.map(key => {
      return state.generalChanges[key];
    });
    const generalAttrCount = generalChangesKeys.length;
    console.log(generalAttrCount, generalChangesKeys, generalAttrs, generalAttrs[generalAttrCount-1])
    const schools = Object.keys(state.educationChanges).map(key => {
      const educationChange = state.educationChanges[key];
      let startDate = educationChange.startDate ? moment(educationChange.startDate).format('MM-YYYY'): '';
      let endDate = educationChange.endDate ? moment(educationChange.endDate).format('MM-YYYY'): '';
      // console.log('DATE RAWR', educationChange.startDate, moment(educationChange.startDate).format('MM-YYYY'))
      // let startDate = educationChange.startDate || '';
      // let endDate = educationChange.endDate || '';
      let dates = '';
      if (startDate && !endDate) {
        dates = `(${startDate})`;
      } else if (startDate && endDate) {
        dates = ` (${startDate} - ${endDate})`;
      }

      return (<React.Fragment>
        <Text style={styles.header3}>{`${educationChange.name}${dates}`}</Text>
        {/* {educationChange.awards && <Text style={styles.header4}>{educationChange.awards ? educationChange.awards : ''}</Text>} */}
      </React.Fragment>);
    });

    const skillChanges = { ...props.skillChanges };
    const skillsCategories = Object.keys(skillChanges).map(categoryInt => {
      return categories[categoryInt];
    });

    const skillsByCategory = {};
    Object.keys(skillChanges).map(categoryInt => {
      if (!skillsByCategory[categoryInt]) skillsByCategory[categoryInt] = [];
      Object.keys(skillChanges[categoryInt]).map(skillKey => {
        const title = skillChanges[categoryInt][skillKey].title;
        skillsByCategory[categoryInt].push(title);
      });
    });
    
    let maxRows = 0;
    Object.keys(skillsByCategory).map(categoryInt => {
      const rowCount = skillsByCategory[categoryInt].length;
      if (rowCount > maxRows) maxRows = rowCount;
    });

    
    const projects = state.projectChanges.map(projectChange => {
      let date = '';
      if (projectChange.startYear && projectChange.startMonth) {
        date = `(${projectChange.startMonth} ${projectChange.startYear})`;
      } else if (projectChange.startYear) {
        date = `(${projectChange.startYear})`;
      }
      
      return (<React.Fragment>
        <Text style={styles.header3}>{date ? `${projectChange.name} ${date}`: projectChange.name}</Text>
        <Text style={styles.header4}>{projectChange.description}</Text>
      </React.Fragment>);
    });

    console.log('final', generalAttrs, generalAttrCount)
    const general = generalAttrs.join(' | ');
    return <Document>
      <Page size="LETTER" style={styles.page}>
      <View style={styles.view}>
            {<Text id='header' style={styles.header}>{name ? name : 'Resume'}</Text>}
            {<Text id='header' style={styles.header4Center}>{general}</Text>}
            {/* {(generalAttrCount === 1) && <Text style={styles.header15Content}>{generalAttrs[0]}</Text>}
            {(generalAttrCount === 2) && <Text style={styles.header25Content}>{generalAttrs[0]            |           generalAttrs[1]}</Text>}
            {(generalAttrCount === 3) && <Text style={styles.header35Content}>{generalAttrs[0]            |           generalAttrs[1]            |           generalAttrs[2]}</Text>} */}
            {/* {(generalAttrCount === 4) && <Text style={styles.header45}>{generalAttrs[0] | generalAttrs[1] | generalAttrs[2] | generalAttrs[3]}</Text>}
            {(generalAttrCount === 5) && <Text style={styles.header55}>{generalAttrs[0] | generalAttrs[1] | generalAttrs[2] | generalAttrs[3] | generalAttrs[4]}</Text>} */}
          <Text style={styles.header2}>EDUCATION</Text>
          {schools}
          <Text style={styles.header2}>SKILLS</Text>
          {(skillsCategories.length === 1) && <Text style={styles.header15}>{skillsCategories[0]}}</Text>}
          {(skillsCategories.length === 2) && <Text style={styles.header25}>{skillsCategories[0]}            |           {skillsCategories[1]}</Text>}
          {(skillsCategories.length === 3) && <Text style={styles.header35}>{skillsCategories[0]}            |           {skillsCategories[1]}           |            {skillsCategories[2]}</Text>}
          
          {(maxRows > 0) && (skillsCategories.length === 1) && <Text style={styles.header15Content}>{skillsByCategory[0][0]}</Text>}
          {(maxRows > 0) && (skillsCategories.length === 2) && <Text style={styles.header25Content}>{skillsByCategory[0][0]}            |           {skillsCategories[1][0]}</Text>}
          {(maxRows > 0) && (skillsCategories.length === 3) && <Text style={styles.header35Content}>{skillsByCategory[0][0]}            |           {skillsCategories[1][0]}            |           {skillsCategories[2][0]}</Text>}
          
          {(maxRows > 1) && (skillsCategories.length === 1) && <Text style={styles.header15Content}>{skillsByCategory[0][1]}}</Text>}
          {(maxRows > 1) && (skillsCategories.length === 2) && <Text style={styles.header25Content}>{skillsByCategory[0][1]}            |           {skillsCategories[1][1]}</Text>}
          {(maxRows > 1) && (skillsCategories.length === 3) && <Text style={styles.header35Content}>{skillsByCategory[0][1]}            |           {skillsCategories[1][1]}            |           {skillsCategories[2][1]}</Text>}

          {(maxRows > 2) && (skillsCategories.length === 1) && <Text style={styles.header15Content}>{skillsByCategory[0][2]}</Text>}
          {(maxRows > 2) && (skillsCategories.length === 2) && <Text style={styles.header25Content}>{skillsByCategory[0][2]}           |           {skillsCategories[1][2]}}</Text>}
          {(maxRows > 2) && (skillsCategories.length === 3) && <Text style={styles.header35Content}>{skillsByCategory[0][2]}           |           {skillsCategories[1][2]}           |           {skillsCategories[2][2]}}</Text>}

          {(maxRows > 3) && (skillsCategories.length === 1) && <Text style={styles.header15Content}>{skillsByCategory[0][3]}</Text>}
          {(maxRows > 3) && (skillsCategories.length === 2) && <Text style={styles.header25Content}>{skillsByCategory[0][3]}           |           {skillsCategories[1][3]}</Text>}
          {(maxRows > 3) && (skillsCategories.length === 3) && <Text style={styles.header35Content}>{skillsByCategory[0][3]}           |           {skillsCategories[1][3]}           |           {skillsCategories[2][3]}</Text>}


          <Text style={styles.header2}>EXPERIENCE</Text>
          {/* {state.projectChanges.length && <Text style={styles.header2}>PROJECTS</Text>} */}
          <Text style={styles.header2}>PROJECTS</Text>
          {projects}
          <Text style={styles.header2}>EXTRACURRICULARS</Text>
        </View>
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
    generalChanges: PropTypes.object.isRequired,
  };

  export default GeneratedResume;