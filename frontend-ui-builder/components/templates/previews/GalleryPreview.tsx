"use client";

export default function GalleryPreview() {
    return (
        <div className="grid h-28 grid-cols-2 gap-2 rounded-lg bg-zinc-900 p-2">
            <div className="rounded bg-blue-500" />
            <div className="rounded bg-purple-500" />
            <div className="rounded bg-pink-500" />
            <div className="rounded bg-green-500" />
        </div>
    );
}