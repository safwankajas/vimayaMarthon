"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

export const HomePage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const stopRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const dynamicTranslate = offsetY < 450 ? -offsetY * 0.5 : -250;

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/Home1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // transform: `translateY(${offsetY * 0.3}px)`,
          // transition: "transform 0.1s ease-out",
          zIndex: 1,
          willChange: "transform",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      >
        {/* Foreground content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            Empower.
            <br />
            Endure. Excel.
          </Typography>
        </Container>

        <Box
          sx={{
            backgroundColor: { xs: "rgba(0,0,0,0.4)", md: "rgba(0,0,0,0.25)" },
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: "#fff",
            p: 4,
            borderRadius: 3,
            width: { xs: "100%", md: "70%" },
            mx: "auto",
            mt: { xs: "-50%", md: "-5%" },
            transform: `translateY(${dynamicTranslate}px)`,
            transition: "transform 0.1s ease-out",
            position: "relative",
            zIndex: 3,
          }}
        >
          <Typography variant="body2" mt={2}>
            October 5, 2025 | Durbar Hall, Ernakulam
          </Typography>
          <Typography variant="body2" mt={0.5}>
            Reporting: 5:30 AM | Flag-off: 6:00 AM
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

          <Typography ref={stopRef} variant="body1">
            All Women Marathon is a celebration of womanhood, endurance, and
            community strength. Organized by the Rotary Club of Tripunithura
            Royale, this landmark event is designed to empower women through
            fitness, wellness, and purpose. Join thousands of women from all
            walks of life as they run together for a cause that will help to
            provide insulin pumps for children suffering from Type-1 Diabetes.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
