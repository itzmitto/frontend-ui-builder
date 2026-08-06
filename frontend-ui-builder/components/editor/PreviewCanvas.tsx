"use client";

import { ReactNode } from "react";
import { useCarousel } from "@/context/CarouselContext";

export default function PreviewCanvas({
    children,
}: {
    children: ReactNode;
}) {
    const { device } = useCarousel();

    const width =
        device === "desktop"
            ? 1400
            : device === "tablet"
            ? 900
            : 430;

    return (
        <div className="flex flex-1 items-center justify-center overflow-auto bg-zinc-950 p-10">

            <div
                className="rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-300"
                style={{
                    width,
                    minHeight: 700,
                }}
            >
                {children}
            </div>

        </div>
    );
}