"use client";

export default function HeroSliderPreview() {
    return (
        <div className="flex h-28 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="text-center">
                <div className="mx-auto mb-2 h-2 w-16 rounded bg-white/70" />
                <div className="mx-auto h-2 w-10 rounded bg-white/40" />
            </div>
        </div>
    );
}