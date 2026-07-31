"use client";

import { useCarousel } from "@/context/CarouselContext";
import FilmStripSettings from "@/components/templates/film-strip/FilmStripSettings";

function ComingSoon({ title }: { title: string }) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <h2 className="text-lg font-semibold text-white">
                {title}
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
                Settings coming soon.
            </p>
        </div>
    );
}

export default function PropertyRenderer() {
    const { selectedTemplate } = useCarousel();

    switch (selectedTemplate) {
        case "film-strip":
            return <FilmStripSettings />;

        case "cover-flow":
            return <ComingSoon title="Cover Flow" />;

        case "orbit":
            return <ComingSoon title="Orbit" />;

        case "cards":
            return <ComingSoon title="Cards" />;

        case "gallery":
            return <ComingSoon title="Gallery" />;

        case "hero-slider":
            return <ComingSoon title="Hero Slider" />;

        default:
            return <FilmStripSettings />;
    }
}