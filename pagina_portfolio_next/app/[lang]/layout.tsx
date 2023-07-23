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
            <BurgerMenu translation={translation.titles} />
            <PrincipalLayout>{children}</PrincipalLayout>
          </div>
        </CardContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
