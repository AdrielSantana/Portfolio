export const metadata = {
  metadataBase: new URL("https://adrielsan.pro"),
  title: {
    template: "%s | Adriel Santana",
    default: "Porfolio | Adriel Santana",
  },
  themeColor: "#00a9a5",
  description: "Adriel's Portfolio",
  colorScheme: "light",
  keywords: ["Adriel", "Santana", "Portfolio", "Web", "Developer"],
  creator: "Adriel Santana",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Portfolio | Adriel Santana",
    description: "Adriel's Portfolio",
    url: "https://adrielsan.pro",
    type: "website",
    locale: "pt_BR",
    countryName: "Brazil",
  },
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
