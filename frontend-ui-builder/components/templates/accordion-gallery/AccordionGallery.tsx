"use client";

import Image from "next/image";
import { useState } from "react";

import { useCarousel } from "@/context/CarouselContext";

export default function AccordionGallery() {
    const { slides } = useCarousel();

    const [activeIndex, setActiveIndex] = useState(0);

    if (slides.length === 0) {
        return (
            <div className="flex h-full items-center justify-center">
                <p className="text-zinc-400">
                    No slides available.
                </p>
            </div>
        );
    }

    return (
        <section className="flex h-full w-full items-center justify-center p-10">

            <div className="flex h-[600px] w-full max-w-7xl gap-4">

                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onMouseEnter={() =>
                            setActiveIndex(index)
                        }
                        onClick={() =>
                            setActiveIndex(index)
                        }
                        className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                            activeIndex === index
                                ? "flex-[5]"
                                : "flex-1"
                        }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div
                            className={`absolute bottom-0 left-0 p-8 transition-all duration-500 ${
                                activeIndex === index
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            <h2 className="text-3xl font-bold text-white">
                                {slide.title}
                            </h2>

                            <p className="mt-3 max-w-md text-zinc-300">
                                {slide.description}
                            </p>

                            {slide.buttonText && (
                                <button className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-medium">
                                    {slide.buttonText}
                                </button>
                            )}
                        </div>

                    </button>
                ))}

            </div>

        </section>
    );
}