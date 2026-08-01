"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

                <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
                    ✨ Build responsive carousels visually
                </div>

                <h1 className="max-w-5xl text-6xl font-extrabold leading-tight text-white">
                    Design beautiful
                    <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Frontend Components
                    </span>
                    without writing code.
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                    Create stunning carousels, galleries, hero sliders,
                    cover flows and more with a visual editor.
                    Export clean HTML, CSS and JavaScript in one click.
                </p>

                <div className="mt-10 flex gap-5">

                    <Link
                        href="/editor"
                        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
                    >
                        Start Building
                    </Link>

                    <Link
                        href="/templates"
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold transition hover:border-zinc-500"
                    >
                        Browse Templates
                    </Link>

                </div>

            </div>
        </section>
    );
}