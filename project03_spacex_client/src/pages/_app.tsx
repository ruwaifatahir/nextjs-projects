import "../styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Header, Footer } from "../components";

import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <NextNprogress height={5} color="green" />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
