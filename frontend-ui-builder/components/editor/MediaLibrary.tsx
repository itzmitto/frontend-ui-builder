"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function MediaLibrary() {
    const {
        media,
        slides,
        selectedSlide,
        setSlides,
    } = useCarousel();

    const assignImage = (
        url: string
    ) => {
        const updated = [...slides];

        updated[selectedSlide] = {
            ...updated[selectedSlide],
            image: url,
        };

        setSlides(updated);
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">

            <h2 className="mb-4 text-sm font-semibold text-white">
                Media Library
            </h2>

            <div className="grid grid-cols-3 gap-2">

                {media.map((item) => (
                    <button
                        key={item.id}
                        onClick={() =>
                            assignImage(
                                item.url
                            )
                        }
                    >
                        <img
                            src={item.url}
                            alt={item.name}
                            className="h-20 w-full rounded-lg object-cover hover:ring-2 hover:ring-blue-500"
                        />
                    </button>
                ))}

            </div>

        </div>
    );
}