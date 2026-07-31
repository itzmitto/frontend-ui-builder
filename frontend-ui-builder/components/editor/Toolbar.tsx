"use client";

import { useCarousel } from "@/context/CarouselContext";
import {
    generateHTML,
    generateCSS,
    generateJS,
} from "@/lib/generators/carouselGenerator";
import { exportCarousel } from "@/lib/export/exportCarousel";
import DeviceSwitcher from "./DeviceSwitcher";

export default function Toolbar() {
    const {
        settings,
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const addSlide = () => {
        const newSlide = {
            id: Date.now(),
            title: `Slide ${slides.length + 1}`,
            image: `https://picsum.photos/800/500?random=${Date.now()}`,
        };

        setSlides([...slides, newSlide]);
        setSelectedSlide(slides.length);
    };

    const duplicateSlide = () => {
        if (slides.length === 0) return;

        const slide = slides[selectedSlide];

        const duplicatedSlide = {
            ...slide,
            id: Date.now(),
            title: `${slide.title} Copy`,
        };

        setSlides([...slides, duplicatedSlide]);
        setSelectedSlide(slides.length);
    };

    const exportProject = async () => {
        await exportCarousel(
            generateHTML(settings),
            generateCSS(settings),
            generateJS(settings)
        );
    };

    return (
        <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 p-4">
            <DeviceSwitcher />

            <div className="h-6 w-px bg-zinc-700" />

            <button
                onClick={addSlide}
                className="rounded-lg bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
            >
                + Add Slide
            </button>

            <button
                onClick={duplicateSlide}
                className="rounded-lg bg-zinc-800 px-4 py-2 transition hover:bg-zinc-700"
            >
                Duplicate
            </button>

            <button
                onClick={exportProject}
                className="rounded-lg bg-green-600 px-4 py-2 transition hover:bg-green-700"
            >
                Export ZIP
            </button>
        </div>
    );
}