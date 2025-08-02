"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { Header } from "@/components/header";
import { Red_Rose } from "next/font/google";
const redRose = Red_Rose({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

// Only content paragraphs now
const terms = [
  "Registrations are non-refundable, non-transferable. For any reason you cannot turn up on race day, no refund of any form will be given.",
  "No refund will be provided in case of any unforeseen circumstances or government restrictions during the race day.",
  "You agree that the Organizer shall not be liable for any personal injury, death or property loss as a result of participation in the event. You take full responsibility for participating in the event and do not hold the organizing committee or any of its Sponsors, members, or entities responsible for any injury or accident.",
  "You shall consult your physician and undergo complete medical examination to assess your suitability to participate in the event.",
  "I accept full responsibility for any risks of injury, health issues, or medical conditions that may arise before, during, or after the event and commit to consulting my doctor should any health concerns emerge.",
  "You agree to abide by the instructions provided by the organizers from time to time in the best interest of your health and event safety.",
  "I hereby consent to receive information through SMS/Email on my registered number/email address.",
  "I hereby unconditionally authorise the Event Management and Sponsors to send promotional mailers and sms including any service, products or offers.",
  "Any information sent to the email address registered with the organizers shall be deemed as received by the participants.",
  "You also agree to stop if instructed by the Race Director or the Medical Staff or by the Aid Station Volunteers.",
  "You confirm that your name and media recordings taken during your participation may be used to publicize the event.",
  "You may acknowledge and agree that your personal information can be stored and used by the event organizer, or Sponsors or any other company in connection with the organization, promotion and administration of the event and for the compilation of statistical information.",
  "You confirm that, in the event of adverse weather conditions, major incidents or threats on the day, any of the force majeure or restriction by authority, the organizers reserve the right to stop/cancel/postpone the event. You understand that confirmed registrations and merchandise orders are non-refundable, non-transferable and cannot be modified. The organizers reserve the right to reject any application without providing reasons. Any amount collected from rejected applications alone will be refunded in full (excluding bank charges wherever applicable).",
  "If this registration is being made on behalf of a minor, I agree that allowing a minor to participate is purely subjected to the review and approval of the Race Management Team. I confirm that I am the parent / guardian of the child and that he/she has my permission to take part in the event. I further concur that all the above rules shall apply to him/her as if he were a major.",
  "Participants will not be allowed to stay on the course beyond the cut-off time considering the safety and health issues.",
  "We request total co-operation from participants in this regard.",
];

const TermsAndConditions = () => {
  return (
    <>
      <Header register={true} />

      <Box
        id="terms"
        sx={{
          mt: 4,
          px: { xs: 2, md: 6 },
          py: 6,
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <Typography
          className={redRose.className}
          variant="zenHeadingh1"
          component="h1"
          gutterBottom
          sx={{
            color: "#620b38",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Terms & Conditions
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {terms.map((content, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "#620b38",
                mt: "8px",
                mr: 2,
                flexShrink: 0,
              }}
            />
            <Typography paragraph sx={{ mt: 0 }}>
              {content}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TermsAndConditions;
