"use client";

export default function HeroSliderPreview() {
    return (
        <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">

            <div className="animate-hero text-center">

                <div className="mx-auto mb-3 h-2 w-16 rounded-full bg-white/80" />

                <div className="mx-auto h-2 w-10 rounded-full bg-white/50" />

            </div>

        </div>
    );
}