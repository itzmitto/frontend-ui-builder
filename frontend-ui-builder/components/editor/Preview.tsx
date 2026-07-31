"use client";

import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";
import { slides } from "@/data/slides";

export default function Preview() {
    const { settings } = useCarousel();

    return (
        <section className="flex flex-1 items-center justify-center bg-zinc-950 p-10">
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-10">
                <div
                    className="flex overflow-hidden"
                    style={{
                        gap: settings.gap,
                    }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="overflow-hidden"
                            style={{
                                width: settings.width,
                                height: settings.height,
                                borderRadius: settings.borderRadius,
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={settings.width}
                                height={settings.height}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}