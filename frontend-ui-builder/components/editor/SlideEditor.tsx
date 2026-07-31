"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function SlideEditor() {
    const {
        slides,
        setSlides,
        selectedSlide,
    } = useCarousel();

    const slide = slides[selectedSlide];

    const updateSlide = (field: "title" | "image", value: string) => {
        const updatedSlides = [...slides];

        updatedSlides[selectedSlide] = {
            ...slide,
            [field]: value,
        };

        setSlides(updatedSlides);
    };

    return (
        <div className="space-y-5 rounded-xl border border-zinc-700 p-4">
            <h2 className="text-lg font-semibold">
                Slide Editor
            </h2>

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Title
                </label>

                <input
                    type="text"
                    value={slide.title}
                    onChange={(e) =>
                        updateSlide("title", e.target.value)
                    }
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 outline-none focus:border-blue-500"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Image URL
                </label>

                <input
                    type="text"
                    value={slide.image}
                    onChange={(e) =>
                        updateSlide("image", e.target.value)
                    }
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 outline-none focus:border-blue-500"
                />
            </div>

            <div className="overflow-hidden rounded-lg border border-zinc-700">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-40 w-full object-cover"
                />
            </div>
        </div>
    );
}