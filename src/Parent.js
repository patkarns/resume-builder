
import React from 'react';

// import Education from './Education.js';
import Education from './Components/Education/Education.js';
// import Skills from './Components/Skills/Skills.js';
import Experience from './Components/Experience/Experience.js';
// import Projects from './Components/Projects/Education.js';
// import Extracurriculars from './Components/Extracurriculars/Extracurriculars.js';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import TechExp from './Components/TechExp/TechExp.js'
import OtherExp from './Components/OtherExp/OtherExp.js'

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 2,
            steps: ['Education', 'Skills', 'Experience', 'Projects', 'Extracurriculars'],
            educationChanges: {},
            TechExp: [<TechExp key={1}/>],
            OtherExp: [<OtherExp key={1}/>],

        }
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addTechExp = this.addTechExp.bind(this);
        this.addOtherExp = this.addOtherExp.bind(this);
    }

    async handlePrev() {
        const activeStep = this.state.activeStep- 1;
        await this.setState({ ...this.state, activeStep });
    }

    async handleNext() {
        const activeStep = this.state.activeStep + 1;
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
                />}
            {/*{(state.activeStep === 1) && <Skills />*/}
            {(state.activeStep === 2) && <Experience
              TechExp={this.state.TechExp}
              addTechExp={this.addTechExp}
              OtherExp={this.state.OtherExp}
              addOtherExp={this.addOtherExp}
            />}
            {/*(state.activeStep === 3) && <Projects />}
            {(state.activeStep === 4) && <Extracurriculars />} */}
        </React.Fragment>
    }
}
export default Parent;
