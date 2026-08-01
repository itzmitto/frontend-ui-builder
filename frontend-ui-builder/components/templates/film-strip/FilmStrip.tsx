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
            ? 1200
            : device === "tablet"
            ? 850
            : 390;

    const slideOffset =
        previewWidth / 2 -
        settings.width / 2 -
        selectedSlide * (settings.width + settings.gap);

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
                            transform: `translateX(${slideOffset}px)`,
                        }}
                    >
                        {slides.map((slide, index) => {
                            const active = selectedSlide === index;

                            return (
                                <div
                                    key={slide.id}
                                    className={`group relative transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                                        active
                                            ? "z-20 scale-100 opacity-100"
                                            : "z-10 scale-95 opacity-70"
                                    }`}
                                    style={{
                                        width: settings.width,
                                        height: settings.height,
                                        flexShrink: 0,
                                        overflow: "hidden",
                                        borderRadius:
                                            settings.borderRadius,
                                        boxShadow: active
                                            ? "0 25px 70px rgba(0,0,0,.55)"
                                            : "0 10px 25px rgba(0,0,0,.20)",
                                    }}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={settings.width}
                                        height={settings.height}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {settings.navigation && (
                    <div className="mt-8 flex justify-center gap-5">
                        <button
                            onClick={previousSlide}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xl transition hover:scale-110 hover:bg-zinc-700"
                        >
                            ←
                        </button>

                        <button
                            onClick={nextSlide}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xl transition hover:scale-110 hover:bg-zinc-700"
                        >
                            →
                        </button>
                    </div>
                )}

                {settings.pagination && (
                    <div className="mt-6 flex justify-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSlide(index)}
                                className={`h-3 w-3 rounded-full transition-all ${
                                    selectedSlide === index
                                        ? "scale-125 bg-blue-500"
                                        : "bg-zinc-600 hover:scale-110 hover:bg-zinc-500"
                                }`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}