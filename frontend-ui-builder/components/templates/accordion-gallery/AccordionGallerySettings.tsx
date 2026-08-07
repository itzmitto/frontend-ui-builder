"use client";

import { useCarousel } from "@/context/CarouselContext";

export default function AccordionGallerySettings() {
    const {
        accordionGallerySettings,
        setAccordionGallerySettings,
    } = useCarousel();

    return (
        <div className="space-y-5">

            <div>
                <label className="mb-2 block text-sm text-zinc-400">
                    Expanded Width
                </label>

                <input
                    type="range"
                    min={2}
                    max={8}
                    value={accordionGallerySettings.expandedFlex}
                    onChange={(e) =>
                        setAccordionGallerySettings((prev) => ({
                            ...prev,
                            expandedFlex: Number(e.target.value),
                        }))
                    }
                    className="w-full"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-zinc-400">
                    Gap
                </label>

                <input
                    type="range"
                    min={0}
                    max={40}
                    value={accordionGallerySettings.gap}
                    onChange={(e) =>
                        setAccordionGallerySettings((prev) => ({
                            ...prev,
                            gap: Number(e.target.value),
                        }))
                    }
                    className="w-full"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-zinc-400">
                    Border Radius
                </label>

                <input
                    type="range"
                    min={0}
                    max={40}
                    value={accordionGallerySettings.borderRadius}
                    onChange={(e) =>
                        setAccordionGallerySettings((prev) => ({
                            ...prev,
                            borderRadius: Number(e.target.value),
                        }))
                    }
                    className="w-full"
                />
            </div>

        </div>
    );
}