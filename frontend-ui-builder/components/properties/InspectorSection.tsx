"use client";

import { ReactNode } from "react";

type InspectorSectionProps = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
};

export default function InspectorSection({
    title,
    children,
    defaultOpen = true,
}: InspectorSectionProps) {
    return (
        <details
            open={defaultOpen}
            className="rounded-xl border border-zinc-800 bg-zinc-900"
        >
            <summary className="cursor-pointer select-none px-5 py-4 text-sm font-semibold text-white">
                {title}
            </summary>

            <div className="border-t border-zinc-800 p-5">
                {children}
            </div>
        </details>
    );
}