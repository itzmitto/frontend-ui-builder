"use client";

type Props = {
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
};

export default function HistoryButtons({
    undo,
    redo,
    canUndo,
    canRedo,
}: Props) {
    return (
        <div className="flex gap-2">

            <button
                onClick={undo}
                disabled={!canUndo}
                className="rounded-lg bg-zinc-800 px-4 py-2 disabled:opacity-40"
            >
                Undo
            </button>

            <button
                onClick={redo}
                disabled={!canRedo}
                className="rounded-lg bg-zinc-800 px-4 py-2 disabled:opacity-40"
            >
                Redo
            </button>

        </div>
    );
}