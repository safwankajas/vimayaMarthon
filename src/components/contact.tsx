import { Box, Typography, Stack, Link, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContactUs() {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        borderRadius: 4,
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={4}>
        Contact Us
      </Typography>

      <Stack spacing={2} alignItems="center">
        <Typography fontWeight={600}>Event Coordinator:</Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <PhoneIcon color="primary" />
          <Typography>+91-9562415620</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <EmailIcon color="primary" />
          <Typography>Email coming soon</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <LocationOnIcon color="primary" />
          <Typography>Follow Us On:</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <IconButton
            component={Link}
            href="https://instagram.com/vismayrun"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <InstagramIcon fontSize="large" color="error" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://fb.com/vismayrun2025"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <FacebookIcon fontSize="large" color="primary" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
