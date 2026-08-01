"use client";

export default function CoverFlowPreview() {
    return (
        <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg bg-zinc-900">

            <div className="flex animate-cover-flow items-center">

                <div className="-mr-3 h-14 w-10 rotate-[-30deg] rounded-lg bg-purple-600 opacity-60 shadow-md" />

                <div className="z-10 h-20 w-14 rounded-lg bg-purple-400 shadow-xl" />

                <div className="-ml-3 h-14 w-10 rotate-[30deg] rounded-lg bg-purple-600 opacity-60 shadow-md" />

            </div>

        </div>
    );
}