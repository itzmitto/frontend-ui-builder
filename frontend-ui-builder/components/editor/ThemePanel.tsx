"use client";

import { themes } from "@/types/theme";
import { useTheme } from "@/context/ThemeContext";

export default function ThemePanel() {
    const {
        theme,
        setTheme,
    } = useTheme();

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

            <h2 className="mb-4 text-lg font-semibold">
                Theme
            </h2>

            <div className="space-y-3">

                {themes.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setTheme(item)}
                        className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 transition ${
                            theme.id === item.id
                                ? "border-blue-500 bg-blue-500/10"
                                : "border-zinc-700 hover:border-zinc-500"
                        }`}
                    >
                        <span>{item.name}</span>

                        <div
                            className="h-5 w-5 rounded-full border"
                            style={{
                                background: item.primary,
                            }}
                        />

                    </button>
                ))}

            </div>

        </div>
    );
}