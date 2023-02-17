import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/main.scss";

import { Analytics } from "@vercel/analytics/react";

import { CardContextProvider } from "../src/hooks/useCard";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CardContextProvider>
        <Component {...pageProps} />
      </CardContextProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
