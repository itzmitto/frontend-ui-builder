"use client";

import { ChangeEvent } from "react";
import { useCarousel } from "@/context/CarouselContext";

export default function ImageUploader() {
    const {
        slides,
        setSlides,
        selectedSlide,
    } = useCarousel();

    const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        const updatedSlides = [...slides];

        updatedSlides[selectedSlide] = {
            ...updatedSlides[selectedSlide],
            image: imageUrl,
        };

        setSlides(updatedSlides);
    };

    return (
        <div className="space-y-3">
            <label className="block text-sm text-zinc-400">
                Upload Image
            </label>

            <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-sm"
            />
        </div>
    );
}