
import React from 'react';

import AboutYou from './Components/AboutYou/AboutYou.js';
import Education from './Components/Education/Education.js';
import Experience from './Components/Experience/Experience.js';
import Skills from './Components/Skills/Skills.js';
import TechExp from './Components/TechExp/TechExp.js'
import OtherExp from './Components/OtherExp/OtherExp.js'
import Projects from './Components/Projects/Projects.js';
import Extracurriculars from './Components/Extracurriculars/Extracurriculars.js';
import School from './Components/School/School';
import GeneratedResume from './Components/GeneratedResume/GeneratedResume.js';
import { Stepper, Step, StepLabel, Button, Container } from '@material-ui/core';
import { PDFViewer } from '@react-pdf/renderer';

import './styles.css';

class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addSchool = this.addSchool.bind(this);
        this.addTechExp = this.addTechExp.bind(this);
        this.addOtherExp = this.addOtherExp.bind(this);
                      
        this.state = {
            activeStep: 0,
            steps: ['About You', 'Education', 'Skills', 'Experience', 'Projects', 'Extracurriculars', 'Generate!'],
            educationChanges: {},
            skillChanges: {},
            schools: [<School key={1} handleChange={this.handleChange} />],
            projectChanges: [],
            TechExp: [<TechExp key={1}/>],
            OtherExp: [<OtherExp key={1}/>],
        }
    }

    async handlePrev() {
        const activeStep = this.state.activeStep - 1;

        await this.setState({ ...this.state, activeStep });
    }

    async handleNext() {
        const activeStep = this.state.activeStep + 1;
        await this.setState({ ...this.state, activeStep });
    }

    async handleChange(step, changes) {
        if (step === 1) {
            const educationChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                return educationChanges[changedAttribute] = changes[changedAttribute];
            });
            console.log('skillChanges')
            return await this.setState({ ...this.state, educationChanges });
        } else if (step === 2) {
            const skillChanges = { ...this.state.skillChanges };
            Object.keys(changes).map(changedAttribute => {
                console.log('skillChanges')
                skillChanges[changedAttribute] = changes[changedAttribute];
            });
            return await this.setState({ ...this.state, skillChanges });
        } else if (step === 3) {

        } else if (step === 4) {
            console.log('parent handleChange', changes)
            const projectChanges = [...changes];
            return await this.setState({ ...this.state, projectChanges });
        }
    }


    addTechExp() {
            this.setState(
                {
                    ...this.state,
                    TechExp: [
                        ...this.state.TechExp,
                        <TechExp key={this.state.TechExp.length + 1}/>
                    ]
                }
            );
        }

      addOtherExp() {
                this.setState(
                    {
                        ...this.state,
                        OtherExp: [
                            ...this.state.OtherExp,
                            <OtherExp key={this.state.OtherExp.length + 1}/>
                        ]
                    }
                );
            }

      addSchool() {
        this.setState(
            {
                ...this.state,
                schools: [
                    ...this.state.schools,
                    <School key={this.state.schools.length + 1} handleChange={this.handleChange} />
                ]
            }
        );
    }

    render() {
        const { state } = this;
        return <React.Fragment>
            <Container>
                <Stepper activeStep={state.activeStep} alternativeLabel>
                    {state.steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Button style={{buttonAlign: 'center', color: '#7959D5', fontSize: 20, letterSpacing: 5, paddingLeft: 50, paddingRight: 50}} disabled={state.activeStep < 1} onClick={this.handlePrev}>Prev</Button>
                <Button style={{buttonAlign: 'center', color: '#7959D5', fontSize: 20, letterSpacing: 5, paddingLeft: 50, paddingRight: 50}} disabled={state.activeStep > 5} onClick={this.handleNext}>Next</Button>
                {/* <Button onClick={this.handleSubmit}>Submit</Button> */}
            </Container>

            <Container className="content-container">
                {(state.activeStep === 0 && <AboutYou handleChange={this.handleChange} />)}
                {(state.activeStep === 1) &&
                    <Education
                        handleChange={this.handleChange}
                        schools={this.state.schools}
                        addSchool={this.addSchool}
                    />}
                {(state.activeStep === 2) && <Skills handleChange={this.handleChange} skillChanges={state.skillChanges} />}
                {(state.activeStep === 3) && 
              <Experience
              TechExp={this.state.TechExp}
              addTechExp={this.addTechExp}
              OtherExp={this.state.OtherExp}
              addOtherExp={this.addOtherExp}
            />}
                {(state.activeStep === 4) && <Projects handleChange={this.handleChange} projectChanges={state.projectChanges} />}
                {(state.activeStep === 5) &&
                    <Extracurriculars
                        handleChange={this.handleChange}
                    />}
                {(state.activeStep === 6) &&
                    <Container>
                        <PDFViewer className="pdf-viewer">
                            <GeneratedResume
                                educationChanges={state.educationChanges}
                                skillChanges={state.skillChanges}
                                projectChanges={state.projectChanges}
                            />
                        </PDFViewer>
                    </Container>
                }
            </Container>
        </React.Fragment>
    }
}
export default Parent;
