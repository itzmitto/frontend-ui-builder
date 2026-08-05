"use client";

import Image from "next/image";

import { useCarousel } from "@/context/CarouselContext";

import CarouselViewport from "@/components/carousel/CarouselViewport";
import CarouselContainer from "@/components/carousel/CarouselContainer";
import CarouselNavigation from "@/components/carousel/CarouselNavigation";
import CarouselPagination from "@/components/carousel/CarouselPagination";
import useCarouselEngine from "@/components/carousel/useCarouselEngine";

export default function FilmStrip() {
    const {
        settings,
        slides,
        selectedSlide,
        setSelectedSlide,
        device,
    } = useCarousel();

    const {
        nextSlide,
        previousSlide,
        goToSlide,
    } = useCarouselEngine({
        autoplay: settings.autoplay,
        infinite: settings.infinite,
        speed: settings.speed,
        slideCount: slides.length,
        selectedSlide,
        setSelectedSlide,
    });

    const previewWidth =
        device === "desktop"
            ? 1000
            : device === "tablet"
            ? 768
            : 375;

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
                            transform: `translateX(-${selectedSlide * (settings.width + settings.gap)}px)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`group transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                                    selectedSlide === index
                                        ? "scale-100 opacity-100"
                                        : "scale-90 opacity-50"
                                }`}
                                style={{
                                    width: settings.width,
                                    height: settings.height,
                                    flexShrink: 0,
                                    overflow: "hidden",
                                    borderRadius: settings.borderRadius,
                                    boxShadow:
                                        selectedSlide === index
                                            ? "0 20px 50px rgba(0,0,0,.45)"
                                            : "0 8px 20px rgba(0,0,0,.15)",
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
                        ))}
                    </div>
                </div>

                <CarouselNavigation
                    show={settings.navigation}
                    onPrevious={previousSlide}
                    onNext={nextSlide}
                />

                <CarouselPagination
                    show={settings.pagination}
                    total={slides.length}
                    current={selectedSlide}
                    onSelect={goToSlide}
                />

            </CarouselContainer>

        </CarouselViewport>
    );
}