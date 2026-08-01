"use client";

import { useCarousel } from "@/context/CarouselContext";

import FilmStrip from "@/components/templates/film-strip/FilmStrip";
import CoverFlow from "@/components/templates/cover-flow/CoverFlow";

function ComingSoon({ title }: { title: string }) {
    return (
        <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-4 text-7xl">
                🚧
            </div>

            <h2 className="text-3xl font-bold text-white">
                {title}
            </h2>

            <p className="mt-2 text-zinc-400">
                This template is coming soon.
            </p>
        </div>
    );
}

export default function TemplateRenderer() {
    const { selectedTemplate } = useCarousel();

    switch (selectedTemplate) {
        case "film-strip":
            return <FilmStrip />;

        case "cover-flow":
            return <CoverFlow />;

        case "orbit":
            return <ComingSoon title="Orbit" />;

        case "cards":
            return <ComingSoon title="Cards" />;

        case "gallery":
            return <ComingSoon title="Gallery" />;

        case "hero-slider":
            return <ComingSoon title="Hero Slider" />;

        default:
            return <FilmStrip />;
    }
}