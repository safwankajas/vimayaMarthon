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
  {
    question: "What is the last date for registration?",
    answer:
      "We suggest completing the registration at least one month in advance of the run to enable us to procure T-shirts of your size and medals.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "In the event of adverse weather conditions, major incidents, or threats on the day, any of the force majeure or restriction by authority, the organizers reserve the right to stop/cancel/postpone the event. The Event Organizers reserve the right to change the course or make any amendments to the event including changing the race route, delaying the race, stopping participants on the course until deemed safe, altering the route distance, or cancelling the event entirely. The event organizer also possesses the sole authority to cancel tickets or postpone the event due to unforeseen circumstances.",
  },
  {
    question: "Where can I collect my race kits?",
    answer:
      "Race kits can be collected from one of the Vismay store locations selected during registration. Group registrants will receive kits through the coordinator. Available locations:\n• VISMAY STORE MG ROAD, ERNAKULAM\n• VISMAY STORE PATHADIPALAM, ERNAKULAM\n• VISMAY STORE VYTTILA, ERNAKULAM\n• VISMAY STORE FORUM MALL, MARADU\n• VISMAY STORE VALLATHOL JUNCTION, KAKKANAD\n• VISMAY STORE ANGAMALY\n• VISMAY STORE ALUVA",
  },
  {
    question: "Can we register as a group?",
    answer:
      "Yes. Group bookings receive special discounts. A group must have at least 10 participants. Contact the organizers with your group leader’s details at:\n Email: rctripunithuraroyale24@gmail.com\n Phone: 9562415620",
  },
  {
    question:
      "Will there be any transportation facility available on event day?",
    answer:
      "Extensive transportation arrangements are being planned. Kochi Metro will provide additional trips and feeder services from locations like Kakkanad and Trippunithura. Additional transport options from other city areas are also under consideration. Please check our website for updates.",
  },
];

export default function FAQSection() {
  return (
    <Box sx={{ py: 2, backgroundColor: "#F5F5F5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="zenHeadingh1"
          fontWeight={700}
          textAlign="center"
          my={2}
          sx={{ fontSize: "2rem", color: "#620b38" }}
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
              mt: "2px",
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
              {faq.answer.split("\n").map((line, idx) => (
                <Typography
                  key={idx}
                  sx={{ whiteSpace: "pre-line", color: "#555" }}
                  paragraph
                >
                  {line}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
