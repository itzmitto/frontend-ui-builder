"use client";

const templates = [
    "Film Strip",
    "Cover Flow",
    "Gallery",
    "Orbit",
    "Cards",
    "Hero Slider",
];

export default function EditorSidebar() {
    return (
        <aside className="w-64 border-r border-zinc-800 bg-zinc-950/60 p-5">

            <h3 className="mb-5 text-lg font-semibold text-white">
                Templates
            </h3>

            <div className="space-y-3">

                {templates.map((template, index) => (
                    <button
                        key={template}
                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                            index === 0
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        }`}
                    >
                        <div
                            className={`h-3 w-3 rounded-full ${
                                index === 0
                                    ? "bg-white"
                                    : "bg-zinc-600"
                            }`}
                        />

                        <span className="font-medium">
                            {template}
                        </span>
                    </button>
                ))}

            </div>

        </aside>
    );
}