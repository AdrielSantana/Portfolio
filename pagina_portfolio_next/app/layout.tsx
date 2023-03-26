"use client";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/main.scss";

import { Analytics } from "@vercel/analytics/react";
import { Nunito, Courgette } from "next/font/google";

import { CardContextProvider } from "../src/hooks/useCard";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
  display: "swap",
});

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${nunito.variable} ${courgette.variable}`}>
      <body>
        <CardContextProvider>{children}</CardContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
