"use client";

import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Slide } from "@/types/slide";

type Props = {
    slide: Slide;
    index: number;
    selected: boolean;
    onSelect: () => void;
    onDuplicate: () => void;
    onDelete: () => void;
};

export default function SortableSlide({
    slide,
    index,
    selected,
    onSelect,
    onDuplicate,
    onDelete,
}: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: slide.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            onClick={onSelect}
            className={`rounded-xl border p-3 transition ${
                selected
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
            }`}
        >
            <div className="flex items-center gap-3">
                <div
                    {...attributes}
                    {...listeners}
                    className="cursor-grab select-none text-xl text-zinc-400"
                >
                    ☰
                </div>

                <Image
                    src={slide.image}
                    alt={slide.title}
                    width={70}
                    height={45}
                    className="rounded-md object-cover"
                />

                <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-white">
                        {slide.title}
                    </p>

                    <p className="text-xs text-zinc-400">
                        Slide {index + 1}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDuplicate();
                        }}
                        className="rounded bg-zinc-800 px-2 py-1 text-xs transition hover:bg-zinc-700"
                    >
                        Copy
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="rounded bg-red-600 px-2 py-1 text-xs transition hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}