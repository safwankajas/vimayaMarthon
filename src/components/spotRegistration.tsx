import React from "react";
import { Box, Typography, Paper, Button, Stack, Link } from "@mui/material";

export default function SpotRegistration() {
  return (
    <Box id="groupRegister"
      sx={{
        minHeight: "100vh",
        bgcolor: "#fff",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        py: 6,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mt: 5,
          color: "red",
        }}
      >
        🚨 Regular Registration Closed
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", textAlign: "center", mb: 6 ,color:'black'}}
      >
        👉 SPOT Registrations Only
        <br />
        <Typography
          component="span"
          variant="subtitle1"
          sx={{ display: "block", fontWeight: "400", color: "grey.500" }}
        >
          (T-shirts based on availability. Breakfast & Medal included)
        </Typography>
      </Typography>

      {/* Registration Options */}
      <Stack spacing={4} sx={{ width: "100%", maxWidth: 800 }}>
        {/* Option A */}
        <Paper
          elevation={6}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Option A – Before Event
          </Typography>
          <Typography gutterBottom>
            📍 Vismay MG Road Showroom <br />
            No.XL/1733, Mahatma Gandhi Rd, Near Kavitha Theatre 4K 3D, Shenoys,
            Kochi, Kerala 682035
          </Typography>
          <Typography>
            📞 Contact:{" "}
            <Link
              href="tel:7907699331"
              underline="none"
              sx={{ color: "grey.600" }}
            >
              7907699331
            </Link>
          </Typography>
        </Paper>

        {/* Option B */}
        <Paper
          elevation={6}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Option B – On Event Day
          </Typography>
          <Typography>
            📍 Registration Desk, Durbar Hall <br />
            Ernakulam South, Kochi, Kerala – 682016
          </Typography>
        </Paper>
      </Stack>

      {/* Note */}
      <Typography
        variant="body1"
        sx={{ textAlign: "center", color: "grey.500", mt: 6 }}
      >
        Note: Regular registrations are now closed. Please avail spot
        registrations from the above options.
      </Typography>

      {/* CTA Buttons */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mt: 6 }}>
        <Button
          variant="contained"
          href="https://maps.app.goo.gl/NTUpX6XkcLn6SqZV6?g_st=ipc"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#620b38",
            borderRadius: 3,
            px: 4,
            py: 1.5,
            fontWeight: "600",
            "&:hover": { bgcolor: "darkred" },
          }}
        >
          Directions – Showroom
        </Button>
        <Button
          variant="contained"
          href="https://maps.app.goo.gl/Wud9mgHmXvMBbzHT6?g_st=ipc"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#620b38",
            borderRadius: 3,
            px: 4,
            py: 1.5,
            fontWeight: "600",
            "&:hover": { bgcolor: "darkred" },
          }}
        >
          Directions – Durbar Hall
        </Button>
      </Stack>
    </Box>
  );
}
