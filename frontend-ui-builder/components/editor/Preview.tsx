"use client";

import { useState } from "react";
import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";
import { slides } from "@/data/slides";

export default function Preview() {
    const { settings } = useCarousel();
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <section className="flex flex-1 items-center justify-center bg-zinc-950 p-10">
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-10">
                <div
                    className="overflow-hidden"
                    style={{
                        width: settings.width,
                        height: settings.height,
                        borderRadius: settings.borderRadius,
                    }}
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        width={settings.width}
                        height={settings.height}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="mt-6 flex justify-center gap-4">
                    <button
                        onClick={previousSlide}
                        className="rounded-lg bg-zinc-800 px-4 py-2 transition hover:bg-zinc-700"
                    >
                        ← Previous
                    </button>

                    <button
                        onClick={nextSlide}
                        className="rounded-lg bg-zinc-800 px-4 py-2 transition hover:bg-zinc-700"
                    >
                        Next →
                    </button>
                </div>
            </div>
        </section>
    );
}