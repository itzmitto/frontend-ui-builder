"use client";

import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";

import CarouselViewport from "@/components/carousel/CarouselViewport";
import CarouselContainer from "@/components/carousel/CarouselContainer";

export default function Cards() {
    const {
        slides,
        selectedSlide,
        setSelectedSlide,
        settings,
    } = useCarousel();

    if (slides.length === 0) {
        return (
            <CarouselViewport>
                <div className="flex h-[500px] items-center justify-center">
                    <p className="text-zinc-400">
                        No slides available.
                    </p>
                </div>
            </CarouselViewport>
        );
    }

    return (
        <CarouselViewport>

            <CarouselContainer>

                <div
                    className="grid"
                    style={{
                        gap: settings.gap,
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(280px,1fr))",
                    }}
                >
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => setSelectedSlide(index)}
                            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                                selectedSlide === index
                                    ? "border-blue-500 scale-105 shadow-[0_0_30px_rgba(59,130,246,.35)]"
                                    : "border-zinc-700 hover:border-zinc-500 hover:-translate-y-2"
                            }`}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={500}
                                height={300}
                                className="h-56 w-full object-cover"
                            />

                            <div className="space-y-3 bg-zinc-900 p-5 text-left">

                                <h3 className="text-xl font-bold text-white">
                                    {slide.title}
                                </h3>

                                <p className="text-sm leading-6 text-zinc-400">
                                    Beautiful responsive card component built
                                    with the Frontend UI Builder.
                                </p>

                                <div className="flex items-center justify-between">

                                    <span className="text-xs text-zinc-500">
                                        Card #{index + 1}
                                    </span>

                                    <span className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold">
                                        Selected
                                    </span>

                                </div>

                            </div>

                        </button>
                    ))}
                </div>

            </CarouselContainer>

        </CarouselViewport>
    );
}