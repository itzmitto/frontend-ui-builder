"use client";

import { useCarousel } from "@/context/CarouselContext";
import { templateCategories } from "@/data/templates";
import TemplateCard from "./TemplateCard";

export default function TemplateSidebar() {
    const {
        selectedTemplate,
        setSelectedTemplate,
    } = useCarousel();

    return (
        <aside className="w-80 border-r border-zinc-800 bg-zinc-950 overflow-y-auto">
            <div className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-950 p-5">
                <h1 className="text-2xl font-bold">
                    Templates
                </h1>

                <p className="mt-1 text-sm text-zinc-400">
                    Choose a template to start building.
                </p>
            </div>

            <div className="space-y-8 p-5">
                {templateCategories.map((category) => (
                    <section key={category.title}>
                        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            {category.title}
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            {category.templates.map((template) => (
                                <TemplateCard
                                    key={template.id}
                                    id={template.id}
                                    name={template.name}
                                    selected={
                                        selectedTemplate === template.id
                                    }
                                    onClick={() =>
                                        setSelectedTemplate(template.id)
                                    }
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </aside>
    );
}