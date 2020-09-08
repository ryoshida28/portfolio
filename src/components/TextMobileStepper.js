import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function getStyles(width) {
    return (makeStyles((theme) => (
        {
            root: {
                maxWidth: width,
                flexGrow: 1,
                margin: "auto",
                boxShadow: "2px 1px 10px #666"
            },
            header: {
                display: 'flex',
                alignItems: 'center',
                height: 50,
                paddingLeft: theme.spacing(4),
                color: "#fff",
                backgroundColor: "#000",
            },
            img: {
                maxWidth: width,
                overflow: 'hidden',
                display: 'block',
                width: '100%',
                },
                stepper: {
                backgroundColor: '#eee'
            }
        }
    )))
}

export default function TextMobileStepper(props) {
    const tutorialSteps = props.steps;
    const classes = getStyles(props.width)();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => (prevActiveStep + 1)%maxSteps);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => (prevActiveStep - 1 + maxSteps)%maxSteps);
    };

    return (
        <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
        />
        <MobileStepper
            className={classes.stepper}
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
            <Button size="small" onClick={handleNext}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
            </Button>
            }
        />
        </div>
    );
}
