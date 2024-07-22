import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quantico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const quantico = Quantico({subsets:["latin"], weight: "400"})

export const metadata: Metadata = {
  title: "Rodrigo Barien III Portfolio",
  description: "Welcome to the portfolio of Rodrigo Barien III, a versatile Firmware/Software Engineer skilled in C/C++/.NET, Java/Kotlin, Python/Jupyter, and the MERN Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quantico.className}>{children}</body>
    </html>
  );
}
