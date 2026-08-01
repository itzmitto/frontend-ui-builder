"use client";

export default function GalleryPreview() {
    return (
        <div className="grid h-28 grid-cols-2 gap-2 overflow-hidden rounded-lg bg-zinc-900 p-2">

            <div className="animate-gallery rounded bg-blue-500" />

            <div
                className="animate-gallery rounded bg-purple-500"
                style={{ animationDelay: "0.2s" }}
            />

            <div
                className="animate-gallery rounded bg-pink-500"
                style={{ animationDelay: "0.4s" }}
            />

            <div
                className="animate-gallery rounded bg-green-500"
                style={{ animationDelay: "0.6s" }}
            />

        </div>
    );
}