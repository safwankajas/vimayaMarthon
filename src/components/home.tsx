"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/Home2.jpg"
          alt="Hero Background"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
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
          <Typography
            component="h1"
            variant="zenHeadingh1"
            fontSize={"4rem"}
            fontWeight="bold"
          >
            Empower.
            <br />
            Endure. Excel.
          </Typography>
        </Container>
      </Box>
    </>
  );
};
