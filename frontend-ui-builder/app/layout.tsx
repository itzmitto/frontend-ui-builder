import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";

import { ThemeProvider } from "@/context/ThemeContext";
import { CarouselProvider } from "@/context/CarouselContext";
import { EditorProvider } from "@/context/EditorContext";
import { HistoryProvider } from "@/context/HistoryContext";

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
                    <HistoryProvider>
                        <CarouselProvider>
                            <Navbar />
                            {children}
                        </CarouselProvider>
                    </HistoryProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}