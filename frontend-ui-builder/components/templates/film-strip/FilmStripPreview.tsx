"use client";

export default function FilmStripPreview() {
    return (
        <div className="relative flex h-28 items-center overflow-hidden rounded-lg bg-zinc-900">
            <div className="flex animate-film-strip gap-2 px-4">
                <div className="h-16 w-10 rounded bg-blue-500" />

                <div className="h-20 w-12 rounded bg-blue-400 shadow-lg" />

                <div className="h-16 w-10 rounded bg-blue-500" />

                <div className="h-20 w-12 rounded bg-blue-400 shadow-lg" />

                <div className="h-16 w-10 rounded bg-blue-500" />
            </div>
        </div>
    );
}