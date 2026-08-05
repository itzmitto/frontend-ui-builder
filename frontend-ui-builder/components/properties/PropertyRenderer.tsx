"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function SlideProperties() {
    const {
        slides,
        selectedSlide,
        setSlides,
    } = useCarousel();

    const slide = slides[selectedSlide];

    if (!slide) {
        return null;
    }

    const updateSlide = (
        key: keyof typeof slide,
        value: string
    ) => {
        const updated = [...slides];

        updated[selectedSlide] = {
            ...slide,
            [key]: value,
        };

        setSlides(updated);
    };

    return (
        <div className="space-y-6">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

                <h2 className="mb-4 text-lg font-semibold">
                    Slide
                </h2>

                <div className="space-y-5">

                    <div>

                        <label className="mb-2 block text-sm text-zinc-400">
                            Title
                        </label>

                        <input
                            value={slide.title}
                            onChange={(e) =>
                                updateSlide(
                                    "title",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-zinc-400">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            value={slide.description}
                            onChange={(e) =>
                                updateSlide(
                                    "description",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-zinc-400">
                            Button Text
                        </label>

                        <input
                            value={slide.buttonText}
                            onChange={(e) =>
                                updateSlide(
                                    "buttonText",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-zinc-400">
                            Button Link
                        </label>

                        <input
                            value={slide.buttonLink}
                            onChange={(e) =>
                                updateSlide(
                                    "buttonLink",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2"
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}