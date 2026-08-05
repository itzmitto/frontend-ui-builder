"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function SlideManager() {
    const {
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const addSlide = () => {
        const newSlide = {
            id: Date.now(),
            title: `Slide ${slides.length + 1}`,
            image: `https://picsum.photos/800/500?random=${Date.now()}`,
        };

        setSlides((previous) => [...previous, newSlide]);
        setSelectedSlide(slides.length);
    };

    const duplicateSlide = (index: number) => {
        const slide = slides[index];

        if (!slide) return;

        const duplicated = {
            ...slide,
            id: Date.now(),
            title: `${slide.title} Copy`,
        };

        const updated = [...slides];
        updated.splice(index + 1, 0, duplicated);

        setSlides(updated);
    };

    const deleteSlide = (index: number) => {
        if (slides.length <= 1) return;

        const updated = slides.filter((_, i) => i !== index);

        setSlides(updated);

        if (selectedSlide >= updated.length) {
            setSelectedSlide(updated.length - 1);
        }
    };

    return (
        <div className="space-y-4">

            <div className="flex items-center justify-between">

                <h2 className="text-lg font-semibold">
                    Slides
                </h2>

                <button
                    onClick={addSlide}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-sm transition hover:bg-blue-500"
                >
                    +
                </button>

            </div>

            <div className="space-y-3">

                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`rounded-xl border p-3 transition ${
                            selectedSlide === index
                                ? "border-blue-500 bg-zinc-900"
                                : "border-zinc-800 bg-zinc-950"
                        }`}
                    >

                        <button
                            onClick={() => setSelectedSlide(index)}
                            className="w-full text-left"
                        >
                            <p className="font-medium">
                                {slide.title}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Slide {index + 1}
                            </p>
                        </button>

                        <div className="mt-3 flex gap-2">

                            <button
                                onClick={() => duplicateSlide(index)}
                                className="flex-1 rounded-lg bg-zinc-800 py-2 text-sm hover:bg-zinc-700"
                            >
                                Duplicate
                            </button>

                            <button
                                onClick={() => deleteSlide(index)}
                                className="rounded-lg bg-red-600 px-3 hover:bg-red-500"
                            >
                                🗑
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}