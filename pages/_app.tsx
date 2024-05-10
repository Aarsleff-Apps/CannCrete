import "@/styles/globals.css";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";

import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";

const themeOverride = createTheme({
  primaryColor: "cannblue",
  colors: {
    cannblue: [
      "#ebf6ff",
      "#d5e8fa",
      "#a5d1f7",
      "#73b8f6",
      "#50a3f5",
      "#3d96f5",
      "#338ff6",
      "#287cdb",
      "#1d6ec4",
      "#005fad",
    ],
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme="auto" theme={themeOverride}>
      <Head>
        <title>CannCrete</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#006eb1" />
        <meta name="msapplication-TileColor" content="#006eb1" />
        <meta name="theme-color" content="#006eb1" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
