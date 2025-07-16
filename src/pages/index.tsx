import { Box, Button, Container, Typography } from "@mui/material";
import { Header } from "../components/header";
import { HomePage } from "@/components/home";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        id="home"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          px: 2,
          pt: { xs: 10, sm: 0 },
          // overflow: "hidden", // important to hide background overflow
        }}
      >
        <HomePage />
      </Box>
      <Box id="about" sx={{ height: "1000px" }}>
        <>
          <Container
            sx={{
              mt: { xs: 0, md: 0 },
              mb: 2, // overlap effect
              zIndex: 3,
              position: "relative",
              backgroundColor: {
                xs: "rgba(0,0,0,0.3)",
                md: "rgba(0,0,0,0.25)",
              },
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              color: "#fff",
              p: 4,
              borderRadius: 3,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
              width: { xs: "100%", md: "70%" },
            }}
          >
            <Typography variant="subtitle1" mt={1}>
              October 5, 2025 | Durbar Hall, Ernakulam
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#register"
              sx={{
                my: 1,
                backgroundColor: "#7B1E3A",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#5a152b",
                },
              }}
            >
              Register Now
            </Button>
            <Typography variant="h5" fontWeight="bold" mb={1}>
              Overview
            </Typography>
            <Typography variant="body1">
              Vismay Run 2025 – All Women Marathon is a celebration of
              womanhood, endurance, and community strength. Organized by the
              Rotary Club of Tripunithura Royale, this landmark event is
              designed to empower women through fitness, wellness, and purpose.
              Join thousands of women from all walks of life as they run
              together for a cause that will help to provide insulin pumps for
              children suffering from Type-1 Diabetes.
            </Typography>
          </Container>
        </>
      </Box>
      <Box id="register" sx={{ height: "1000px" }}>
        <>Register</>
      </Box>
      <Box id="contact" sx={{ height: "1000px" }}>
        <>Contact</>
      </Box>
    </>
  );
}
