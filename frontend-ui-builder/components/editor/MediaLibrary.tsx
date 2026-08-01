"use client";

import Image from "next/image";
import { ChangeEvent } from "react";
import { useCarousel } from "@/context/CarouselContext";

export default function MediaLibrary() {
    const {
        media,
        setMedia,
        slides,
        setSlides,
        selectedSlide,
    } = useCarousel();

    const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const image = {
            id: Date.now(),
            url: URL.createObjectURL(file),
        };

        setMedia([...media, image]);
    };

    const selectImage = (url: string) => {
        const updatedSlides = [...slides];

        updatedSlides[selectedSlide] = {
            ...updatedSlides[selectedSlide],
            image: url,
        };

        setSlides(updatedSlides);
    };

    return (
        <div className="space-y-4">
            <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2"
            />

            <div className="grid grid-cols-2 gap-3">
                {media.map((image) => (
                    <button
                        key={image.id}
                        onClick={() => selectImage(image.url)}
                        className="overflow-hidden rounded-lg border border-zinc-700 hover:border-blue-500"
                    >
                        <Image
                            src={image.url}
                            alt=""
                            width={150}
                            height={100}
                            className="h-24 w-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}