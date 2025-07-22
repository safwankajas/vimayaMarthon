import React from "react";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

const steps = [
  "Click on “Register Now” button.",
  "Fill in participant details.",
  "Choose your T-shirt size",
  "Make secure payment",
];

export default function HorizontalStepper() {
  return (
    <Box sx={{ my: 3 }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  color: "#7B1E3A",
                  fontWeight: "bold",
                },
                "& .MuiStepIcon-root": {
                  color: "#7B1E3A",
                },
                "& .Mui-active .MuiStepIcon-root": {
                  color: "#7B1E3A",
                },
                "& .Mui-completed .MuiStepIcon-root": {
                  color: "#7B1E3A",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
