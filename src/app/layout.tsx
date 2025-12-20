import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}