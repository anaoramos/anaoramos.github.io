import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {AboutMe} from "./aboutMe/AboutMe";
import {ProfessionalInfo} from "./ProfessionalInfo";
import {PortfolioInfo} from "./PortfolioInfo";
import {StepButton} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 'auto',
            margin: '20px 40px'
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    }),
);

function getSteps() {
    return ['About Me', 'Professional Experience', 'Portfolio'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <AboutMe/>;
        case 1:
            return <ProfessionalInfo/>;
        case 2:
            return <PortfolioInfo/>;
        default:
            return 'Unknown step';
    }
}

export const StepperMenu = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton onClick={() => setActiveStep(index)}> {label}</StepButton>
                        ‘ <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                                </Button>
                                < Button
                                    disabled={activeStep === steps.length - 1}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    style={{backgroundColor: "lightslategrey"}}
                                    className={classes.button}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
