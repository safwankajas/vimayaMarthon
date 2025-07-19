import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image"; // If not using Next.js, replace with <img src=...>

const previews = [
  {
    title: "Finisher Medal",
    img: "/medal.png", // Replace with actual image path
  },
  {
    title: "Event T-Shirt",
    img: "/shirt.png", // Replace with actual image path
  },
];

export default function MedalTShirtPreview() {
  return (
    <Box sx={{ py: 6, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Medal & T-Shirt Previews
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {previews.map((item, index) => (
          <Box key={index}>
            <Paper
              elevation={2}
              sx={{
                width: 200,
                height: 280,
                p: 2,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                {item.title}
              </Typography>
              <Box sx={{ width: 120, height: 120, position: "relative" }}>
                <Image
                  src={item.img}
                  alt={item.title}
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
