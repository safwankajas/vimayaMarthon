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
    <Box sx={{ py: 3, px: 3 }}>
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
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            width: { xs: "100%", md: "100%" },
            height: "100%",
            backgroundImage: `url(/kochi4.png)`,
            backgroundSize: "contain", // or try "cover"
            backgroundRepeat: "repeat-x",
            backgroundPosition: " bottom",
            opacity: 0.08,
            zIndex: 0,
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        />
        <Typography
          variant="zenHeadingh1"
          fontSize={"3rem"}
          fontWeight={800}
          color="#7B1E3A"
          mb={1}
          letterSpacing={1}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: 12, md: 20 } }}
          mb={1}
        >
          We’re here to help! Feel free to reach out to us.
        </Typography>

        {/* <Typography
          mb={2}
          fontWeight={600}
          fontSize="18px"
          color="text.primary"
        >
          Event Coordinator:{" "}
          <Box component="span" fontWeight={500}>
            Abcd
          </Box>
        </Typography> */}

        <Stack
          direction={"row"}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          divider={
            <Divider
              sx={{ background: "#7B1E3A" }}
              orientation="vertical"
              flexItem
            />
          }
          sx={{ mb: 4, mt: 4 }}
        >
          <Stack sx={{ width: "50%" }} alignItems="center" spacing={1}>
            <PhoneIcon sx={{ color: "#620b38" }} />
            <Typography
              sx={{ fontSize: { xs: 10, md: 20 } }}
              variant="body1"
              color="text.secondary"
            >
              +91-9562415620
            </Typography>
          </Stack>

          <Stack alignItems="center" spacing={1}>
            <EmailIcon sx={{ color: "#620b38" }} />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: 10, md: 20 } }}
            >
              rctripunithuraroyale24@gmail.com
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, background: "#7B1E3A" }} />

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
            href="https://www.instagram.com/royaletripunithurarotary"
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
            href="https://www.facebook.com/share/17KZzJtdtX/?mibextid=wwXIfr"
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
