import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

enum ColorPalette {
  GREEN = "#10963f",
  DARKER_GREEN = "#0f7834",
  LIGHTER_GREEN = "#1dd262",
  BLACK = "#000000",
  GREY = "#222222",
  WHITE = "#ffffff",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ColorPalette.BLACK,
      paper: ColorPalette.GREY
    },
    primary: {
      main: ColorPalette.GREEN,
      contrastText: ColorPalette.WHITE,
      dark: ColorPalette.DARKER_GREEN,
      light: ColorPalette.LIGHTER_GREEN
    },
    secondary: {
      main: ColorPalette.LIGHTER_GREEN,
      contrastText: ColorPalette.WHITE,
      dark: ColorPalette.DARKER_GREEN,
      light: ColorPalette.WHITE
    },
    error: {
      main: red.A700,
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 2,
        sx: {
          display: "flex",
          zIndex: 2,
          transition: "all 0.4s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.02)",
            bgcolor: "#282828",
          },
          bgcolor: "#181818",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        sx: {
          bgcolor: "#121212",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small"
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small"
      },
    },
  }
});

export default theme;
