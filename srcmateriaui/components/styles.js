import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WizardBody from './wizardBody';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps(wizard) {
    let steps = [];
    for(let i=0; i<wizard.length;i++){
        steps[i] = wizard[i].tittle
    }
  return steps;
}

/*function getStepContent(wizardView) {
  return
}*/

export default function HorizontalLabelPositionBelowStepper(wizard,step,pasarSiguiente,pasarAtras,handleReset) {
  const classes = useStyles();
  //const [activeStep, setActiveStep] = useState(step);
  const steps = getSteps(wizard);

  /*function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }*/

  /*function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }*/

  /*function handleReset() {
    setActiveStep(0);
  }*/

  return (
    <div className={classes.root}>
  
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
 
      <div>
        {step === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <WizardBody subtittle = {wizard[step].subtittle} img  = {wizard[step].image} content  = {wizard[step].content}/>
            <div>
              <Button
                disabled={step === 0}
                onClick={pasarAtras()}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={pasarSiguiente()}>
                {step === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}