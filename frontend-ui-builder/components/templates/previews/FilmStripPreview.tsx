"use client";

export default function FilmStripPreview() {
    return (
        <div className="flex h-28 items-center justify-center overflow-hidden rounded-lg bg-zinc-900">
            <div className="flex gap-2">
                <div className="h-16 w-10 rounded bg-blue-500 transition-transform duration-300" />

                <div className="h-20 w-12 rounded bg-blue-400 shadow-lg" />

                <div className="h-16 w-10 rounded bg-blue-500 transition-transform duration-300" />
            </div>
        </div>
    );
}