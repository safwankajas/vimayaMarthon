"use client";

import React from "react";
import { Box, Typography, Button, Paper, Stack, useTheme } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import Link from "next/link";

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
          my: 2,
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(/kochi2.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            opacity: 0.1,
            zIndex: 0,
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        />

        {/* Left Content */}
        <Box
          display="flex"
          alignItems="flex-start"
          gap={2}
          sx={{ width: { xs: "100%", md: "60%" }, position: "relative", zIndex: 1 }}
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
              Reporting: 6:00 AM | Flag-off: 6:30 AM
            </Typography>
          </Box>
        </Box>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          width={{ xs: "100%", md: "50%" }}
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Button
            fullWidth
            variant="contained"
            href="/spotRegistration"
            sx={{
              background: "#620b38",
              fontWeight: "bold",
              borderRadius: 2,
              px: 3,
              py:"3px",
              textTransform: "none",
              boxShadow: 2,
            }}
          >
            Register Now
          </Button>

          {/* Group & Contact - Responsive layout */}
          <Box
            sx={{
              border: "2px solid #620b38",
              borderRadius: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-between" },
              textAlign: { xs: "center", md: "left" },
              cursor: "pointer",
              width: "100%",
              px: 3,
              py: "6px",
              color: "#620b38",
              fontWeight: "bold",
              textTransform: "none",
              gap: { xs: 0.5, md: 0 },
              "&:hover": { backgroundColor: "rgba(98, 11, 56, 0.1)" },
            }}
          >
            <Link href="/spotRegistration" passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  fontSize: 13,
                  width: "100%",
                }}
              >
                <GroupOutlinedIcon sx={{ fontSize: 15 }} />
                Group Registration
              </Box>
            </Link>

            <Link href="mailto:rctripunithuraroyale24@gmail.com" passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  color: "gray",
                  fontWeight: "normal",
                  mt: { xs: 0.1, md: 0 },
                  ml: { xs: 0, md: 2 },
                  borderLeft: { xs: "none", md: "1px solid gray" },
                  pl: { xs: 0, md: 2 },
                  fontSize: 11,
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                Contact Organizer
              </Box>
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
