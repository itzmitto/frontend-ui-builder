"use client";

import { useCarousel } from "@/context/CarouselContext";

import PreviewCanvas from "@/components/editor/PreviewCanvas";

import FilmStrip from "@/components/templates/film-strip/FilmStrip";
import CoverFlow from "@/components/templates/cover-flow/CoverFlow";
import Gallery from "@/components/templates/gallery/Gallery";
import Cards from "@/components/templates/cards/Cards";
import HeroSlider from "@/components/templates/hero-slider/HeroSlider";

function ComingSoon({ title }: { title: string }) {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="text-center">
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
        </div>
    );
}

export default function TemplateRenderer() {
    const { selectedTemplate } = useCarousel();

    return (
        <PreviewCanvas>

            {(() => {
                switch (selectedTemplate) {
                    case "film-strip":
                        return <FilmStrip />;

                    case "cover-flow":
                        return <CoverFlow />;

                    case "gallery":
                        return <Gallery />;

                    case "cards":
                        return <Cards />;

                    case "hero-slider":
                        return <HeroSlider />;

                    case "orbit":
                        return (
                            <ComingSoon title="Orbit" />
                        );

                    default:
                        return <FilmStrip />;
                }
            })()}

        </PreviewCanvas>
    );
}