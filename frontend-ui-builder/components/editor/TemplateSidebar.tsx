"use client";

import { templateCategories } from "@/data/templates";
import { useCarousel } from "@/context/CarouselContext";
import TemplateCard from "./TemplateCard";

export default function TemplateSidebar() {
    const {
        selectedTemplate,
        setSelectedTemplate,
    } = useCarousel();

    return (
        <aside className="w-72 overflow-y-auto border-r border-zinc-800 bg-zinc-950">
            <div className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950 p-5">
                <h2 className="text-xl font-bold">
                    Templates
                </h2>
            </div>

            <div className="space-y-8 p-4">
                {templateCategories.map((category) => (
                    <section key={category.title}>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                            {category.templates.map((template) => (
                                <TemplateCard
                                    key={template.id}
                                    id={template.id}
                                    name={template.name}
                                    image={template.image}
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