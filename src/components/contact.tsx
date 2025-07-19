import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  Paper,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 2, px: 2, backgroundColor: "#fdfdfd" }}>
      <Paper
        elevation={6}
        sx={{
          mx: "auto",
          maxWidth: 900,
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 6 },
          borderRadius: 5,
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          color="#7B1E3A"
          mb={1}
          letterSpacing={1}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          We’re here to help! Feel free to reach out to us.
        </Typography>

        <Typography
          mb={2}
          fontWeight={600}
          fontSize="18px"
          color="text.primary"
        >
          Event Coordinator:{" "}
          <Box component="span" fontWeight={500}>
            Abcd
          </Box>
        </Typography>

        <Stack
          direction={"row"}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ mb: 4 }}
        >
          <Stack alignItems="center" spacing={1}>
            <PhoneIcon sx={{ color: "#2563eb" }} />
            <Typography variant="body1" color="text.secondary">
              +91-9562415620
            </Typography>
          </Stack>

          <Stack alignItems="center" spacing={1}>
            <EmailIcon sx={{ color: "#2563eb" }} />
            <Typography variant="body1" color="text.secondary">
              event@vismayrun.com
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography
          mb={2}
          fontWeight={600}
          fontSize="18px"
          color="text.primary"
        >
          Follow Us On
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center">
          <IconButton
            component={Link}
            href="https://instagram.com/vismayrun"
            target="_blank"
            rel="noopener"
            sx={{
              backgroundColor: "#fff0f4",
              border: "2px solid #E1306C",
              "&:hover": {
                backgroundColor: "#fce4ec",
              },
            }}
          >
            <InstagramIcon sx={{ color: "#E1306C", fontSize: 32 }} />
          </IconButton>

          <IconButton
            component={Link}
            href="https://fb.com/vismayrun2025"
            target="_blank"
            rel="noopener"
            sx={{
              backgroundColor: "#e8f0fe",
              border: "2px solid #1877F2",
              "&:hover": {
                backgroundColor: "#d0e3fc",
              },
            }}
          >
            <FacebookIcon sx={{ color: "#1877F2", fontSize: 32 }} />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
}
