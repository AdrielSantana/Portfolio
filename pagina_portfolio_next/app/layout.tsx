import "../src/styles/main.scss";

import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Courgette } from "next/font/google";

import { CardContextProvider } from "../src/hooks/useCard";
import BurgerMenu from "../src/components/layout/BurgerMenu";
import PrincipalLayout from "../src/components/layout/PrincipalLayout";

export const metadata = {
  title: {
    template: "%s | Adriel Santana",
    default: "Porfolio | Adriel Santana",
  },
  description: "Adriel's Portfolio",
  colorScheme: "light",
  keywords: ["Adriel Santana", "Adriel", "Portfolio"],
  creator: "Adriel Santana",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
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
    <html
      lang="pt-br"
      className={`${montserrat.variable} ${courgette.variable}`}
    >
      <body>
        <CardContextProvider>
          <div id="outer-container">
            <BurgerMenu />
            <PrincipalLayout>{children}</PrincipalLayout>
          </div>
        </CardContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
