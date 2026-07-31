"use client";

import FilmStripPreview from "@/components/templates/previews/FilmStripPreview";
import { Template } from "@/types/template";

type Props = {
    id: Template;
    name: string;
    selected: boolean;
    onClick: () => void;
};

export default function TemplateCard({
    id,
    name,
    selected,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
                selected
                    ? "border-blue-500 bg-zinc-800 shadow-lg shadow-blue-500/20"
                    : "border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:-translate-y-1"
            }`}
        >
            <div className="aspect-square overflow-hidden p-3">
                {id === "film-strip" ? (
                    <FilmStripPreview />
                ) : (
                    <div className="flex h-full items-center justify-center rounded-lg bg-zinc-800 text-3xl">
                        🚧
                    </div>
                )}
            </div>

            <div className="border-t border-zinc-800 p-3">
                <p className="truncate text-center text-sm font-medium text-white">
                    {name}
                </p>
            </div>
        </button>
    );
}