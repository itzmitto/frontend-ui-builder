"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function Preview() {
    const { settings } = useCarousel();

    return (
        <section className="flex flex-1 items-center justify-center bg-zinc-950">

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-10">

                <div
                    className="flex overflow-hidden"
                    style={{
                        gap: settings.gap,
                    }}
                >
                    <div
                        className="rounded-xl bg-blue-500"
                        style={{
                            width: settings.width,
                            height: settings.height,
                            borderRadius: settings.borderRadius,
                        }}
                    />

                    <div
                        className="rounded-xl bg-purple-500"
                        style={{
                            width: settings.width,
                            height: settings.height,
                            borderRadius: settings.borderRadius,
                        }}
                    />

                    <div
                        className="rounded-xl bg-pink-500"
                        style={{
                            width: settings.width,
                            height: settings.height,
                            borderRadius: settings.borderRadius,
                        }}
                    />
                </div>

            </div>

        </section>
    );
}