"use client";

import { ChangeEvent } from "react";
import { useCarousel } from "@/context/CarouselContext";

export default function SlideEditor() {
    const {
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const slide = slides[selectedSlide];

    const updateSlide = (
        field: "title" | "image",
        value: string
    ) => {
        const updatedSlides = [...slides];

        updatedSlides[selectedSlide] = {
            ...slide,
            [field]: value,
        };

        setSlides(updatedSlides);
    };

    const uploadImage = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        const updatedSlides = [...slides];

        updatedSlides[selectedSlide] = {
            ...slide,
            image: imageUrl,
        };

        setSlides(updatedSlides);
    };

    const deleteSlide = () => {
        if (slides.length <= 1) return;

        const updatedSlides = slides.filter(
            (_, index) => index !== selectedSlide
        );

        setSlides(updatedSlides);

        if (selectedSlide >= updatedSlides.length) {
            setSelectedSlide(updatedSlides.length - 1);
        }
    };

    return (
        <div className="space-y-5 rounded-xl border border-zinc-700 p-4">
            <div>
                <h2 className="text-lg font-semibold">
                    Slide Editor
                </h2>

                <p className="text-sm text-zinc-400">
                    Editing: {slide.title}
                </p>
            </div>

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

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Upload Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={uploadImage}
                    className="block w-full text-sm
                    file:mr-4
                    file:rounded-lg
                    file:border-0
                    file:bg-blue-600
                    file:px-4
                    file:py-2
                    file:text-white
                    hover:file:bg-blue-700"
                />
            </div>

            <div className="overflow-hidden rounded-lg border border-zinc-700">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-40 w-full object-cover"
                />
            </div>

            <button
                onClick={deleteSlide}
                disabled={slides.length <= 1}
                className="w-full rounded-lg bg-red-600 py-2 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Delete Slide
            </button>
        </div>
    );
}