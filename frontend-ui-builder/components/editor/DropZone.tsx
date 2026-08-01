"use client";

import { DragEvent } from "react";

type Props = {
    onFile: (file: File) => void;
};

export default function DropZone({
    onFile,
}: Props) {
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) return;

        onFile(file);
    };

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 text-sm text-zinc-400 transition hover:border-blue-500"
        >
            Drag & Drop Images Here
        </div>
    );
}