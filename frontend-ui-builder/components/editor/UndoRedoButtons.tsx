"use client";

import { useHistory } from "@/context/HistoryContext";

export default function UndoRedoButtons() {
    const {
        undo,
        redo,
    } = useHistory();

    return (
        <div className="flex gap-2">

            <button
                onClick={undo}
                className="rounded-lg bg-zinc-800 px-4 py-2 hover:bg-zinc-700"
            >
                Undo
            </button>

            <button
                onClick={redo}
                className="rounded-lg bg-zinc-800 px-4 py-2 hover:bg-zinc-700"
            >
                Redo
            </button>

        </div>
    );
}