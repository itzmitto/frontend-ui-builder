"use client";

const steps = [
    {
        number: "01",
        title: "Choose a Template",
        description:
            "Start with Film Strip, Cover Flow, Gallery or another professionally designed template.",
    },
    {
        number: "02",
        title: "Customize",
        description:
            "Adjust layout, spacing, animations, images and responsive settings in the visual editor.",
    },
    {
        number: "03",
        title: "Preview Live",
        description:
            "Instantly see every change on desktop, tablet and mobile without refreshing.",
    },
    {
        number: "04",
        title: "Export",
        description:
            "Download clean HTML, CSS and JavaScript files ready for your own projects.",
    },
];

export default function HowItWorks() {
    return (
        <section className="px-6 py-28">
            <div className="mx-auto max-w-7xl">

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <h2 className="text-5xl font-bold text-white">
                        How it works
                    </h2>

                    <p className="mt-6 text-lg text-zinc-400">
                        From idea to production-ready code in just a few steps.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-4">

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
                        >
                            <span className="text-5xl font-black text-blue-500/20">
                                {step.number}
                            </span>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                                {step.title}
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400">
                                {step.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}