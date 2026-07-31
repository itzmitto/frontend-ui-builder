"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function BehaviorSection() {
    const { settings, setSettings } = useCarousel();

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Behavior</h2>

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
        </div>
    );
}