import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import HowToRegisterStepper from "./stepper";
import HorizontalStepper from "./stepper";

const Register = () => {
  const headerCells = ["Distance", "Gender", "Date", "Start Time", "Medals"];
  const rowData = ["5 KM", "Female", "5 Oct 2025", "6:00 AM", "Included"];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          border: "1px dashed #7B1E3A",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0,0,0,0.06)",
          // border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 3, color: "#3b0a0a", textAlign: "center" }}
        >
          RACE CATEGORIES
        </Typography>
        <Box
          sx={{
            // display: "flex",
            justifyContent: "center",
            borderRadius: 4,
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 2,
              boxShadow: "none",
              backgroundColor: "#fcefdc",
              border: "2px solid #7B1E3A",
              width: "100%",
            }}
          >
            {!isMobile ? (
              // Desktop Table
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#7B1E3A" }}>
                    {headerCells.map((header, idx) => (
                      <TableCell
                        key={idx}
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                          textAlign: "center",
                          borderRight:
                            idx !== headerCells.length - 1
                              ? "1px solid #fcefdc"
                              : "none",
                        }}
                      >
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    {rowData.map((cell, idx) => (
                      <TableCell
                        key={idx}
                        align="center"
                        sx={{
                          borderRight:
                            idx !== rowData.length - 1
                              ? "1px solid #7B1E3A"
                              : "none",
                          borderTop: "1px solid #7B1E3A",
                        }}
                      >
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            ) : (
              // Mobile Vertical View
              <Box>
                {headerCells.map((label, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      borderBottom: "1px solid #7B1E3A",
                      borderTop: idx === 0 ? "1px solid #7B1E3A" : "none",
                    }}
                  >
                    <Box
                      sx={{
                        width: "120px",
                        backgroundColor: "#7B1E3A",
                        color: "#fff",
                        fontWeight: "bold",
                        px: 2,
                        py: 1,
                        // m: 1,
                        borderRight: "1px solid black",
                        borderBottom:
                          idx !== headerCells.length - 1
                            ? "1px solid black"
                            : "none",
                      }}
                    >
                      {label}
                    </Box>
                    <Box sx={{ width: "60%", px: 2, py: 1 }}>
                      {rowData[idx]}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </TableContainer>
        </Box>
        <HorizontalStepper />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              width: "200px",
              p: 1,
              mt: 1,
              backgroundColor: "#fcefdc",
              borderRadius: "3px",
              border: "1px dashed #7B1E3A",
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "#7B1E3A" }}>
              Registration Fee:
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#7B1E3A" }}
            >
              ₹499 for 5 KM
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 1,
                borderColor: "#7B1E3A",
                color: "#fcefdc",
                backgroundColor: "#7B1E3A",
                "&:hover": {
                  borderColor: "#5e142c",
                  color: "#7B1E3A",
                  backgroundColor: "#fcefdc",
                },
              }}
            >
              Register Now
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
