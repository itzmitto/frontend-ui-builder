"use client";

import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";

export default function Preview() {
    const {
        settings,
        slides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const nextSlide = () => {
        setSelectedSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        setSelectedSlide((prev) =>
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
                        src={slides[selectedSlide].image}
                        alt={slides[selectedSlide].title}
                        width={settings.width}
                        height={settings.height}
                        className="h-full w-full object-cover"
                    />
                </div>

                {settings.navigation && (
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
                )}
            </div>
        </section>
    );
}