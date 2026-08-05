"use client";

import { useCarousel } from "@/context/CarouselContext";
import { animationOptions } from "@/types/animation";

export default function AnimationPanel() {
    const {
        slides,
        selectedSlide,
        setSlides,
    } = useCarousel();

    const slide = slides[selectedSlide];

    if (!slide) {
        return null;
    }
    const update = (
        key: keyof typeof slide,
        value: string | number
    ) => {
        const updated = [...slides];
        updated[selectedSlide] = {
            ...slide,
            [key]: value,
        };
        setSlides(updated);
    };
    return (
        <div className="space-y-5">
            <div>
                <label className="mb-2 block text-sm text-zinc-400">
                    Animation
                </label>
                <select
                    value={slide.animation}
                    onChange={(e) =>
                        update("animation", e.target.value)
                    }
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2"
                >
                    {animationOptions.map((animation) => (
                        <option
                            key={animation.value}
                            value={animation.value}
                        >
                            {animation.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="mb-2 block text-sm text-zinc-400">
                    Duration
                </label>
                <input
                    type="range"
                    min={100}
                    max={3000}
                    value={slide.duration}
                    onChange={(e) =>
                        update(
                            "duration",
                            Number(e.target.value)
                        )
                    }
                    className="w-full"
                />
                <p className="mt-1 text-xs text-zinc-500">
                    {slide.duration} ms
                </p>
            </div>
            <div>
                <label className="mb-2 block text-sm text-zinc-400">
                    Delay
                </label>
                <input
                    type="range"
                    min={0}
                    max={3000}
                    value={slide.delay}
                    onChange={(e) =>
                        update(
                            "delay",
                            Number(e.target.value)
                        )
                    }
                    className="w-full"
                />
                <p className="mt-1 text-xs text-zinc-500">
                    {slide.delay} ms
                </p>
            </div>

        </div>
    );
}