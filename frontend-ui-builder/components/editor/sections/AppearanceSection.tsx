"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function AppearanceSection() {
    const { settings, setSettings } = useCarousel();

    return (
        <div>
            <h3 className="mb-5 text-lg font-semibold">
                Appearance
            </h3>

            <div>

                <label className="mb-2 block text-sm">
                    Border Radius
                </label>

                <input
                    type="range"
                    min={0}
                    max={40}
                    value={settings.borderRadius}
                    onChange={(e) =>
                        setSettings({
                            ...settings,
                            borderRadius: Number(e.target.value),
                        })
                    }
                    className="w-full"
                />

                <p className="text-sm text-zinc-400">
                    {settings.borderRadius}px
                </p>

            </div>
        </div>
    );
}