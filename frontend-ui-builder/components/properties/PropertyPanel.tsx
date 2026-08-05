"use client";

import PropertyRenderer from "./PropertyRenderer";

export default function PropertyPanel() {
    return (
        <aside className="h-full overflow-y-auto">
            <div className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950 p-5">
                <h1 className="text-2xl font-bold">
                    Inspector
                </h1>
                <p className="mt-1 text-sm text-zinc-400">
                    Edit the selected template and slide.
                </p>
            </div>
            <div className="space-y-4 p-5">
                <PropertyRenderer />
            </div>
        </aside>
    );
}