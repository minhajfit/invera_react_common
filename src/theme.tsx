import { createTheme } from "@mui/material/styles";
import { blue, green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D2E0E8",  // Main color
      light: "#D2E0E8",  // Light color
      dark: "#D2E0E8",   // Dark color
      contrastText: "#000000",  // Text color on the primary button
    },
    secondary: {
      main: "#5B7A8F",  // Main color
      light: "#5B7A8F",  // Light color
      dark: "#5B7A8F",   // Dark color
      contrastText: "#FFFFFF",  // Text color on the secondary button
    },
    error: {
      main: red.A400,    // Error main color
      light: red.A200,   // Light error color
      dark: red.A700,    // Dark error color
      contrastText: "#FFFFFF",  // Text color on the error button
    },
    success: {
      main: green[500],  // Success main color
      light: green[300], // Light success color
      dark: green[700],  // Dark success color
      contrastText: "#FFFFFF",  // Text color on the success button
    },
    info: {
      main: blue[500],   // Info main color
      light: blue[300],  // Light info color
      dark: blue[700],   // Dark info color
      contrastText: "#FFFFFF",  // Text color on the info button
    },
    // You can add more colors or adjust other palette properties as needed
  },
});

export default theme;
