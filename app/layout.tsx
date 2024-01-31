import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PagesController from "@/components/PagesController";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider defaultTheme="dark">
          <PagesController />
          <div className="w-full h-[calc(100vh_-_60px)] overflow-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
