import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const inclusions = [
  { label: "Branded T-Shirt", img: "/shirt.png" },
  { label: "Finisher Medal", img: "/medal.png" },
  { label: "Bib Number", img: "/bib.png" },
  { label: `Refreshments &\nHydration`, img: "/water.png" },
  { label: "Other goodies\n in run kit", img: "/gift.png" },
  { label: "E-Certificate", img: "/cert.png" },
  { label: "Medical & \nEmergency Support", img: "/med.png" },
  { label: "Attractive Offer\n coupons", img: "/offer.png" },
];

export default function InclusionsWithImages() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        color="#7B1E3A"
        mb={4}
      >
        What’s Included
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {inclusions.map((item, index) => (
          <Box
            key={index}
            textAlign="center"
            sx={{
              // border: "1px dashed #7B1E3A",
              borderRadius: "10px",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.label}
              sx={{
                height: 80,

                objectFit: "contain",
              }}
            />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight={"bold"}
              px={1}
              sx={{
                fontSize: "10px",
                whiteSpace: "pre-line",
                textAlign: "center",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
