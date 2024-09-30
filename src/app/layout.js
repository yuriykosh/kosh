import localFont from "next/font/local";
import "./globals.css";

import { ReactLenis } from "@/utils/lenis";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
      <ReactLenis root>
        <body
          className={`${satoshi.variable} ${erode.variable} font-satoshi text-sm underline-offset-4 leading-[0.75] text-white`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
