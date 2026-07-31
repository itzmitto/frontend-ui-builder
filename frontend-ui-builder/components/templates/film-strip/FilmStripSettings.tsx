"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function FilmStripSettings() {
    const { settings, setSettings } = useCarousel();

    return (
        <div className="space-y-8">

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-white">
                    Layout
                </h2>

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        Width
                    </label>

                    <input
                        type="number"
                        value={settings.width}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                width: Number(e.target.value),
                            })
                        }
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        Height
                    </label>

                    <input
                        type="number"
                        value={settings.height}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                height: Number(e.target.value),
                            })
                        }
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        Gap
                    </label>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={settings.gap}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                gap: Number(e.target.value),
                            })
                        }
                        className="w-full"
                    />

                    <p className="mt-1 text-xs text-zinc-500">
                        {settings.gap}px
                    </p>
                </div>

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
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

                    <p className="mt-1 text-xs text-zinc-500">
                        {settings.borderRadius}px
                    </p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-white">
                    Behavior
                </h2>

                <label className="flex items-center justify-between">
                    <span>Autoplay</span>

                    <input
                        type="checkbox"
                        checked={settings.autoplay}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                autoplay: e.target.checked,
                            })
                        }
                    />
                </label>

                <label className="flex items-center justify-between">
                    <span>Infinite</span>

                    <input
                        type="checkbox"
                        checked={settings.infinite}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                infinite: e.target.checked,
                            })
                        }
                    />
                </label>

                <label className="flex items-center justify-between">
                    <span>Navigation</span>

                    <input
                        type="checkbox"
                        checked={settings.navigation}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                navigation: e.target.checked,
                            })
                        }
                    />
                </label>

                <label className="flex items-center justify-between">
                    <span>Pagination</span>

                    <input
                        type="checkbox"
                        checked={settings.pagination}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                pagination: e.target.checked,
                            })
                        }
                    />
                </label>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-white">
                    Animation
                </h2>

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        Speed
                    </label>

                    <input
                        type="range"
                        min={500}
                        max={10000}
                        step={100}
                        value={settings.speed}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                speed: Number(e.target.value),
                            })
                        }
                        className="w-full"
                    />

                    <p className="mt-1 text-xs text-zinc-500">
                        {settings.speed} ms
                    </p>
                </div>
            </section>

        </div>
    );
}