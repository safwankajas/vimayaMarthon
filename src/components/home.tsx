import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { RegistrationStatusCard } from "./groupRegister";
import Image from "next/image";

export const HomePage = () => {
  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000); // 5 seconds each

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/home2.jpg')",
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

          background: "rgba(0, 0, 0, 0.2)",
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
          {/* <Image src={"/VISMAY LOGO.png"} alt="run" width={300} height={900} /> */}
          <Box
            sx={{
              position: "absolute",
              bottom: 70,
              left: 20,
              zIndex: 10,
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                borderRadius: "10px",
                display: "flex", // Flex container
                justifyContent: "center", // Horizontal center
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

            {/* RUN – taller text using transform */}
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "4rem", md: "6rem" },
                color: "#5f0a3d", // deep purple
                lineHeight: 1.6,
                letterSpacing: "3px", // tighter spacing
                transform: "scaley( 2.5)", // scaleX (width), scaleY (height)
                textTransform: "uppercase",
                fontFamily: `"Red Rose", sans-serif`, // or a custom bold font if needed
              }}
            >
              RUN
            </Typography>
            {/* 2025 */}
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

            {/* WOMEN’S MARATHON */}

            <Box
              sx={{
                minHeight: { xs: "10rem", md: "12rem" },
                position: "relative",
              }}
            >
              {showFirst ? (
                <Typography
                  sx={{
                    position: "absolute", // Prevents layout shift
                    mt: 1,
                    fontWeight: 700,
                    fontSize: { xs: "4rem", md: "5rem" },
                    color: "#ffffff",
                    lineHeight: 0.8,
                    fontFamily: `"Red Rose", sans-serif`,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  WOMEN’S <br /> MARATHON
                </Typography>
              ) : (
                <Typography
                  sx={{
                    position: "absolute", // Prevents layout shift
                    mt: 1,
                    fontWeight: 700,
                    fontSize: { xs: "4rem", md: "5rem" },
                    color: "#ffffff",
                    lineHeight: 0.8,
                    fontFamily: `"Red Rose", sans-serif`,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  Empower.
                  <br />
                  Excel.Endure.
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
