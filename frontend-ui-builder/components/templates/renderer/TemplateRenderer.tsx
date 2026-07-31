"use client";

import { useCarousel } from "@/context/CarouselContext";
import FilmStrip from "@/components/templates/film-strip/FilmStrip";

export default function TemplateRenderer() {
    const { selectedTemplate } = useCarousel();

    switch (selectedTemplate) {
        case "film-strip":
            return <FilmStrip />;

        case "cover-flow":
            return (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-zinc-500">
                    Cover Flow Preview
                </div>
            );

        case "orbit":
            return (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-zinc-500">
                    Orbit Preview
                </div>
            );

        case "cards":
            return (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-zinc-500">
                    Cards Preview
                </div>
            );

        case "gallery":
            return (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-zinc-500">
                    Gallery Preview
                </div>
            );

        case "hero-slider":
            return (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-zinc-500">
                    Hero Slider Preview
                </div>
            );

        default:
            return <FilmStrip />;
    }
}