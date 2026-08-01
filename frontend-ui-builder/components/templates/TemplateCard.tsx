"use client";

import { useCarousel } from "@/context/CarouselContext";

import FilmStripPreview from "./previews/FilmStripPreview";
import CoverFlowPreview from "./previews/CoverFlowPreview";
import OrbitPreview from "./previews/OrbitPreview";
import GalleryPreview from "./previews/GalleryPreview";
import HeroSliderPreview from "./previews/HeroSliderPreview";

type Props = {
    id: string;
    title: string;
    description: string;
};

export default function TemplateCard({
    id,
    title,
    description,
}: Props) {
    const {
        selectedTemplate,
        setSelectedTemplate,
    } = useCarousel();

    const renderPreview = () => {
        switch (id) {
            case "film-strip":
                return <FilmStripPreview />;

            case "cover-flow":
                return <CoverFlowPreview />;

            case "orbit":
                return <OrbitPreview />;

            case "gallery":
                return <GalleryPreview />;

            case "hero-slider":
                return <HeroSliderPreview />;

            default:
                return (
                    <div className="flex h-28 items-center justify-center rounded-lg bg-zinc-900 text-sm text-zinc-500">
                        Preview
                    </div>
                );
        }
    };

    return (
        <button
            onClick={() => setSelectedTemplate(id)}
            className={`w-full overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                selectedTemplate === id
                    ? "border-blue-500 bg-zinc-800 shadow-lg shadow-blue-500/20"
                    : "border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:-translate-y-1"
            }`}
        >
            {renderPreview()}

            <div className="p-4">
                <h3 className="font-semibold text-white">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                    {description}
                </p>
            </div>
        </button>
    );
}