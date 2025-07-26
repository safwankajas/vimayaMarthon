// components/RegistrationStatusCard.tsx

"use client";

import React from "react";
import { Box, Typography, Button, Paper, Stack, useTheme } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

export const RegistrationStatusCard = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 6 } }}>
      <Paper
        elevation={10}
        sx={{
          position: "relative",
          borderRadius: "12px",
          border: `1px solid ${theme.palette.divider}`,
          px: { xs: 2, md: 8 },
          py: { xs: 3, md: 4 },
          maxWidth: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 3,
          mY: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "15%", md: 0 },
            right: 0,
            left: 0,
            bottom: 0,
            width: { xs: "100%", md: "100%" },
            height: "100%",
            backgroundImage: `url(/kochi2.png)`,
            backgroundSize: "contain", // or try "cover"
            backgroundRepeat: "repeat-x",
            backgroundPosition: " right",
            opacity: 0.1,
            zIndex: 0,
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        />
        {/* Left: Icon + Text */}
        <Box
          display="flex"
          alignItems="flex-start"
          gap={2}
          sx={{ width: { xs: "100%", md: "60%" } }}
        >
          <Box>
            <Typography variant="zenHeadingh1" fontWeight="700" fontSize={30}>
              Overview
            </Typography>
            <Typography
              sx={{ textAlign: "justify" }}
              mt={0.5}
              color="text.secondary"
              fontSize={15}
            >
              All Women Marathon is a celebration of womanhood, endurance, and
              community strength. Organized by the Rotary Club of Tripunithura
              Royale, this landmark event is designed to empower women through
              fitness, wellness, and purpose. Join thousands of women from all
              walks of life as they run together for a cause that will help to
              provide insulin pumps for children suffering from Type-1 Diabetes.
            </Typography>
            <Typography
              fontWeight={"bold"}
              mt={1}
              color="text.secondary"
              fontSize={14}
            >
              October 5, 2025 | Durbar Hall Ground, Ernakulam
            </Typography>
            <Typography
              fontWeight={"bold"}
              mt={0}
              color="text.secondary"
              fontSize={14}
            >
              Reporting: 5:30 AM | Flag-off: 6:30 AM
            </Typography>
          </Box>
        </Box>

        {/* Right: Buttons */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          width={{ xs: "100%", md: "50%" }}
        >
          <Button
            fullWidth
            variant="contained"
            href="#register"
            sx={{
              background: "#620b38",
              fontWeight: "bold",
              borderRadius: 2,
              px: 3,
              textTransform: "none",
              boxShadow: 2,
            }}
          >
            Register Now
          </Button>
          <Button
            fullWidth
            variant="outlined"
            href="#group-registration"
            startIcon={<GroupOutlinedIcon />}
            sx={{
              color: "#620b38",
              fontWeight: "bold",
              borderRadius: 2,
              border: "2px solid #620b38",
              px: 3,
              textTransform: "none",
            }}
          >
            Group Registration
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};
