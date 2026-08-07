"use client";

import { useRef } from "react";

import { useCarousel } from "@/context/CarouselContext";

import {
    saveProject,
    loadProject,
} from "@/lib/project/projectStorage";

export default function ProjectButtons() {
    const {
        slides,
        settings,
        selectedTemplate,
        setSlides,
        setSettings,
        setSelectedTemplate,
    } = useCarousel();

    const inputRef =
        useRef<HTMLInputElement>(null);

    const handleSave = () => {
        saveProject({
            slides,
            settings,
            selectedTemplate,
        });
    };

    const handleLoad = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file =
            event.target.files?.[0];

        if (!file) return;

        const project =
            await loadProject(file);

        setSlides(project.slides);
        setSettings(project.settings);
        setSelectedTemplate(
            project.selectedTemplate
        );
    };

    return (
        <div className="flex gap-2">

            <button
                onClick={handleSave}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
            >
                Save Project
            </button>

            <button
                onClick={() =>
                    inputRef.current?.click()
                }
                className="rounded-lg bg-orange-600 px-4 py-2 text-white"
            >
                Load Project
            </button>

            <input
                ref={inputRef}
                type="file"
                accept=".json"
                hidden
                onChange={handleLoad}
            />

        </div>
    );
}