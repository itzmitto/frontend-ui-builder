"use client";

import Link from "next/link";

const productLinks = [
    {
        title: "Editor",
        href: "/editor",
    },
    {
        title: "Templates",
        href: "/templates",
    },
    {
        title: "Documentation",
        href: "/docs",
    },
];

const resourceLinks = [
    {
        title: "GitHub",
        href: "#",
    },
    {
        title: "Roadmap",
        href: "#",
    },
    {
        title: "Contact",
        href: "#",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-[#09090b]">
            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-12 md:grid-cols-3">

                    <div>

                        <h2 className="text-2xl font-bold text-white">
                            Frontend UI Builder
                        </h2>

                        <p className="mt-5 max-w-sm leading-7 text-zinc-400">
                            Design beautiful frontend components visually
                            and export clean HTML, CSS and JavaScript in
                            seconds.
                        </p>

                    </div>

                    <div>

                        <h3 className="mb-5 font-semibold text-white">
                            Product
                        </h3>

                        <div className="space-y-3">

                            {productLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="block text-zinc-400 transition hover:text-white"
                                >
                                    {link.title}
                                </Link>
                            ))}

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-5 font-semibold text-white">
                            Resources
                        </h3>

                        <div className="space-y-3">

                            {resourceLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="block text-zinc-400 transition hover:text-white"
                                >
                                    {link.title}
                                </Link>
                            ))}

                        </div>

                    </div>

                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">

                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} Frontend UI Builder.
                        All rights reserved.
                    </p>

                    <p className="text-sm text-zinc-500">
                        Built with Next.js, React & Tailwind CSS
                    </p>

                </div>

            </div>
        </footer>
    );
}