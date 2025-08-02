import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { lowQualityData } from "./homelowquality";

export const HomePage = () => {
  const [showFirst, setShowFirst] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(true);
    }, 10000); // Show typewriter after 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      {/* Blurred Background Image */}
      <Image
        src="/home2.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover", zIndex: 1 }}
        placeholder="blur"
        blurDataURL={lowQualityData}
        priority
      />

      {/* Optional dark overlay for text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.2)", // instead of gradient
          zIndex: 2,
        }}
      />

      {/* Foreground Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 3,
          color: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 70,
            left: 20,
            zIndex: 4,
            textAlign: "left",
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 160,
              height: 50,
              background: "rgba(255, 255, 255, 0.5)",
              my: 2,
              p: "2px",
              pt: 1,
            }}
          >
            <Image
              src="/VISMAY LOGO.png"
              alt="Vismay Logo"
              width={140}
              height={40}
              style={{ objectFit: "contain", marginBottom: 8 }}
            />
          </Box>

          {/* RUN Title */}
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "4rem", md: "6rem" },
              color: "#5f0a3d",
              lineHeight: 1.6,
              letterSpacing: "3px",
              transform: "scaleY(2.5)",
              textTransform: "uppercase",
              fontFamily: `"Red Rose", sans-serif`,
            }}
          >
            RUN
          </Typography>

          {/* Year */}
          <Typography
            sx={{
              my: 1,
              fontWeight: 800,
              fontSize: { xs: "4rem", md: "5rem" },
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            2025
          </Typography>

          {/* Typewriter / Static Text */}
          <Box
            sx={{
              minHeight: { xs: "10rem", md: "12rem" },
              position: "relative",
            }}
          >
            {!showFirst ? (
              <Typography
                sx={{
                  position: "absolute",
                  mt: 1,
                  fontWeight: 700,
                  fontSize: { xs: "4rem", md: "5rem" },
                  color: "#ffffff",
                  lineHeight: 0.8,
                }}
              >
                WOMEN’S <br /> MARATHON
              </Typography>
            ) : (
              <Typography
                sx={{
                  position: "absolute",
                  mt: 1,
                  fontWeight: 700,
                  fontSize: { xs: "3.8rem", md: "5rem" },
                  color: "#ffffff",
                  lineHeight: 0.8,
                }}
              >
                <Typewriter
                  words={["Empower.\nEndure.Excel.", "WOMEN’S  MARATHON"]}
                  loop={false}
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={5000}
                />
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
