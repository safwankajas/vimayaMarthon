import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

const Register = () => {
  const raceData = {
    title: "5K Run",
    distance: "5km",
    minAge: 12,
    price: {
      earlyBird: 399,
      regular: 499,
      earlyBirdDate: "Until Aug 20",
      afterDate: "After Aug 20",
    },
    includes: [
      { imgSrc: "/shirt.png", label: "Branded T-Shirt (until Sep 25)" },
      { imgSrc: "/medal.png", label: "Finisher Medal" },
      { imgSrc: "/bib.png", label: "Bib Number" },
      { imgSrc: "/water.png", label: "Refreshments & Hydration" },
      { imgSrc: "/gift.png", label: "Other goodies in run kit" },
      { imgSrc: "/cert.png", label: "E-Certificate" },
      { imgSrc: "/med.png", label: "Medical & Emergency Support" },
      { imgSrc: "/offer.png", label: "Attractive Offer coupons" },
    ],
    imageSrc: "/05-category.jpg", // Image path for 5K
    registerLink: "/spotRegistration", // Replace with the actual registration link
  };

  return (
    <Box sx={{ px: 1, py: 2, background: "#F5F5F5" }}>
      {/* Heading Section */}
      <Box
        sx={{
          // backgroundColor: "#87CEEB", // Light blue background color
          padding: "16px 0",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="zenHeadingh1"
          fontSize={"2rem"}
          fontWeight="bold"
          sx={{ color: "#000" }}
        >
          Race Categories
        </Typography>
      </Box>

      {/* Race Cards */}
      <Grid container spacing={3} justifyContent="center">
        <Box>
          <Card
            sx={{
              display: { md: "flex" },
              borderRadius: 2,

              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            {/* Image & Timed Badge */}
            <Box
              sx={{
                // my: "auto",
                display: "block",
                alignContent: "center",
                justifyContent: "center",
                position: "relative",
                background: "#620b38",
              }}
            >
              <img
                src={raceData.imageSrc}
                alt={raceData.title}
                className="w-full object-cover aspect-video"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#fff",
                  borderRadius: "50px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Women
              </Box>
            </Box>

            {/* Card Content */}
            <CardContent sx={{ padding: "16px" }}>
              <>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {raceData.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#620b38", fontWeight: "bold" }}
                >
                  {raceData.distance}
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575" }}>
                  Age limit: {raceData.minAge} Years & above
                </Typography>
              </>
              <>
                {/* What's Included */}
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  What&apos;s Included:
                </Typography>
                <Box
                  sx={{
                    mt: 1,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1,
                  }}
                >
                  {raceData.includes.map((item, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Box sx={{ mr: 1 }}>
                        <img
                          src={item.imgSrc}
                          alt={item.label}
                          style={{
                            width: "15px", // Adjust the size of the icon as needed
                            height: "15px",
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ fontSize: "12px" }}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </>
              {/* Pricing */}
              <>
                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "8px",
                    padding: "16px",
                    mt: 2,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 3,
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ color: "#333" }}>
                      <strong>Early Bird</strong>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#757575",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{raceData.price.earlyBird}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                      {raceData.price.earlyBirdDate}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#333" }}>
                      <strong>Regular</strong>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: "#620b38",
                      }}
                    >
                      ₹{raceData.price.regular}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                      {raceData.price.afterDate}
                    </Typography>
                  </Box>
                </Box>

                {/* Register Button */}
                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#620b38",
                      color: "#fff",
                    }}
                    href={raceData.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </Button>
                </Box>
              </>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Box>
  );
};

export default Register;
