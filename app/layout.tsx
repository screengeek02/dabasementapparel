import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "DaBasementApparel",
  description: "Men’s streetwear & kicks."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-baseBlack text-white min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
