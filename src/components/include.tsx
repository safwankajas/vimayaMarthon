import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const inclusions = [
  { label: "Branded T-Shirt", img: "/shirt.png" },
  { label: "Finisher Medal", img: "/medal.png" },
  { label: "Bib Number", img: "/bib.png" },
  { label: `Refreshments & Hydration`, img: "/water.png" },
  {
    label: "E-Certificate",
    img: "/cert.png",
  },
  { label: "Medical & Emergency Support", img: "/med.png" },
  { label: "Other goodies in run kit", img: "/gift.png" },
  { label: "Attractive Offer coupons", img: "/offer.png" },
];

export default function InclusionsWithImages() {
  return (
    <Box
      sx={{
        backgroundColor: "#fcefdc",
        py: 6,
        px: { xs: 2, md: 6 },
        borderTop: "4px solid #7B1E3A",
        borderBottom: "4px solid #7B1E3A",
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
          <Grid item xs={6} sm={3} key={index}>
            <Box
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
                  height: 70,
                  mb: 1,
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="body1"
                color="text.primary"
                fontWeight={"bold"}
                px={1}
                sx={{ fontSize: "10px" }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
