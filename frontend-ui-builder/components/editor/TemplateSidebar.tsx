"use client";

import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";
import { templateCategories } from "@/data/templates";

export default function TemplateSidebar() {
    const {
        selectedTemplate,
        setSelectedTemplate,
    } = useCarousel();

    return (
        <aside className="w-72 overflow-y-auto border-r border-zinc-800 bg-[#161616]">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                    Templates
                </h2>
            </div>

            {templateCategories.map((category) => (
                <div
                    key={category.title}
                    className="mb-8 px-4"
                >
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {category.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {category.templates.map((template) => (
                            <button
                                key={template.id}
                                onClick={() =>
                                    setSelectedTemplate(template.id)
                                }
                                className={`overflow-hidden rounded-xl border transition ${
                                    selectedTemplate === template.id
                                        ? "border-blue-500 bg-zinc-800"
                                        : "border-zinc-700 bg-zinc-900 hover:border-zinc-500"
                                }`}
                            >
                                <Image
                                    src={template.image}
                                    alt={template.name}
                                    width={200}
                                    height={120}
                                    className="h-24 w-full object-cover"
                                />

                                <div className="p-2">
                                    <p className="truncate text-left text-xs font-medium text-white">
                                        {template.name}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    );
}