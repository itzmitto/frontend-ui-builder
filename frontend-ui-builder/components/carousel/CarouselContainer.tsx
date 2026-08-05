"use client";

import { ReactNode } from "react";

type CarouselContainerProps = {
    children: ReactNode;
};

export default function CarouselContainer({
    children,
}: CarouselContainerProps) {
    return (
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8 shadow-2xl">

            {children}

        </div>
    );
}