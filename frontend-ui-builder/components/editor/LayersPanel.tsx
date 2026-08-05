"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function LayersPanel() {
    const {
        slides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

            <h2 className="mb-4 text-lg font-semibold text-white">
                Layers
            </h2>

            <div className="space-y-2">

                <div className="rounded-lg bg-zinc-800 px-3 py-2 font-medium">
                    📂 Carousel
                </div>

                {slides.map((slide, index) => (
                    <div key={slide.id}>

                        <button
                            onClick={() => setSelectedSlide(index)}
                            className={`ml-4 flex w-full items-center rounded-lg px-3 py-2 text-left transition ${
                                selectedSlide === index
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-zinc-800"
                            }`}
                        >
                            🖼️ {slide.title}
                        </button>

                        {selectedSlide === index && (
                            <div className="ml-10 mt-1 space-y-1">

                                <div className="rounded px-2 py-1 text-sm text-zinc-400">
                                    📝 Title
                                </div>

                                <div className="rounded px-2 py-1 text-sm text-zinc-400">
                                    🖼️ Image
                                </div>

                                <div className="rounded px-2 py-1 text-sm text-zinc-400">
                                    🔘 Button
                                </div>

                            </div>
                        )}

                    </div>
                ))}

            </div>

        </div>
    );
}