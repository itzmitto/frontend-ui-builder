"use client";

import { useCarousel } from "@/context/CarouselContext";

import { downloadFile } from "@/lib/export/downloadFile";

import { generateReactComponent } from "@/lib/export/exportReact";

export default function ExportReactButton() {
    const { slides } = useCarousel();

    const handleExport = () => {
        const code =
            generateReactComponent(
                slides
            );

        downloadFile(
            "MyCarousel.tsx",
            code
        );
    };

    return (
        <button
            onClick={handleExport}
            className="rounded-lg bg-cyan-600 px-4 py-2 text-white"
        >
            Export React
        </button>
    );
}