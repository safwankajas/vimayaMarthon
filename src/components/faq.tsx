import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Any woman aged 12 and above.",
  },
  {
    question: "Is the event timed?",
    answer: "NO",
  },
  {
    question: "Are there prizes?",
    answer: "Yes! Top 3 finishers will receive trophies and gift hampers.",
  },
  {
    question: "Can men join?",
    answer:
      "This is an exclusive women-only event, but men can volunteer and support.",
  },
];

export default function FAQSection() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#fcefdc" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={4}
          color="#7B1E3A"
        >
          FAQs
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: "3px",
              borderRadius: 1,
              backgroundColor: "#fff",
              boxShadow: 2,
              "&::before": { display: "none" },
            }}
            slotProps={{ transition: { timeout: 250 } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#7B1E3A" }} />}
            >
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#f0f0f0" }}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
