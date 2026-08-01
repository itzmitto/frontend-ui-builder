"use client";

import { ChangeEvent } from "react";
import { useCarousel } from "@/context/CarouselContext";
import MediaCard from "./MediaCard";
import DropZone from "./DropZone";

export default function MediaLibrary() {
    const {
        media,
        setMedia,
        slides,
        setSlides,
        selectedSlide,
    } = useCarousel();

    const addImage = (file: File) => {
        const image = {
            id: Date.now(),
            url: URL.createObjectURL(file),
        };

        setMedia((previous) => [...previous, image]);
    };

    const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        addImage(file);

        event.target.value = "";
    };

    const selectImage = (url: string) => {
        if (!slides[selectedSlide]) return;

        const updatedSlides = [...slides];

        updatedSlides[selectedSlide] = {
            ...updatedSlides[selectedSlide],
            image: url,
        };

        setSlides(updatedSlides);
    };

    const deleteImage = (id: number) => {
        const imageToDelete = media.find(
            (image) => image.id === id
        );

        setMedia((previous) =>
            previous.filter((image) => image.id !== id)
        );

        if (
            imageToDelete &&
            slides[selectedSlide]?.image === imageToDelete.url
        ) {
            const updatedSlides = [...slides];

            updatedSlides[selectedSlide] = {
                ...updatedSlides[selectedSlide],
                image: "",
            };

            setSlides(updatedSlides);
        }
    };

    return (
        <div className="space-y-4">

            <DropZone onFile={addImage} />

            <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-sm transition hover:border-zinc-500"
            />

            {media.length === 0 ? (
                <div className="rounded-xl border border-dashed border-zinc-700 p-8 text-center text-sm text-zinc-500">
                    No images uploaded yet.
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-3">
                    {media.map((image) => (
                        <MediaCard
                            key={image.id}
                            image={image}
                            selected={
                                slides[selectedSlide]?.image === image.url
                            }
                            onClick={() => selectImage(image.url)}
                            onDelete={() => deleteImage(image.id)}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}