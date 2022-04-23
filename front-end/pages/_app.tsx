import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppProviders from "app/AppProviders";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme/theme";
import Errorboundary from "components/ErrorBoundary/Errorboundary";
import { styled } from "@mui/system";
import { maxWidth } from "helpers";
import { Box } from "@mui/material";
import { Navbar } from "components";

const StyleContainer = styled("div")({
  ...maxWidth,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Errorboundary>
        <AppProviders>
          {/* <StyleContainer> */}
          <Box sx={{backgroundColor: '#fefefe'}}>
            <Navbar />
            <Component {...pageProps} />
          </Box>
          {/* </StyleContainer> */}
        </AppProviders>
      </Errorboundary>
    </ThemeProvider>
  );
}

export default MyApp;
