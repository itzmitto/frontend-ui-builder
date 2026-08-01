"use client";

import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: "⚡",
        title: "Live Preview",
        description:
            "Instantly preview every change while building your carousel.",
    },
    {
        icon: "🎨",
        title: "Visual Editor",
        description:
            "Customize templates visually without touching code.",
    },
    {
        icon: "📦",
        title: "Export",
        description:
            "Download clean HTML, CSS and JavaScript files.",
    },
    {
        icon: "📱",
        title: "Responsive",
        description:
            "Preview desktop, tablet and mobile layouts.",
    },
    {
        icon: "🖼️",
        title: "Media Library",
        description:
            "Upload, manage and reuse images across templates.",
    },
    {
        icon: "🧩",
        title: "Multiple Templates",
        description:
            "Film Strip, Cover Flow, Gallery, Orbit and many more.",
    },
];

export default function Features() {
    return (
        <section className="px-6 py-28">
            <div className="mx-auto max-w-7xl">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <h2 className="text-5xl font-bold text-white">
                        Everything you need
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Build beautiful frontend components with a modern visual builder designed for developers.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}