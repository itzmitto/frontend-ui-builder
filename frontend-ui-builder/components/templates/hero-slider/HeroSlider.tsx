"use client";

import Image from "next/image";

import { useCarousel } from "@/context/CarouselContext";

import CarouselViewport from "@/components/carousel/CarouselViewport";
import CarouselNavigation from "@/components/carousel/CarouselNavigation";
import CarouselPagination from "@/components/carousel/CarouselPagination";
import useCarouselEngine from "@/components/carousel/useCarouselEngine";

import SlideContent from "@/components/templates/shared/SlideContent";

export default function HeroSlider() {
    const {
        slides,
        settings,
        selectedSlide,
        setSelectedSlide,
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

    if (slides.length === 0) {
        return (
            <CarouselViewport>
                <div className="flex h-[700px] items-center justify-center">
                    <p className="text-zinc-400">
                        No slides available.
                    </p>
                </div>
            </CarouselViewport>
        );
    }

    const slide = slides[selectedSlide];

    return (
        <CarouselViewport>

            <div className="relative h-[700px] overflow-hidden rounded-3xl">

                <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex items-center">

                    <div className="max-w-2xl px-20">

                        <SlideContent slide={slide} />

                    </div>

                </div>

            </div>

            <CarouselPagination
                show={settings.pagination}
                total={slides.length}
                current={selectedSlide}
                onSelect={goToSlide}
            />

            <CarouselNavigation
                show={settings.navigation}
                onPrevious={previousSlide}
                onNext={nextSlide}
            />

        </CarouselViewport>
    );
}