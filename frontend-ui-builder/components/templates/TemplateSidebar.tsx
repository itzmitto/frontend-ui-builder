"use client";

import { templateCategories } from "@/data/templates";
import TemplateCard from "./TemplateCard";

export default function TemplateSidebar() {
    return (
        <aside className="w-80 overflow-y-auto border-r border-zinc-800 bg-zinc-950">
            <div className="border-b border-zinc-800 p-5">
                <h2 className="text-xl font-bold text-white">
                    Templates
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                    Choose a carousel template.
                </p>
            </div>

            <div className="space-y-8 p-5">
                {templateCategories.map((category) => (
                    <section key={category.title}>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            {category.title}
                        </h3>

                        <div className="space-y-4">
                            {category.templates.map((template) => (
                                <TemplateCard
                                    key={template.id}
                                    id={template.id}
                                    title={template.name}
                                    description={template.description}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </aside>
    );
}