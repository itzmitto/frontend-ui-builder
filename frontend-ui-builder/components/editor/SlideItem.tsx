"use client";

import Image from "next/image";
import { Slide } from "@/types/slide";

type SlideItemProps = {
    slide: Slide;
    index: number;
    selected: boolean;
    onSelect: () => void;
    onDuplicate: () => void;
    onDelete: () => void;
};

export default function SlideItem({
    slide,
    index,
    selected,
    onSelect,
    onDuplicate,
    onDelete,
}: SlideItemProps) {
    return (
        <div
            className={`overflow-hidden rounded-xl border transition-all ${
                selected
                    ? "border-blue-500 bg-zinc-900 shadow-lg"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
            }`}
        >
            <button
                onClick={onSelect}
                className="w-full"
            >
                <div className="relative h-32 w-full">
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-3 text-left">
                    <h3 className="truncate font-semibold text-white">
                        {slide.title}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-500">
                        Slide {index + 1}
                    </p>
                </div>
            </button>

            <div className="flex border-t border-zinc-800">

                <button
                    onClick={onDuplicate}
                    className="flex-1 py-2 text-xs transition hover:bg-zinc-800"
                >
                    Duplicate
                </button>

                <div className="w-px bg-zinc-800" />

                <button
                    onClick={onDelete}
                    className="flex-1 py-2 text-xs text-red-400 transition hover:bg-red-500/10"
                >
                    Delete
                </button>

            </div>
        </div>
    );
}