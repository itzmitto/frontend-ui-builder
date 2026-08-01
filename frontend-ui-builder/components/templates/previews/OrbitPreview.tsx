"use client";

export default function OrbitPreview() {
    return (
        <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg bg-zinc-900">
            <div className="h-6 w-6 rounded-full bg-blue-500" />

            <div className="absolute h-20 w-20 rounded-full border border-zinc-700" />

            <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-purple-500" />
        </div>
    );
}