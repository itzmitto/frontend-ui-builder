"use client";

import { useCarousel } from "@/context/CarouselContext";
import { Template } from "@/types/template";

const templates: {
    id: Template;
    name: string;
}[] = [
    {
        id: "film-strip",
        name: "🎞 Film Strip",
    },
    {
        id: "cover-flow",
        name: "🌀 Cover Flow",
    },
    {
        id: "orbit",
        name: "🌍 Orbit",
    },
    {
        id: "cards",
        name: "🃏 Cards",
    },
    {
        id: "gallery",
        name: "🖼 Gallery",
    },
    {
        id: "hero-slider",
        name: "⭐ Hero Slider",
    },
];

export default function TemplateSidebar() {
    const {
        selectedTemplate,
        setSelectedTemplate,
    } = useCarousel();

    return (
        <aside className="w-64 border-r border-zinc-800 bg-zinc-900 p-4">
            <h2 className="mb-4 text-lg font-semibold">
                Templates
            </h2>

            <div className="space-y-2">
                {templates.map((template) => (
                    <button
                        key={template.id}
                        onClick={() =>
                            setSelectedTemplate(template.id)
                        }
                        className={`w-full rounded-lg px-4 py-3 text-left transition ${
                            selectedTemplate === template.id
                                ? "bg-blue-600"
                                : "bg-zinc-800 hover:bg-zinc-700"
                        }`}
                    >
                        {template.name}
                    </button>
                ))}
            </div>
        </aside>
    );
}