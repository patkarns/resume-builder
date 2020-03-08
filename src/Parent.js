
import React from 'react';

// import Education from './Education.js';
import Education from './Components/Education/Education.js';
// import Skills from './Components/Skills/Skills.js';
// import Experience from './Components/Experience/Education.js';
// import Projects from './Components/Projects/Education.js';
// import Extracurriculars from './Components/Extracurriculars/Extracurriculars.js';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import School from './Components/School/School.js';

class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addSchool = this.addSchool.bind(this);

        this.state = {
            activeStep: 0,
            steps: ['Education', 'Skills', 'Experience', 'Projects', 'Extracurriculars'],
            educationChanges: {},
            schools: [<School key={1} handleChange={this.handleChange}/>],
        }
    }

    async handlePrev(index) {
        const activeStep = index--;
        await this.setState({ ...this.state, activeStep });
    }

    async handleNext(index) {
        const activeStep = index++;
        await this.setState({ ...this.state, activeStep });
    }

    async handleChange(step, changes) {
        if (step === 0) {
            const educationChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                educationChanges[changedAttribute] = changes[changedAttribute];
            });
            return await this.setState({ ...this.state, educationChanges });
        }
    }

    addSchool() {
        this.setState(
            {
                ...this.state,
                schools: [
                    ...this.state.schools,
                    <School key={this.state.schools.length + 1} handleChange={this.handleChange}/>
                ]
            }
        );
    }

    render() {
        const { state } = this;
        return <React.Fragment>
            <Stepper activeStep={state.activeStep} alternativeLabel>
                {state.steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Button disabled={state.activeStep < 1} onClick={this.handlePrev}>Prev</Button>
            <Button disabled={state.activeStep > 3} onClick={this.handleNext}>Next</Button>
            {(state.activeStep === 0) && 
                <Education
                    handleChange={this.handleChange}
                    schools={this.state.schools}
                    addSchool={this.addSchool}
                />}
            {/* {(state.activeStep === 1) && <Skills />}
            {(state.activeStep === 2) && <Experience />}
            {(state.activeStep === 3) && <Projects />}
            {(state.activeStep === 4) && <Extracurriculars />} */}
        </React.Fragment>
    }
}
export default Parent;
