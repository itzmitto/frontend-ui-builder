"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";

export default function CoverFlow() {
    const {
        slides,
        selectedSlide,
        setSelectedSlide,
        settings,
        coverFlowSettings,
    } = useCarousel();

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
    }, [
        slides.length,
        settings.infinite,
    ]);

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
        <section className="relative flex flex-1 items-center justify-center bg-zinc-950 p-10">
            <div
                className="relative flex h-full w-full items-center justify-center overflow-hidden"
                style={{
                    perspective: `${coverFlowSettings.perspective}px`,
                }}
            >
                {slides.map((slide, index) => {
                    const offset = index - selectedSlide;

                    if (Math.abs(offset) > 2) {
                        return null;
                    }

                    let transform = "";
                    let opacity = 1;
                    let scale = 1;

                    const zIndex = 100 - Math.abs(offset);

                    switch (offset) {
                        case -2:
                            transform = `
                                translateX(-${coverFlowSettings.spacing * 2}px)
                                translateZ(-${coverFlowSettings.depth * 2}px)
                                rotateY(${coverFlowSettings.rotate + 10}deg)
                            `;
                            scale = coverFlowSettings.centerScale - 0.3;
                            opacity = coverFlowSettings.sideOpacity * 0.4;
                            break;

                        case -1:
                            transform = `
                                translateX(-${coverFlowSettings.spacing}px)
                                translateZ(-${coverFlowSettings.depth}px)
                                rotateY(${coverFlowSettings.rotate}deg)
                            `;
                            scale = coverFlowSettings.centerScale - 0.15;
                            opacity = coverFlowSettings.sideOpacity;
                            break;

                        case 0:
                            transform = `
                                translateX(0px)
                                translateZ(0px)
                                rotateY(0deg)
                            `;
                            scale = coverFlowSettings.centerScale;
                            opacity = 1;
                            break;

                        case 1:
                            transform = `
                                translateX(${coverFlowSettings.spacing}px)
                                translateZ(-${coverFlowSettings.depth}px)
                                rotateY(-${coverFlowSettings.rotate}deg)
                            `;
                            scale = coverFlowSettings.centerScale - 0.15;
                            opacity = coverFlowSettings.sideOpacity;
                            break;

                        case 2:
                            transform = `
                                translateX(${coverFlowSettings.spacing * 2}px)
                                translateZ(-${coverFlowSettings.depth * 2}px)
                                rotateY(-${coverFlowSettings.rotate + 10}deg)
                            `;
                            scale = coverFlowSettings.centerScale - 0.3;
                            opacity = coverFlowSettings.sideOpacity * 0.4;
                            break;

                        default:
                            break;
                    }

                    return (
                        <button
                            key={slide.id}
                            onClick={() => setSelectedSlide(index)}
                            className="absolute transition-all duration-500 ease-out"
                            style={{
                                transform: `${transform} scale(${scale})`,
                                opacity,
                                zIndex,
                            }}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={settings.width}
                                height={settings.height}
                                className="rounded-2xl object-cover shadow-2xl"
                            />
                        </button>
                    );
                })}
            </div>

            {settings.pagination && (
                <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedSlide(index)}
                            className={`h-3 w-3 rounded-full transition-all ${
                                selectedSlide === index
                                    ? "scale-125 bg-blue-500"
                                    : "bg-zinc-600 hover:bg-zinc-500"
                            }`}
                        />
                    ))}
                </div>
            )}

            {settings.navigation && (
                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-4">
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
        </section>
    );
}