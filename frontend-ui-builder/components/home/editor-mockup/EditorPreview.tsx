"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    "https://picsum.photos/900/600?random=11",
    "https://picsum.photos/900/600?random=12",
    "https://picsum.photos/900/600?random=13",
];

export default function EditorPreview() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-1 items-center justify-center border-x border-zinc-800 bg-zinc-950/30 p-10">

            <div className="w-full max-w-2xl">

                <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl">

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide}
                                className="relative h-[340px] min-w-full"
                            >
                                <Image
                                    src={slide}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mt-6 flex justify-center gap-2">

                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 w-3 rounded-full transition-all ${
                                current === index
                                    ? "scale-125 bg-blue-500"
                                    : "bg-zinc-600 hover:bg-zinc-500"
                            }`}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}