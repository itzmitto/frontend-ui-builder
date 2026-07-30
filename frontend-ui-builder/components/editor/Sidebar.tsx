"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function Sidebar() {
  const { settings, setSettings } = useCarousel();

  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-900 p-5">
      <h2 className="mb-6 text-xl font-bold">
        Carousel Settings
      </h2>

      <div className="space-y-8">

        <div>
          <label className="mb-2 block text-sm font-medium">
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

          <p className="mt-2 text-sm text-zinc-400">
            {settings.gap}px
          </p>
        </div>

      </div>
    </aside>
  );
}