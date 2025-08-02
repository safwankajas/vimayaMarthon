// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: " Arial, Roboto,sans-serif", // default font
    zenHeadingh1: {
      fontFamily: "'Red Rose', sans-serif",
      fontSize: "4rem",
      fontWeight: 700,
    },
  },
});

export default theme;
