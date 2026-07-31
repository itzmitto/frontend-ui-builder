"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function SlidesSection() {
    const { slides, setSlides } = useCarousel();

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

            <p>{slides.length} slides</p>

            <button
                onClick={addSlide}
                className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
            >
                + Add Slide
            </button>
        </div>
    );
}