"use client";

import { useCarousel } from "@/context/CarouselContext";
import SlideItem from "./SlideItem";

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

        const duplicate = {
            ...slide,
            id: Date.now(),
            title: `${slide.title} Copy`,
        };

        const updated = [...slides];

        updated.splice(index + 1, 0, duplicate);

        setSlides(updated);
    };

    const deleteSlide = (index: number) => {
        if (slides.length <= 1) {
            return;
        }

        const updated = slides.filter((_, i) => i !== index);

        setSlides(updated);

        if (selectedSlide >= updated.length) {
            setSelectedSlide(updated.length - 1);
        }
    };

    return (
        <div>

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <h2 className="text-lg font-semibold">
                        Slides
                    </h2>

                    <p className="text-xs text-zinc-500">
                        {slides.length} slide{slides.length !== 1 ? "s" : ""}
                    </p>

                </div>

                <button
                    onClick={addSlide}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-sm transition hover:bg-blue-500"
                >
                    +
                </button>

            </div>

            <div className="space-y-4">

                {slides.map((slide, index) => (
                    <SlideItem
                        key={slide.id}
                        slide={slide}
                        index={index}
                        selected={selectedSlide === index}
                        onSelect={() => setSelectedSlide(index)}
                        onDuplicate={() => duplicateSlide(index)}
                        onDelete={() => deleteSlide(index)}
                    />
                ))}

            </div>

        </div>
    );
}