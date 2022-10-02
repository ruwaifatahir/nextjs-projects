import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/theme";
import { Navigation, Footer } from "../components";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
