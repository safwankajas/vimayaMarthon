"use client";
import React, { useRef } from "react";
import { Box, Card, Typography } from "@mui/material";
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
        backgroundColor: "#7B1E3A",
        color: "#fff",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 6 },
        gap: 4,
      }}
    >
      {/* Left Box (Text) */}
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1}>
          About the Event
        </Typography>
        <Typography variant="body1">
          Vismay Run 2025 isn’t just a marathon—it’s a movement. It’s about
          unity, strength, and creating a platform where every woman, no matter
          her age or background, can run for health, confidence, and a cause.
          With professional organization and community involvement, the event
          ensures safety, support, and celebration every step of the way
        </Typography>
      </Box>

      {/* Right Box (Swiper Gallery) */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
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
          style={{ borderRadius: 12, height: "100%" }}
        >
          {["/Home.jpg", "/Home1.jpg"].map((src, i) => (
            <SwiperSlide key={i}>
              <Card sx={{ height: { xs: 300, md: 400 } }}>
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={600}
                  height={400}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 12,
                    objectFit: "cover",
                  }}
                />
              </Card>
            </SwiperSlide>
          ))}

          {/* Progress Indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              right: 12,
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              zIndex: 10,
              fontSize: 12,
            }}
          >
            <svg
              viewBox="0 0 48 48"
              style={{ position: "absolute", top: 0, left: 0 }}
              width={48}
              height={48}
            >
              <circle
                ref={progressCircle}
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                strokeDasharray="126"
                strokeDashoffset="0"
              />
            </svg>
            <span ref={progressContent} />
          </Box>
        </Swiper>
      </Box>
    </Box>
  );
};
