import { League_Spartan } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const spartan = League_Spartan({
  subsets: ["latin"],
  preload: true,
  adjustFontFallback: true,
  variable: "--spartan-font",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --inter-font: ${spartan.style.fontFamily};
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
