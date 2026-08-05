import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { CarouselProvider } from "@/context/CarouselContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Frontend UI Builder",
  description: "Visual UI Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <ThemeProvider>
          <CarouselProvider>
            <Navbar />
            {children}
          </CarouselProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}