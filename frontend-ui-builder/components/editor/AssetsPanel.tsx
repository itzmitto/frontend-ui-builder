"use client";

import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";

export default function AssetsPanel() {
    const {
        media,
        slides,
        selectedSlide,
        setSlides,
    } = useCarousel();

    const assignImage = (url: string) => {
        const updated = [...slides];

        updated[selectedSlide] = {
            ...updated[selectedSlide],
            image: url,
        };

        setSlides(updated);
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <h2 className="text-lg font-semibold">
                        Assets
                    </h2>

                    <p className="text-xs text-zinc-500">
                        {media.length} image{media.length !== 1 ? "s" : ""}
                    </p>

                </div>

            </div>

            {media.length === 0 ? (
                <div className="rounded-lg border border-dashed border-zinc-700 py-10 text-center text-sm text-zinc-500">
                    No uploaded images.
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-3">

                    {media.map((image) => (
                        <button
                            key={image.id}
                            onClick={() => assignImage(image.url)}
                            className="overflow-hidden rounded-lg border border-zinc-700 transition hover:border-blue-500"
                        >
                            <div className="relative aspect-square">

                                <Image
                                    src={image.url}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />

                            </div>
                        </button>
                    ))}

                </div>
            )}

        </div>
    );
}