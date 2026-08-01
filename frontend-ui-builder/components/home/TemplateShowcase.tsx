"use client";

import Link from "next/link";
import { templateCategories } from "@/data/templates";
import TemplateCard from "@/components/templates/TemplateCard";

export default function TemplateShowcase() {
    return (
        <section className="px-6 py-28">
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 text-center">

                    <h2 className="text-5xl font-bold text-white">
                        Choose a Template
                    </h2>

                    <p className="mt-5 text-lg text-zinc-400">
                        Start with professionally designed templates.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {templateCategories.flatMap((category) =>
                        category.templates.map((template) => (
                            <TemplateCard
                                key={template.id}
                                template={template}
                            />
                        ))
                    )}

                </div>

                <div className="mt-14 text-center">

                    <Link
                        href="/editor"
                        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
                    >
                        Open Builder
                    </Link>

                </div>

            </div>
        </section>
    );
}