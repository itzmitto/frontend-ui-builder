"use client";

import Image from "next/image";

import { useCarousel } from "@/context/CarouselContext";

import CarouselViewport from "@/components/carousel/CarouselViewport";
import CarouselNavigation from "@/components/carousel/CarouselNavigation";
import CarouselPagination from "@/components/carousel/CarouselPagination";
import useCarouselEngine from "@/components/carousel/useCarouselEngine";

export default function CoverFlow() {
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

            <div
                className="relative flex h-[600px] items-center justify-center overflow-hidden"
                style={{
                    perspective: "1800px",
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
                            transform = "translateX(-360px) rotateY(60deg)";
                            scale = .7;
                            opacity = .2;
                            break;

                        case -1:
                            transform = "translateX(-180px) rotateY(50deg)";
                            scale = .85;
                            opacity = .55;
                            break;

                        case 0:
                            transform = "translateX(0px) rotateY(0deg)";
                            scale = 1;
                            opacity = 1;
                            break;

                        case 1:
                            transform = "translateX(180px) rotateY(-50deg)";
                            scale = .85;
                            opacity = .55;  
                            break;

                        case 2:
                            transform = "translateX(360px) rotateY(-60deg)";
                            scale = .7;
                            opacity = .2;
                            break;
                    }

                    return (
                        <button
                            key={slide.id}
                            onClick={() => goToSlide(index)}
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