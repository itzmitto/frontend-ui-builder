"use client";

import { ChangeEvent } from "react";
import { useCarousel } from "@/context/CarouselContext";

export default function MediaLibrary() {
    const {
        media,
        setMedia,
    } = useCarousel();

    const upload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setMedia([
            ...media,
            {
                id: Date.now(),
                name: file.name,
                url: URL.createObjectURL(file),
            },
        ]);
    };

    return (
        <div className="space-y-4 rounded-xl border border-zinc-700 p-4">
            <h2 className="text-lg font-semibold">
                Media Library
            </h2>

            <input
                type="file"
                accept="image/*"
                onChange={upload}
            />

            <div className="grid grid-cols-2 gap-3">
                {media.map((image) => (
                    <div
                        key={image.id}
                        className="rounded-lg border border-zinc-700 overflow-hidden"
                    >
                        <img
                            src={image.url}
                            className="h-24 w-full object-cover"
                        />

                        <p className="truncate p-2 text-xs">
                            {image.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}