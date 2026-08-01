"use client";

export default function CoverFlowPreview() {
    return (
        <div className="flex h-28 items-center justify-center overflow-hidden rounded-lg bg-zinc-900">
            <div className="-mr-3 h-14 w-10 rotate-[-25deg] rounded bg-purple-500 opacity-60" />

            <div className="z-10 h-20 w-14 rounded bg-purple-400 shadow-xl" />

            <div className="-ml-3 h-14 w-10 rotate-[25deg] rounded bg-purple-500 opacity-60" />
        </div>
    );
}