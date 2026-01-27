import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const firstName = process.env.NEXT_PUBLIC_FIRSTNAME;
const surName = process.env.NEXT_PUBLIC_SURNAME;

export const metadata: Metadata = {
  title: `${firstName} ${surName} - Portfolio`,
  description: `Backend developer / Data analyst portfolio of ${firstName} ${surName}.`,
  icons: {
    icon: "/favicon.ico",
  }
};

// Definiujemy typ dla params jako Promise
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!['en', 'pl'].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} dark antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<div className="bg-primary h-screen w-screen" />}>
            <AppContextProvider>
              {children}
            </AppContextProvider>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>   
  );
}