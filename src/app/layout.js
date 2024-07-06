import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";

const satoshi = localFont({
  src: "./fonts/Satoshi-Medium.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

const erode = localFont({
  src: "./fonts/Erode-Regular.woff2",
  display: "swap",
  variable: "--font-erode",
});

export const metadata = {
  title: "KOSH",
  description: "Digital-first Design and Development Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${erode.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
