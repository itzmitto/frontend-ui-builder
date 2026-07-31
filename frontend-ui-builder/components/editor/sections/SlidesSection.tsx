"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function SlidesSection() {
    const {
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const addSlide = () => {
        setSlides([
            ...slides,
            {
                id: Date.now(),
                title: `Slide ${slides.length + 1}`,
                image: `https://picsum.photos/800/500?random=${slides.length + 10}`,
            },
        ]);
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">
                Slides
            </h2>

            <div className="space-y-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setSelectedSlide(index)}
                        className={`flex w-full items-center gap-3 rounded-lg border p-3 transition ${selectedSlide === index
                            ? "border-blue-500 bg-blue-600/20"
                            : "border-zinc-700 hover:bg-zinc-800"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-12 w-16 rounded object-cover"
                        />

                        <div className="flex flex-col text-left">
                            <span className="font-medium">
                                {slide.title}
                            </span>

                            <span className="text-xs text-zinc-400">
                                Slide {index + 1}
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <button
                onClick={addSlide}
                className="w-full rounded-lg bg-blue-600 py-2 transition hover:bg-blue-700"
            >
                + Add Slide
            </button>
        </div>
    );
}