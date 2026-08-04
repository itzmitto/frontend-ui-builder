"use client";

import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";

export default function Gallery() {
    const {
        slides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    if (slides.length === 0) {
        return (
            <section className="flex flex-1 items-center justify-center bg-zinc-950">
                <p className="text-zinc-400">
                    No slides available.
                </p>
            </section>
        );
    }

    return (
        <section className="flex flex-1 items-center justify-center bg-zinc-950 p-10">
            <div className="grid w-full max-w-6xl grid-cols-2 gap-6 lg:grid-cols-3">

                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setSelectedSlide(index)}
                        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                            selectedSlide === index
                                ? "scale-105 border-blue-500 shadow-[0_0_35px_rgba(59,130,246,.35)]"
                                : "border-zinc-800 hover:scale-[1.02] hover:border-zinc-600"
                        }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            width={600}
                            height={400}
                            className="h-60 w-full object-cover"
                        />

                        <div className="border-t border-zinc-800 bg-zinc-900 p-4">
                            <h3 className="font-semibold text-white">
                                {slide.title}
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">
                                Image {index + 1}
                            </p>
                        </div>
                    </button>
                ))}

            </div>
        </section>
    );
}