"use client";

import { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

export default function Section({
    title,
    children,
}: Props) {
    return (
        <section className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <h2 className="text-lg font-semibold text-white">
                {title}
            </h2>

            {children}
        </section>
    );
}