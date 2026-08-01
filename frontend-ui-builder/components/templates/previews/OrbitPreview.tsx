"use client";

export default function OrbitPreview() {
    return (
        <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg bg-zinc-900">

            <div className="relative h-20 w-20 animate-orbit">

                <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-lg" />

                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-purple-500" />

                <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-pink-500" />

                <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-green-500" />

                <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-yellow-500" />

            </div>

        </div>
    );
}