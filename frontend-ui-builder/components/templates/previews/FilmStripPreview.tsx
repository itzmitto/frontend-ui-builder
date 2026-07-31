"use client";

import { useEffect, useState } from "react";

const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
];

export default function FilmStripPreview() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % colors.length);
        }, 900);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full w-full items-center overflow-hidden rounded-lg bg-zinc-900">
            <div
                className="flex h-full transition-transform duration-500"
                style={{
                    transform: `translateX(-${index * 100}%)`,
                }}
            >
                {colors.map((color, i) => (
                    <div
                        key={i}
                        className={`h-full w-full flex-shrink-0 ${color}`}
                    />
                ))}
            </div>
        </div>
    );
}