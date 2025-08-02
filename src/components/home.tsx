import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { RegistrationStatusCard } from "./groupRegister";
import Image from "next/image";

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

          background: "rgba(0, 0, 0, 0.3)",
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
          <Box sx={{ position: "absolute", bottom: 0 }}>
            <Image src={"/run.webp"} alt="run" width={300} height={900} />
          </Box>

          {/* <Typography
            variant="zenHeadingh1"
            fontSize={"4rem"}
            fontWeight="bold"
          >
            Empower.
            <br />
            Endure. Excel.
          </Typography> */}
        </Container>
      </Box>
    </>
  );
};
