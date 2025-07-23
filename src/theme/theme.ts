// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // default font
    zenHeading: {
      fontFamily: "'Zen Dots', sans-serif",
      fontSize: "4rem",
      fontWeight: 900,
    },
  },
});

export default theme;
