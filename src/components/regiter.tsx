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
} from "@mui/material";

const Register = () => {
  const headerCells = ["Distance", "Gender", "Date", "Start Time", "Medals"];
  const rowData = ["5 KM", "Female", "5 Oct 2025", "6:00 AM", "Included"];

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ mb: 2, color: "#3b0a0a", textAlign: "center" }}
      >
        RACE CATEGORIES
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TableContainer
          component={Paper}
          sx={{
            width: { xs: "100%", md: "90%" },
            borderRadius: 2,
            boxShadow: "none",
            backgroundColor: "#fcefdc",
            border: "2px solid #7B1E3A", // Outer border
          }}
        >
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
                          ? ".1px solid #fcefdc"
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
                          ? ".1px solid #7B1E3A"
                          : "none",
                    }}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Register;
