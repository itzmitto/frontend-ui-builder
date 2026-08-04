"use client";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function EditorWindow({
    children,
}: Props) {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

            <div className="relative flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-6 backdrop-blur-xl">

                <div className="flex items-center gap-2">

                    <div className="h-3 w-3 rounded-full bg-red-500" />

                    <div className="h-3 w-3 rounded-full bg-yellow-500" />

                    <div className="h-3 w-3 rounded-full bg-green-500" />

                    <span className="ml-4 text-sm font-medium text-zinc-400">
                        Frontend UI Builder
                    </span>

                </div>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold transition hover:bg-blue-500">
                    Export ZIP
                </button>

            </div>

            {children}

        </div>
    );
}