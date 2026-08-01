"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

                <div className="mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-medium text-blue-400 backdrop-blur-md transition hover:scale-105">
                    ✨ New • Visual Frontend UI Builder
                </div>

                <div className="relative">

                    <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

                    <h1 className="relative max-w-6xl text-6xl font-black leading-tight md:text-7xl xl:text-8xl">
                        Build Beautiful

                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                            Frontend Components
                        </span>

                        Visually.
                    </h1>

                </div>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
                    Create responsive carousels, galleries, sliders and UI
                    components with a modern visual editor. Export clean
                    HTML, CSS and JavaScript instantly.
                </p>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

                    <Link
                        href="/editor"
                        className="group relative overflow-hidden rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(59,130,246,.45)]"
                    >
                        <span className="relative z-10">
                            🚀 Start Building
                        </span>

                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                    </Link>

                    <Link
                        href="/templates"
                        className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-8 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800"
                    >
                        Browse Templates
                    </Link>

                </div>

                <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">

                    <span>⚡ Live Preview</span>

                    <span>🎨 Visual Builder</span>

                    <span>📦 Export HTML/CSS/JS</span>

                    <span>📱 Responsive</span>

                </div>

            </div>
        </section>
    );
}