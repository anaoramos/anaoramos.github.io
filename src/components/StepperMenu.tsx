import React from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import { PortfolioInfo } from "./PortfolioInfo";
import { StepButton } from "@material-ui/core";
import EducationInfo from "./EducationInfo";
import { StepIconProps } from "@material-ui/core/StepIcon";
import ProfessionalInfo from "./ProfessionalInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "auto",
      margin: "20px 40px",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    customLabelStyle: {
      fontFamily: "monospace",
    },
    customLabelStyle_: {
      fontFamily: "monospace",
      color: "red",
    },
  })
);

function getSteps() {
  return [
    "Professional Experience",
    "Education",
    "Portfolio",
    "Certifications",
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <ProfessionalInfo />;
    case 1:
      return <EducationInfo />;
    case 2:
      return <PortfolioInfo />;
    default:
      return "WIP...";
  }
}

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "lightslategrey",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
});

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      <div className={classes.circle} />
    </div>
  );
}

export const StepperMenu = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(-1);
  const steps = getSteps();

  const handleOnClick = (step: number) => {
    if (activeStep !== -1 && step === activeStep) {
      setActiveStep(-1);
    } else {
      setActiveStep(step);
    }
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={() => handleOnClick(index)}>
              <StepLabel
                StepIconComponent={QontoStepIcon}
                classes={{ label: classes.customLabelStyle }}
              >
                {label}
              </StepLabel>
            </StepButton>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
