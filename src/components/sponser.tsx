import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image"; // Use this if you're in Next.js, else use <img>

const sponsors = [
  {
    label: "Title Sponsor ",
    img: "/VISMAY RUN LOGO 1 with back.png", // Replace with uploaded image path
  },
  {
    label: "Presented By ",
    img: "/rotat emp.png", // Replace with uploaded image path
  },
  {
    label: "Banking partner",
    img: "/sbi.png", // Your uploaded image path
  },
];

export default function SponsorsSection() {
  return (
    <Box sx={{ py: 6, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Sponsors & Partners
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {sponsors.map((sponsor, idx) => (
          <Box key={idx}>
            <Paper
              elevation={1}
              sx={{
                width: { xs: 150, sm: 200 },
                height: { xs: 200, sm: 260 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="subtitle1" mb={1}>
                {sponsor.label}
              </Typography>
              {/* Use next/image for optimized image loading if Next.js */}
              <Box sx={{ width: 120, height: 120, position: "relative" }}>
                <Image
                  src={sponsor.img}
                  alt={sponsor.label}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Paper>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
