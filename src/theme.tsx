import { createTheme } from "@mui/material/styles";
import { blue, purple, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple.A700,
    },
    secondary: {
      main: blue.A200,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
