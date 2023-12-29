import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

enum ColorPalette {
    GREEN = "#0e5222",
    DARKER_GREEN = "#0f7834",
    LIGHTER_GREEN = "#1dd262",
    BLACK = "#000000",
    GREY = "#222222",
    WHITE = "#ffffff",
}

// A custom theme for this app
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
    // black: {
    //   main: "#000000", // background? kinda
    //   contrastText: "#ffffff", // foreground (haven't said that in a while)
    //   light: "#888888", // Lighter shade of main (Not sure where this is used)
    //   dark: alpha("#000000", 0.8), // Darker shade of  main (Used in button hovers)
    // },
    // white: {
    //   main: "#ffffff",
    //   contrastText: "#000000",
    //   light: "#888888",
    //   dark: "#888888"
    // },
    error: {
      main: red.A700,
    },
  },
});

export default theme;
