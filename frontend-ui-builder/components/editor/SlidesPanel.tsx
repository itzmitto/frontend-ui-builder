"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function SlidesPanel() {
    const {
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const moveUp = (index: number) => {
        if (index === 0) return;

        const updated = [...slides];

        [updated[index - 1], updated[index]] = [
            updated[index],
            updated[index - 1],
        ];

        setSlides(updated);
        setSelectedSlide(index - 1);
    };

    const moveDown = (index: number) => {
        if (index === slides.length - 1) return;

        const updated = [...slides];

        [updated[index + 1], updated[index]] = [
            updated[index],
            updated[index + 1],
        ];

        setSlides(updated);
        setSelectedSlide(index + 1);
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">

            <h2 className="mb-4 text-lg font-semibold">
                Slides
            </h2>

            <div className="space-y-2">

                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`flex items-center justify-between rounded-lg border p-3 ${
                            selectedSlide === index
                                ? "border-blue-500 bg-zinc-800"
                                : "border-zinc-700"
                        }`}
                    >
                        <button
                            onClick={() =>
                                setSelectedSlide(index)
                            }
                            className="flex-1 text-left"
                        >
                            {slide.title}
                        </button>

                        <div className="flex gap-2">

                            <button
                                onClick={() =>
                                    moveUp(index)
                                }
                                className="rounded bg-zinc-700 px-2 py-1"
                            >
                                ↑
                            </button>

                            <button
                                onClick={() =>
                                    moveDown(index)
                                }
                                className="rounded bg-zinc-700 px-2 py-1"
                            >
                                ↓
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}