"use client";

import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import Image from "next/image";

const organizer = {
  label: "Title sponsor",
  img: "/VISMAY LOGO.png", // Replace with your actual organizer logo path
};

const supportingPartners = [
  {
    label: "Transport partner",
    img: "/KMRL_log.png",
  },
  {
    label: "Banking Partner",
    img: "/SIB_logo.png",
  },
  {
    label: "Refreshment Partner",
    img: "/Fruitbae_logo.jpg",
  },
  {
    label: "T-Shirt Partner",
    img: "/VANLEE UNIFORMS.png",
  },
  {
    label: "Sports Partner",
    img: "/decathelon.jpg",
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

      <Box mt={1} mb={1}>
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
