"use client";
import React, { useRef } from "react";
import { Box, Card, Paper, Typography } from "@mui/material";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const AboutSection = () => {
  const progressCircle = useRef<SVGCircleElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.strokeDashoffset = `${126 * (1 - progress)}`;
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#fff",
        color: "#000",
        px: { xs: 2, md: 8 },
        py: { xs: 2, md: 2 },
        gap: 4,
      }}
    >
      {/* Left Box (Text) */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          display: "flex",
          flexDirection: "row",
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          gap: 2, // spacing between halves
        }}
      >
        {/* Top Half */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="zenHeadingh1"
            fontSize={"2rem"}
            fontWeight="bold"
            mb={1}
          >
            About the Event
          </Typography>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ textAlign: "justify" }}
          >
            Vismay Run 2025 isn’t just a marathon—it’s a movement. It’s about
            unity, strength, and creating a platform where every woman, no
            matter her age or background, can run for health, confidence, and a
            cause. With professional organization and community involvement, the
            event ensures safety, support, and celebration every step of the
            way.
          </Typography>
        </Box>

        {/* Bottom Half */}
        <Box
          sx={{
            flex: 1,
            p: 1,
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background: "rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#000",
            textAlign: "center",
            display: { md: "flex", xs: "none" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "left", // vertical center
            width: { xs: "50%", md: "50%" },
            gap: 2,
            // mx: "auto", // horizontal center in parent
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              // borderRadius: 4,
              // backdropFilter: "blur(10px)",
              // backgroundColor: "rgba(255, 255, 255, 0.1)",
              // border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Typography
              variant="zenHeadingh1"
              fontSize={"2rem"}
              fontWeight="bold"
              mb={1}
            >
              Organized by
            </Typography>
            <Image
              src="/royalclub.png"
              alt="Rotary Club of Tripunithura Royale"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />

            <Typography color="text.secondary" variant="body1" sx={{ mt: 1 }}>
              With a legacy of service and community leadership, the Rotary Club
              continues to uplift society through housing projects, health and
              empowerment initiatives.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Box (Swiper Gallery) */}
      <Paper
        elevation={10}
        sx={{
          flex: 1,
          position: "relative",
          // aspectRatio: "16 / 9",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            bottom: 0,
            position: "absolute",
            width: "100%",
            height: 70,
            zIndex: 4,
            backdropFilter: "blur(10px)",
            // background: "rgba(255, 255, 255, 0.4)",
            background: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {["VISMAY LOGO.png", "rotat emp.png", "vismay log 2.png"].map(
            (src, i) => (
              <Image
                key={i}
                src={`/${src}`}
                alt={`Logo ${i + 1}`}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
                priority
              />
            )
          )}
        </Box>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          style={{ height: "100%" }}
        >
          {["/vismayphoto1.jpg", "/vismayphoto2.jpg"].map((src, i) => (
            <SwiperSlide key={i}>
              <Card sx={{ height: { xs: 350, md: 450 } }}>
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={200}
                  height={150}
                  style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                  }}
                />
              </Card>
            </SwiperSlide>
          ))}

          {/* Progress Indicator */}
        </Swiper>
      </Paper>

      <Box
        sx={{
          flex: 1,
          p: 1,
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#000",
          textAlign: "center",
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // vertical center
          width: { xs: "100%", md: "100%" },
          gap: 2,
          mx: "auto", // horizontal center in parent
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography
            variant="zenHeadingh1"
            fontSize={"2rem"}
            fontWeight="bold"
            mb={1}
          >
            Organized by
          </Typography>
          <Image
            src="/royalclub.png"
            alt="Rotary Club of Tripunithura Royale"
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
          />

          <Typography color="text.secondary" variant="body1" sx={{ mt: 1 }}>
            With a legacy of service and community leadership, the Rotary Club
            continues to uplift society through housing projects, health and
            empowerment initiatives.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
