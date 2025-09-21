"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";

const organizer = {
  label: "Title sponsor",
  img: "/VISMAY LOGO.png", // Replace with your actual organizer logo path
};
const Powered_By = {
  label: "Powered by",
  imgs: ["/SIB_logo.png", "/cyrix.png"], // can add more
};

const supportingPartners = [
  {
    label: "Travel partner",
    img: "/KMRL_log.png",
  },

  {
    label: "Physio Partner",
    img: "/w1.png",
  },
  {
    label: "T-Shirt Partner",
    img: "/VANLEE UNIFORMS.png",
  },
  {
    label: "Sports Partner",
    img: "/decathelon.jpg",
  },

  {
    label: "Media Partner",
    img: "/24 NEWS.png",
  },
  {
    label: "Zumba Partner",
    img: "/ZAPPERS.png",
  },
  {
    label: "Promo Partner",
    img: "/raga.png",
  },
];

export default function SponsorsSection() {
  return (
    <Box sx={{ py: 6, px: 2, textAlign: "center" }}>
      <Typography variant="zenHeadingh1" fontSize={"2rem"} fontWeight={700}>
        Our Partners & Sponsors
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mt={1} mb={4}>
        Endless thanks to our valued partners for their vital support.
      </Typography>

      {/* Organizer */}

      <Box mt={1} mb={3}>
        <Typography variant="zenHeadingh1" fontSize={"1.5rem"} fontWeight={700}>
          {organizer.label}
        </Typography>
        <Box
          sx={{
            my: -12,
            width: 250,
            mx: "auto",
            position: "relative",
            height: 250,
          }}
        >
          <Image
            src={organizer.img}
            alt={organizer.label}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
      <Box mt={3} mb={1}>
        <Typography variant="zenHeadingh1" fontSize={"1.5rem"} fontWeight={700}>
          {Powered_By.label}
        </Typography>

        <Box
          sx={{
            mt: -2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap", // ensures responsiveness
          }}
        >
          {Powered_By.imgs.map((src, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: 170, md: 250 },
                height: 150,
                position: "relative",
              }}
            >
              <Image
                src={src}
                alt={`${Powered_By.label} ${i + 1}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Supporting Partners */}
      <Typography
        variant="zenHeadingh1"
        fontSize={"1.5rem"}
        fontWeight={700}
        gutterBottom
        mb={3}
      >
        Supporting Partners
      </Typography>
      <Grid container mt={2} spacing={3} justifyContent="center">
        {supportingPartners.map((partner, idx) => (
          <Box key={idx}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 2,
                py: 3,
                px: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: 100, height: 60, position: "relative", mb: 2 }}>
                <Image
                  src={partner.img}
                  alt={partner.label}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                variant="body2"
                fontWeight={500}
                color="text.secondary"
              >
                {partner.label}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
