"use client";

import { ChangeEvent } from "react";
import { useCarousel } from "@/context/CarouselContext";

export default function AssetsPanel() {
    const {
        media,
        setMedia,
    } = useCarousel();

    const handleUpload = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const files =
            event.target.files;

        if (!files) return;

        const uploaded = Array.from(
            files
        ).map((file) => ({
            id: Date.now() + Math.random(),
            name: file.name,
            url: URL.createObjectURL(
                file
            ),
        }));

        setMedia([
            ...media,
            ...uploaded,
        ]);
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">

            <h2 className="mb-4 text-sm font-semibold text-white">
                Assets
            </h2>

            <label className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-zinc-700 p-4 text-sm text-zinc-400 hover:border-zinc-500">
                Upload Images

                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={
                        handleUpload
                    }
                    className="hidden"
                />
            </label>

            <div className="mt-4 grid grid-cols-3 gap-2">

                {media.map((item) => (
                    <img
                        key={item.id}
                        src={item.url}
                        alt={item.name}
                        className="h-20 w-full rounded-lg object-cover"
                    />
                ))}

            </div>

        </div>
    );
}