import { createTheme } from "@mui/material";

const TananEnTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8F65EB",
    },
    secondary: {
      main: "#FF5B29",
    },
  },
  typography: {
    fontFamily: [
      "GeistBold",
      "GeistMedium",
      "GeistThin",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default TananEnTheme;
