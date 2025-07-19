import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <Box sx={{ py: 2, backgroundColor: "#fcefdc" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={2}
          sx={{ color: "#1a1a1a" }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            square
            sx={{
              backgroundColor: "#fff",
              borderBottom: "1px solid #ddd",
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#333" }} />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography sx={{ fontWeight: 500, color: "#333" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ py: 1 }}>
              <Typography sx={{ color: "#555" }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
