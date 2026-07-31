"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";

export default function FilmStrip() {
    const {
        settings,
        slides,
        selectedSlide,
        setSelectedSlide,
        device,
    } = useCarousel();

    const previewWidth =
        device === "desktop"
            ? 1000
            : device === "tablet"
            ? 768
            : 375;

    const nextSlide = () => {
        setSelectedSlide((prev) =>
            prev === slides.length - 1
                ? settings.infinite
                    ? 0
                    : prev
                : prev + 1
        );
    };

    const previousSlide = () => {
        setSelectedSlide((prev) =>
            prev === 0
                ? settings.infinite
                    ? slides.length - 1
                    : 0
                : prev - 1
        );
    };

    useEffect(() => {
        if (!settings.autoplay || slides.length <= 1) return;

        const interval = setInterval(() => {
            nextSlide();
        }, settings.speed);

        return () => clearInterval(interval);
    }, [
        settings.autoplay,
        settings.speed,
        settings.infinite,
        slides.length,
    ]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                nextSlide();
            }

            if (event.key === "ArrowLeft") {
                previousSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [slides.length, settings.infinite]);

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
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

                <div
                    className="overflow-hidden"
                    style={{
                        width: previewWidth,
                        borderRadius: settings.borderRadius,
                    }}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            gap: settings.gap,
                            transform: `translateX(-${
                                selectedSlide *
                                (settings.width + settings.gap)
                            }px)`,
                        }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                style={{
                                    width: settings.width,
                                    height: settings.height,
                                    flexShrink: 0,
                                    overflow: "hidden",
                                    borderRadius: settings.borderRadius,
                                }}
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={settings.width}
                                    height={settings.height}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {settings.navigation && (
                    <div className="mt-6 flex justify-center gap-4">
                        <button
                            onClick={previousSlide}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-lg transition hover:bg-zinc-700"
                        >
                            ←
                        </button>

                        <button
                            onClick={nextSlide}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-lg transition hover:bg-zinc-700"
                        >
                            →
                        </button>
                    </div>
                )}

                {settings.pagination && (
                    <div className="mt-5 flex justify-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSlide(index)}
                                className={`h-3 w-3 rounded-full transition ${
                                    selectedSlide === index
                                        ? "bg-blue-500"
                                        : "bg-zinc-600 hover:bg-zinc-500"
                                }`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}