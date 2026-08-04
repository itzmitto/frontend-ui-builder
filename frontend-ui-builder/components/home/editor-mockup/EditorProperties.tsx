"use client";

const properties = [
    {
        name: "Width",
        value: "800px",
    },
    {
        name: "Height",
        value: "500px",
    },
    {
        name: "Gap",
        value: "20px",
    },
    {
        name: "Border Radius",
        value: "24px",
    },
    {
        name: "Autoplay",
        value: "Enabled",
    },
];

export default function EditorProperties() {
    return (
        <aside className="w-72 border-l border-zinc-800 bg-zinc-950/60 p-5">

            <h3 className="mb-5 text-lg font-semibold text-white">
                Properties
            </h3>

            <div className="space-y-4">

                {properties.map((property) => (
                    <div
                        key={property.name}
                        className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
                    >
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                            {property.name}
                        </p>

                        <p className="mt-2 font-medium text-white">
                            {property.value}
                        </p>
                    </div>
                ))}

            </div>

        </aside>
    );
}