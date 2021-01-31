import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import {InfoStep} from "./InfoStep";
import profilePhoto from '../../assets/profile.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        completed: {
            display: 'inline-block',
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

function getSteps() {
    return ['How it started...', 'How was it...', 'How it goes...'];
}

const infoStart = (
    <Typography variant="body2" gutterBottom>
        It all started in 1996 when I was born in Massarelos, Porto. I lived in Vila do Conde until I was 18.
        <br/>
        As a child, I would spend the days with my sweet grandmother and play with my cousins. We were the kind of
        kids who look adorable but act like little devils.
    </Typography>
)

const infoMiddle = (
    <Typography variant="body2" gutterBottom>
        All my life I haven't been that good at sports, I've tried voleybol, golf, badminthon, archery, dancing ... but
        I wasn't good at all.
        <br/>
        I've always preferred to go for a walk in nature or near the river and then stop listing music music or reading a
        book.
        <br/>
        Today I still love doing these things. I love reading and listing music or podcasts. But I no longer dream of
        becoming a famous singer...
    </Typography>
)

const infoEnd = (
    <Typography variant="body2" gutterBottom>
        Even though I am young, I have already lived in Braga, Madrid and Lisbon.
        <br/>
        I really like to know new cities from a touristic point of view or as a local. My next big dream trip is to New
        York. I really want to see what the big apple looks like and I'm sure I won't have to wait too long for it.
        <br/>
        Now you know a little more about my personality. Check out some other aspects below.
    </Typography>
)


function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <InfoStep srcImage={profilePhoto} textInformation={infoStart}/>;
        case 1:
            return <InfoStep srcImage={profilePhoto} textInformation={infoMiddle}/>;
        case 2:
            return <InfoStep srcImage={profilePhoto} textInformation={infoEnd}/>;
        default:
            return 'Unknown step';
    }
}

export const PersonalInfo = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState(new Set<number>());
    const steps = getSteps();

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    function isStepComplete(step: number) {
        return completed.has(step);
    }

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const buttonProps: { optional?: React.ReactNode } = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepButton
                                onClick={handleStep(index)}
                                completed={isStepComplete(index)}
                                {...buttonProps}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper>
            <div>

                <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div>
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                        <Button
                            disabled={activeStep === steps.length - 1}
                            variant="contained"
                            color="primary"
                            onClick={handleNext}>
                            Next
                        </Button>

                    </div>
                </div>

            </div>
        </div>
    );
}