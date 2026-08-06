"use client";

import { Slide } from "@/types/slide";

import { getAnimationStyle } from "@/lib/animations";

import CanvasSelectable from "@/components/editor/CanvasSelectable";

type SlideContentProps = {
    slide: Slide;
};

export default function SlideContent({
    slide,
}: SlideContentProps) {
    return (
        <div
            className="space-y-4"
            style={getAnimationStyle(slide)}
        >

            <CanvasSelectable element="title">

                <h2 className="text-2xl font-bold text-white">
                    {slide.title}
                </h2>

            </CanvasSelectable>

            <CanvasSelectable element="description">

                <p className="text-sm leading-7 text-zinc-400">
                    {slide.description}
                </p>

            </CanvasSelectable>

            {slide.buttonText && (

                <CanvasSelectable element="button">

                    <button
                        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-500"
                    >
                        {slide.buttonText}
                    </button>

                </CanvasSelectable>

            )}

        </div>
    );
}