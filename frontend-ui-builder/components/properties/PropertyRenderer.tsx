"use client";

import { useCarousel } from "@/context/CarouselContext";

import FilmStripSettings from "@/components/templates/film-strip/FilmStripSettings";
import GallerySettings from "@/components/templates/gallery/GallerySettings";
import SlideProperties from "./SlideProperties";
import InspectorSection from "./InspectorSection";

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
            return (
                <>
                    <InspectorSection title="Content">
                        <SlideProperties />
                    </InspectorSection>
                    <InspectorSection title="Carousel">
                        <FilmStripSettings />
                    </InspectorSection>
                </>
            );

        case "gallery":
            return (
                <>
                    <SlideProperties />
                    <GallerySettings />
                </>
            );

        case "cover-flow":
            return (
                <>
                    <SlideProperties />
                    <ComingSoon title="Cover Flow" />
                </>
            );

        case "cards":
            return (
                <>
                    <SlideProperties />
                    <ComingSoon title="Cards" />
                </>
            );

        case "orbit":
            return (
                <>
                    <SlideProperties />
                    <ComingSoon title="Orbit" />
                </>
            );

        case "hero-slider":
            return (
                <>
                    <SlideProperties />
                    <ComingSoon title="Hero Slider" />
                </>
            );

        default:
            return (
                <>
                    <SlideProperties />
                    <FilmStripSettings />
                </>
            );
    }
}