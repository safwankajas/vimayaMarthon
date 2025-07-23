import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { audio } from "framer-motion/client";

export default function EventLocation() {
  return (
    <Box
      id="location"
      sx={{
        py: { xs: 1, md: 2 },
        px: { xs: 1, md: 8 },
        backgroundColor: "#7B1E3A",
        color: "#1F2937",
      }}
    >
      {/* Info Card */}
      <Card
        sx={{
          //  ,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center", // 👈 Vertical center
          justifyContent: "center", // 👈 Horizontal center
          borderRadius: 4,
          background: "#F5F5F5",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#000",
          boxShadow: 3,
        }}
      >
        <CardContent
          sx={{
            width: { md: "50%", xs: "100%" },
            m: "3px",
            borderRadius: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="zenHeadingh1"
            fontSize={"2rem"}
            sx={{
              fontWeight: 700,
              color: "#7B1E3A",
              mb: 4,
            }}
          >
            Event Location
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            Join us at Durbar Hall Ground, Ernakulam, for a memorable marathon
            celebrating women’s strength and community spirit on{" "}
            <strong>October 5th, 2025</strong>.
          </Typography>

          <Typography fontWeight={"bold"} sx={{ mb: 2 }}>
            Durbar Hall Ground, Ernakulam | 5:30 AM
          </Typography>
        </CardContent>
        <Box
          sx={{
            flex: 1,
            p: 1.5,
            m: 1,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
            background: "#fff",
            height: { xs: "300px", md: "350px" },
          }}
        >
          <iframe
            title="Durbar Hall Ground Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2248492956734!2d76.2829945!3d9.9685738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872b222b6b8cd%3A0x4221de1b77b495cd!2sDurbar%20Hall%20Ground!5e0!3m2!1sen!2sin!4v1721368476501!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Card>

      {/* Google Map */}
    </Box>
  );
}
