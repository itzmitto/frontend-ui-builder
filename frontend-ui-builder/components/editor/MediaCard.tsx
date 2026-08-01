"use client";

import Image from "next/image";

type Props = {
    image: {
        id: number;
        url: string;
    };
    selected: boolean;
    onClick: () => void;
};

export default function MediaCard({
    image,
    selected,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className={`group relative overflow-hidden rounded-xl border transition ${
                selected
                    ? "border-blue-500 ring-2 ring-blue-500/30"
                    : "border-zinc-700 hover:border-zinc-500"
            }`}
        >
            <Image
                src={image.url}
                alt=""
                width={180}
                height={120}
                className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            {selected && (
                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                    ✓
                </div>
            )}
        </button>
    );
}