import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navigation, Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navigation />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
