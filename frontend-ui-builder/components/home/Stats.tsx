"use client";

const stats = [
    {
        value: "6+",
        label: "Templates",
    },
    {
        value: "100%",
        label: "Responsive",
    },
    {
        value: "1 Click",
        label: "Export",
    },
    {
        value: "HTML • CSS • JS",
        label: "Clean Code",
    },
];

export default function Stats() {
    return (
        <section className="px-6 py-28">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                        >
                            <h3 className="text-5xl font-black text-blue-500">
                                {stat.value}
                            </h3>

                            <p className="mt-3 text-zinc-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">

                    <p className="mx-auto max-w-3xl text-2xl italic leading-10 text-zinc-300">
                        "Build modern frontend components visually and export clean production-ready code in seconds."
                    </p>

                    <div className="mt-8">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
                            F
                        </div>

                        <h4 className="mt-4 text-lg font-semibold text-white">
                            Frontend UI Builder
                        </h4>

                        <p className="text-zinc-500">
                            Visual Component Builder
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}