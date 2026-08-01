"use client";

import Image from "next/image";

export default function EditorMockup() {
    return (
        <section className="relative px-6 pb-24">
            <div className="mx-auto max-w-7xl">

                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

                    <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">

                        <div className="h-3 w-3 rounded-full bg-red-500" />

                        <div className="h-3 w-3 rounded-full bg-yellow-500" />

                        <div className="h-3 w-3 rounded-full bg-green-500" />

                        <div className="ml-6 rounded-lg bg-zinc-800 px-4 py-1 text-sm text-zinc-400">
                            Frontend UI Builder
                        </div>

                    </div>

                    <div className="relative aspect-video">

                        <Image
                            src="/editor-preview.png"
                            alt="Frontend UI Builder"
                            fill
                            className="object-cover"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}