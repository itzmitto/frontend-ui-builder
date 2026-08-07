"use client";

import Image from "next/image";
import { useState } from "react";

import { useCarousel } from "@/context/CarouselContext";

export default function AccordionGallery() {
    const {
        slides,
        accordionGallerySettings,
    } = useCarousel();

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

            <div
                className="flex h-[600px] w-full max-w-7xl"
                style={{
                    gap: accordionGallerySettings.gap,
                }}
            >
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onMouseEnter={() => {
                            if (
                                accordionGallerySettings.trigger ===
                                "hover"
                            ) {
                                setActiveIndex(index);
                            }
                        }}
                        onClick={() => {
                            if (
                                accordionGallerySettings.trigger ===
                                "click"
                            ) {
                                setActiveIndex(index);
                            }
                        }}
                        className={`relative overflow-hidden transition-all ${
                            activeIndex === index
                                ? `flex-[${accordionGallerySettings.expandedFlex}]`
                                : "flex-1"
                        }`}
                        style={{
                            borderRadius:
                                accordionGallerySettings.borderRadius,
                            transitionDuration: `${accordionGallerySettings.animationSpeed}ms`,
                        }}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                            style={{
                                opacity:
                                    accordionGallerySettings.overlayOpacity,
                            }}
                        />

                        <div
                            className={`absolute bottom-0 left-0 p-8 transition-all duration-500 ${
                                activeIndex === index
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}
                        >
                            <h2 className="text-3xl font-bold text-white">
                                {slide.title}
                            </h2>

                            <p className="mt-3 max-w-md text-zinc-300">
                                {slide.description}
                            </p>

                            {slide.buttonText && (
                                <button className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white">
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