"use client";

export default function HistoryPanel() {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

            <h2 className="mb-4 text-lg font-semibold">
                History
            </h2>

            <div className="grid grid-cols-2 gap-3">

                <button
                    className="rounded-lg border border-zinc-700 bg-zinc-800 py-2 transition hover:bg-zinc-700"
                >
                    ↶ Undo
                </button>

                <button
                    className="rounded-lg border border-zinc-700 bg-zinc-800 py-2 transition hover:bg-zinc-700"
                >
                    ↷ Redo
                </button>

            </div>

            <div className="mt-5 rounded-lg border border-dashed border-zinc-700 p-5 text-center text-sm text-zinc-500">
                History timeline coming soon.
            </div>

        </div>
    );
}