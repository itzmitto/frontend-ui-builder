"use client";

import { useCarousel } from "@/context/CarouselContext";
import MediaLibrary from "@/components/editor/MediaLibrary";

export default function FilmStripSettings() {
    const { settings, setSettings } = useCarousel();

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                <h2 className="mb-4 text-lg font-semibold text-white">
                    Media
                </h2>

                <MediaLibrary />
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                <h2 className="mb-4 text-lg font-semibold text-white">
                    Layout
                </h2>

                <div className="space-y-5">
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
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none transition focus:border-blue-500"
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
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none transition focus:border-blue-500"
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
                            max={50}
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
                    Behavior
                </h2>

                <div className="space-y-4">
                    <label className="flex items-center justify-between">
                        <span className="text-zinc-300">
                            Autoplay
                        </span>

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
                        <span className="text-zinc-300">
                            Infinite
                        </span>

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
                        <span className="text-zinc-300">
                            Navigation
                        </span>

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
                        <span className="text-zinc-300">
                            Pagination
                        </span>

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
                </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                <h2 className="mb-4 text-lg font-semibold text-white">
                    Animation
                </h2>

                <div>
                    <div className="mb-2 flex justify-between text-sm">
                        <span className="text-zinc-400">
                            Speed
                        </span>

                        <span className="text-zinc-500">
                            {settings.speed} ms
                        </span>
                    </div>

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
                </div>
            </div>
        </div>
    );
}