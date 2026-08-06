"use client";

import { useCarousel } from "@/context/CarouselContext";

import FilmStripSettings from "@/components/templates/film-strip/FilmStripSettings";
import GallerySettings from "@/components/templates/gallery/GallerySettings";
import HeroSliderSettings from "@/components/templates/hero-slider/HeroSliderSettings";

import SlideProperties from "./SlideProperties";
import InspectorSection from "./InspectorSection";
import AnimationPanel from "./AnimationPanel";

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

                    <InspectorSection title="Animation">
                        <AnimationPanel />
                    </InspectorSection>
                </>
            );

        case "gallery":
            return (
                <>
                    <InspectorSection title="Content">
                        <SlideProperties />
                    </InspectorSection>

                    <InspectorSection title="Gallery">
                        <GallerySettings />
                    </InspectorSection>

                    <InspectorSection title="Animation">
                        <AnimationPanel />
                    </InspectorSection>
                </>
            );

        case "hero-slider":
            return (
                <>
                    <InspectorSection title="Content">
                        <SlideProperties />
                    </InspectorSection>

                    <InspectorSection title="Hero Slider">
                        <HeroSliderSettings />
                    </InspectorSection>

                    <InspectorSection title="Animation">
                        <AnimationPanel />
                    </InspectorSection>
                </>
            );

        case "cover-flow":
            return (
                <>
                    <InspectorSection title="Content">
                        <SlideProperties />
                    </InspectorSection>

                    <InspectorSection title="Cover Flow">
                        <ComingSoon title="Cover Flow" />
                    </InspectorSection>

                    <InspectorSection title="Animation">
                        <AnimationPanel />
                    </InspectorSection>
                </>
            );

        case "cards":
            return (
                <>
                    <InspectorSection title="Content">
                        <SlideProperties />
                    </InspectorSection>

                    <InspectorSection title="Cards">
                        <ComingSoon title="Cards" />
                    </InspectorSection>

                    <InspectorSection title="Animation">
                        <AnimationPanel />
                    </InspectorSection>
                </>
            );

        case "orbit":
            return (
                <>
                    <InspectorSection title="Content">
                        <SlideProperties />
                    </InspectorSection>

                    <InspectorSection title="Orbit">
                        <ComingSoon title="Orbit" />
                    </InspectorSection>

                    <InspectorSection title="Animation">
                        <AnimationPanel />
                    </InspectorSection>
                </>
            );

        default:
            return (
                <>
                    <InspectorSection title="Content">
                        <SlideProperties />
                    </InspectorSection>

                    <InspectorSection title="Carousel">
                        <FilmStripSettings />
                    </InspectorSection>

                    <InspectorSection title="Animation">
                        <AnimationPanel />
                    </InspectorSection>
                </>
            );
    }
}