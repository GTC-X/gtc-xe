import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css'
import "react-multi-carousel/lib/styles.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from './components/header';
import Footer from './components/footer';

export default async function RootLayout({
  children
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            <Header />
            <div className=' pt-28'>
              {children}
            </div>
            <Footer />
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}