import Document, { Head, Html, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";
import * as React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
