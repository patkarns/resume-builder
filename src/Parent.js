
import React from 'react';

// import Education from './Education.js';
import Education from './Components/Education/Education.js';
import Skills from './Components/Skills/Skills.js';
// import Experience from './Components/Experience/Education.js';
// import Projects from './Components/Projects/Education.js';
import Extracurriculars from './Components/Extracurriculars/Extracurriculars.js';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import School from './Components/School/School.js';
import ActivityCategory from './Components/ActivityCategory/ActivityCategory.js';

const categories = [
    'Academic',
    'Athletics',
    'Arts',
    'Volunteering',
    'Community Involvement',
];

class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addSchool = this.addSchool.bind(this);
        this.addActivityCard = this.addActivityCard.bind(this);

        this.state = {
            activeStep: 1,
            steps: ['Education', 'Skills', 'Experience', 'Projects', 'Extracurriculars'],
            educationChanges: {},
            skillChanges: {},
            schools: [<School key={1} handleChange={this.handleChange}/>],
            activityCategories: [...categories],
            activityCards: [],
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
        if (step === 0) {
            const educationChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                return educationChanges[changedAttribute] = changes[changedAttribute];
            });
            return await this.setState({ ...this.state, educationChanges });
        } else if (step === 1) {
            const skillChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                return skillChanges[changedAttribute] = changes[changedAttribute];
            });
            return await this.setState({ ...this.state, skillChanges });
        } else if (step === 2) {
            
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

    addActivityCard(category) {
        console.log(`category in add parent ${category}`);
        this.setState({
            ...this.state,
            activityCategories: this.state.activityCategories.indexOf(category) >= 0 ?
                this.state.activityCategories : [...this.state.activityCategories, category],
            activityCards: [
                ...this.state.activityCards,
                <ActivityCategory
                    key={category}
                    title={category}
                    handleChange={this.handleChange}
                />
            ],
        });
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
            {(state.activeStep === 1) && <Skills handleChange={this.handleChange}/>}
            {/*(state.activeStep === 2) && <Experience />}
            {(state.activeStep === 3) && <Projects />}
            */}
            {(state.activeStep === 4) &&
                <Extracurriculars
                    handleChange={this.handleChange}
                    activityCategories={this.state.activityCategories}
                    activityCards={this.state.activityCards}
                    addActivityCard={this.addActivityCard}
                />}
        </React.Fragment>
    }
}
export default Parent;
