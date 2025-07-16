import { Box, Typography, Button, Container } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/Home1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      >
        <Container
          sx={{
            color: "#fff",
            textAlign: "left",
            maxWidth: "md",
            zIndex: 2,
            mb: { xs: 30, md: 20 },
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            Empower.
            <br />
            Endure. Excel.
          </Typography>
        </Container>
      </Box>

      {/* Overlapping Content Section */}
    </>
  );
};
