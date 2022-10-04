import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head>
                <meta name="description" content="Adriel's Portfolio" />
                <link rel="icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}