import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey, green, yellow, red } from '@mui/material/colors';
import overrides from "./overrides";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d9ee3",
      light: "#48BDF5",
      dark: "#0A7BB1",
      100: "#E4EEFA",
      contrastText: "#fff",
    },
    secondary: {
      ...green,
      main: green[500],
      light: green[300],
      dark: green[700],
    },
    text: {
      primary: "#212529",
      secondary: "rgba(33, 37, 41, 0.8)",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    results: {
      bad: {
        main: red[500],
        light: red[200],
        dark: red[800],
      },
      caution: {
        main: yellow[500],
        light: yellow[200],
        dark: yellow[800],
      },
      good: {
        main: green[500],
        light: green[200],
        dark: green[800],
      },
    },
    info: {
      main: grey[500],
      light: grey[300],
      dark: grey[800],
    },
  },
  spacing: 8,
  typography: {
    fontFamily: [
      "Poppins",
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontWeight: 500,
    textTransform: "none",
  },
});

// const theme = createTheme(globalTheme, {
//   palette: {
//     primary: {
//       main: '#0d9ee3',
//       light: '#48BDF5',
//       dark: '#0A7BB1',
//       100: '#E4EEFA',
//     },
//     secondary: {
//       ...green,
//       main: green[500],
//       light: green[300],
//       dark: green[700],
//     },
//     text: {
//       primary: '#212529',
//       secondary: 'rgba(33, 37, 41, 0.8)',
//     },
//     background: {
//       paper: '#fff',
//       default: '#fafafa',
//     },
//     results: {
//       bad: {
//         main: red[500],
//         light: red[200],
//         dark: red[800],
//       },
//       caution: {
//         main: yellow[500],
//         light: yellow[200],
//         dark: yellow[800],
//       },
//       good: {
//         main: green[500],
//         light: green[200],
//         dark: green[800],
//       },
//     },
//   },
//   typography: {
//     fontFamily: [
//       'Poppins',
//       'Nunito',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//     ].join(','),
//     button: {
//       // fontStyle: "italic"
//       fontWeight: 500,
//       textTransform: 'none',
//     },
//   },
// });

export default responsiveFontSizes(overrides(theme));
