"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function DeviceSwitcher() {
    const { device, setDevice } = useCarousel();

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setDevice("desktop")}
                className={`rounded-lg px-4 py-2 transition ${
                    device === "desktop"
                        ? "bg-blue-600"
                        : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
                🖥 Desktop
            </button>

            <button
                onClick={() => setDevice("tablet")}
                className={`rounded-lg px-4 py-2 transition ${
                    device === "tablet"
                        ? "bg-blue-600"
                        : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
                📱 Tablet
            </button>

            <button
                onClick={() => setDevice("mobile")}
                className={`rounded-lg px-4 py-2 transition ${
                    device === "mobile"
                        ? "bg-blue-600"
                        : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
                📱 Mobile
            </button>
        </div>
    );
}