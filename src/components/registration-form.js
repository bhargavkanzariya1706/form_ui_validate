import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import UserInformations from './user-information'
import AddressDetails from './address-details'
import ThankYou from './thank-you'

const steps = ['User Information', 'Address Details', 'Thank you'];

export default function RegistrationForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [userDetails, setUserDetails] = useState({
        'gender': 'Male',
        'maritalStatus': 'Single'
    });
    const [addressDetails, setAddressDetails] = useState({});
    
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <UserInformations setUserDetails={setUserDetails} userDetails={userDetails} handleNext={handleNext} />;
            case 1: return <AddressDetails handleBack={handleBack} handleNext={handleNext} addressDetails={addressDetails} setAddressDetails={setAddressDetails} />;
            case 2: return <ThankYou userDetails={userDetails} addressDetails={addressDetails} handleBack={handleBack} />;
            default: return null;
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit">
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ m: 3, ml: '10%' }}>
                {getSectionComponent()}
            </Box>
        </Box>
    );
}
