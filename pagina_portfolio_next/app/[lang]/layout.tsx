import "../../src/styles/main.scss";

import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Courgette } from "next/font/google";

import { CardContextProvider } from "../../src/hooks/useCard";
import BurgerMenu from "../../src/components/layout/BurgerMenu";
import PrincipalLayout from "../../src/components/layout/PrincipalLayout";

import { i18n } from "../../i18n-config";
import { Locale } from "../../i18n-config";
import { getTranslation } from "../../get-translation";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  metadataBase: new URL('https://www.adrielsan.social'),
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
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const translation = await getTranslation(params.lang);
  return (
    <html
      lang={params.lang}
      className={`${montserrat.variable} ${courgette.variable}`}
    >
      <body>
        <CardContextProvider>
          <div id="outer-container">
            <BurgerMenu translation={translation.titles}/>
            <PrincipalLayout>{children}</PrincipalLayout>
          </div>
        </CardContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
