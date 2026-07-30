"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function LayoutSection() {
    const { settings, setSettings } = useCarousel();

    return (
        <div>
            <h3 className="mb-5 text-lg font-semibold">
                Layout
            </h3>

            <div className="space-y-5">

                <div>
                    <label className="mb-2 block text-sm">
                        Gap
                    </label>

                    <input
                        type="range"
                        min={0}
                        max={80}
                        value={settings.gap}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                gap: Number(e.target.value),
                            })
                        }
                        className="w-full"
                    />

                    <p className="text-sm text-zinc-400">
                        {settings.gap}px
                    </p>
                </div>

                <div>
                    <label className="mb-2 block text-sm">
                        Width
                    </label>

                    <input
                        type="range"
                        min={200}
                        max={500}
                        value={settings.width}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                width: Number(e.target.value),
                            })
                        }
                        className="w-full"
                    />

                    <p className="text-sm text-zinc-400">
                        {settings.width}px
                    </p>
                </div>

                <div>
                    <label className="mb-2 block text-sm">
                        Height
                    </label>

                    <input
                        type="range"
                        min={120}
                        max={350}
                        value={settings.height}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                height: Number(e.target.value),
                            })
                        }
                        className="w-full"
                    />

                    <p className="text-sm text-zinc-400">
                        {settings.height}px
                    </p>
                </div>

            </div>
        </div>
    );
}