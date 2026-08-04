"use client";

import { ReactNode } from "react";

type CarouselViewportProps = {
    children: ReactNode;
};

export default function CarouselViewport({
    children,
}: CarouselViewportProps) {
    return (
        <section className="flex flex-1 items-center justify-center bg-zinc-950 p-10">

            <div className="w-full max-w-7xl">

                {children}

            </div>

        </section>
    );
}