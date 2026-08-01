"use client";

import Image from "next/image";

type Props = {
    image: {
        id: number;
        url: string;
    };
    selected: boolean;
    onClick: () => void;
    onDelete: () => void;
};

export default function MediaCard({
    image,
    selected,
    onClick,
    onDelete,
}: Props) {
    return (
        <div
            className={`group relative overflow-hidden rounded-xl border transition ${
                selected
                    ? "border-blue-500 ring-2 ring-blue-500/30"
                    : "border-zinc-700 hover:border-zinc-500"
            }`}
        >
            <button
                onClick={onClick}
                className="block w-full"
            >
                <Image
                    src={image.url}
                    alt=""
                    width={180}
                    height={120}
                    className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </button>

            {selected && (
                <div className="absolute left-2 top-2 rounded-full bg-blue-500 px-2 py-1 text-xs font-bold text-white">
                    Selected
                </div>
            )}

            <button
                onClick={onDelete}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
            >
                ×
            </button>
        </div>
    );
}