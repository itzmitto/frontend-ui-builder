"use client";

import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Slide } from "@/types/slide";

type SortableSlideItemProps = {
    slide: Slide;
    index: number;
    selected: boolean;
    onSelect: () => void;
    onDuplicate: () => void;
    onDelete: () => void;
};

export default function SortableSlideItem({
    slide,
    index,
    selected,
    onSelect,
    onDuplicate,
    onDelete,
}: SortableSlideItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: slide.id,
    });

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
            }}
            className={`overflow-hidden rounded-xl border ${
                selected
                    ? "border-blue-500 bg-zinc-900"
                    : "border-zinc-800 bg-zinc-950"
            } ${
                isDragging
                    ? "scale-105 opacity-70 shadow-2xl"
                    : ""
            }`}
        >
            <div
                {...attributes}
                {...listeners}
                className="cursor-grab active:cursor-grabbing"
            >
                <div className="relative h-32 w-full">

                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                    />

                </div>
            </div>

            <button
                onClick={onSelect}
                className="w-full p-3 text-left"
            >
                <h3 className="truncate font-semibold">
                    {slide.title}
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                    Slide {index + 1}
                </p>
            </button>

            <div className="flex border-t border-zinc-800">

                <button
                    onClick={onDuplicate}
                    className="flex-1 py-2 text-xs hover:bg-zinc-800"
                >
                    Duplicate
                </button>

                <button
                    onClick={onDelete}
                    className="flex-1 py-2 text-xs text-red-400 hover:bg-red-500/10"
                >
                    Delete
                </button>

            </div>

        </div>
    );
}