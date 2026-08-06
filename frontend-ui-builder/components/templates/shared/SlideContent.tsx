"use client";

import { Slide } from "@/types/slide";
import { getAnimationStyle } from "@/lib/animations";

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
            <h2 className="text-2xl font-bold text-white">
                {slide.title}
            </h2>

            <p className="text-sm leading-7 text-zinc-400">
                {slide.description}
            </p>

            {slide.buttonText && (
                <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-500">
                    {slide.buttonText}
                </button>
            )}
        </div>
    );
}