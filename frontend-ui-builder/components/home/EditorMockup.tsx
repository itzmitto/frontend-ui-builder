"use client";

import Image from "next/image";

export default function EditorMockup() {
    return (
        <section className="relative px-6 pb-24">
            <div className="mx-auto max-w-7xl">

                <div className="animate-float-slow relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

                    <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/90 px-6 py-4 backdrop-blur-xl">

                        <div className="h-3 w-3 rounded-full bg-red-500" />

                        <div className="h-3 w-3 rounded-full bg-yellow-500" />

                        <div className="h-3 w-3 rounded-full bg-green-500" />

                        <div className="ml-6 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-1 text-sm text-zinc-400">
                            Frontend UI Builder
                        </div>

                    </div>

                    <div className="relative aspect-video overflow-hidden">

                        <Image
                            src="/editor-preview.png"
                            alt="Frontend UI Builder"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    </div>

                </div>

            </div>
        </section>
    );
}