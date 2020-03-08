
import React from 'react';

import AboutYou from './Components/AboutYou/AboutYou.js';
import Education from './Components/Education/Education.js';
import Skills from './Components/Skills/Skills.js';
// import Experience from './Components/Experience/Education.js';
// import Projects from './Components/Projects/Education.js';
import Extracurriculars from './Components/Extracurriculars/Extracurriculars.js';
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
            steps: ['About You', 'Education', 'Skills', 'Experience', 'Projects', 'Extracurriculars'],
            educationChanges: {},
            skillChanges: {},
            schools: [<School key={1} handleChange={this.handleChange}/>],
        }
    }

    async handlePrev() {
        const activeStep = this.state.activeStep - 1;
        await this.setState({ ...this.state, activeStep });
    }

    async handleNext() {
        const activeStep = this.state.activeStep + 1;
        console.log('activeStep', activeStep)
        await this.setState({ ...this.state, activeStep });
    }

    async handleChange(step, changes) {
        if (step === 1) {
            const educationChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                return educationChanges[changedAttribute] = changes[changedAttribute];
            });
            return await this.setState({ ...this.state, educationChanges });
        } else if (step === 2) {
            const skillChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                return skillChanges[changedAttribute] = changes[changedAttribute];
            });
            return await this.setState({ ...this.state, skillChanges });
        } else if (step === 3) {
            
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
            <Button disabled={state.activeStep > 4} onClick={this.handleNext}>Next</Button>
            {(state.activeStep === 0 && <AboutYou handleChange={this.handleChange} />)}
            {(state.activeStep === 1) && 
                <Education
                    handleChange={this.handleChange}
                    schools={this.state.schools}
                    addSchool={this.addSchool}
                />}
            {(state.activeStep === 2) && <Skills handleChange={this.handleChange}/>}
            {/*(state.activeStep === 2) && <Experience />}
            {(state.activeStep === 3) && <Projects />}
            */}
            {(state.activeStep === 5) &&
                <Extracurriculars
                    handleChange={this.handleChange}
                />}
        </React.Fragment>
    }
}
export default Parent;
