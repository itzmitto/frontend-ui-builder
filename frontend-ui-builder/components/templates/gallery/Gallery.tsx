"use client";

import Image from "next/image";

import { useCarousel } from "@/context/CarouselContext";

import CarouselViewport from "@/components/carousel/CarouselViewport";
import CarouselContainer from "@/components/carousel/CarouselContainer";

import SlideContent from "@/components/templates/shared/SlideContent";

export default function Gallery() {
    const {
        slides,
        selectedSlide,
        setSelectedSlide,
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

                            <div className="space-y-4 border-t border-zinc-800 bg-zinc-900 p-4">

                                <SlideContent slide={slide} />

                                <p className="text-xs text-zinc-500">
                                    Image {index + 1}
                                </p>

                            </div>

                        </button>
                    ))}

                </div>

            </CarouselContainer>

        </CarouselViewport>
    );
}