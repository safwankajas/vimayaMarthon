import { Box, Typography, Container, Stack, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#620b38",
        color: "#fff",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            © 2025 Rotary Club of Tripunithura Royale
          </Typography>

          <Stack direction="row" spacing={3}>
            {/* <Link
              href="/privacy"
              underline="hover"
              color="inherit"
              sx={{ fontSize: "14px" }}
            >
              Privacy Policy
            </Link> */}
            <Link
              href="/terms"
              underline="hover"
              color="inherit"
              sx={{ fontSize: "14px" }}
            >
              Terms & Conditions
            </Link>
            {/* <Link
              href="/volunteer"
              underline="hover"
              color="inherit"
              sx={{ fontSize: "14px", fontWeight: 500 }}
            >
              Volunteer Signup
            </Link> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
