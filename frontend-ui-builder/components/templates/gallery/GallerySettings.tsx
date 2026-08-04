
"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function GallerySettings() {
    const { settings, setSettings } = useCarousel();

    return (
        <div className="space-y-6">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                <h2 className="mb-4 text-lg font-semibold text-white">
                    Gallery Layout
                </h2>

                <div className="space-y-5">

                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">
                                Columns
                            </span>

                            <span className="text-zinc-500">
                                {settings.columns}
                            </span>
                        </div>

                        <input
                            type="range"
                            min={2}
                            max={6}
                            value={settings.columns}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    columns: Number(e.target.value),
                                })
                            }
                            className="w-full"
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">
                                Gap
                            </span>

                            <span className="text-zinc-500">
                                {settings.gap}px
                            </span>
                        </div>

                        <input
                            type="range"
                            min={0}
                            max={50}
                            value={settings.gap}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    gap: Number(e.target.value),
                                })
                            }
                            className="w-full"
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">
                                Border Radius
                            </span>

                            <span className="text-zinc-500">
                                {settings.borderRadius}px
                            </span>
                        </div>

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
                    </div>

                </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                <h2 className="mb-4 text-lg font-semibold text-white">
                    Effects
                </h2>

                <label className="flex items-center justify-between">
                    <span className="text-zinc-300">
                        Hover Animation
                    </span>

                    <input
                        type="checkbox"
                        checked={settings.hoverEffect}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                hoverEffect: e.target.checked,
                            })
                        }
                    />
                </label>

            </div>

        </div>
    );
}