"use client";

import EditorWindow from "./editor-mockup/EditorWindow";

export default function EditorMockup() {
    return (
        <section className="relative px-6 pb-24">
            <div className="mx-auto max-w-7xl">

                <EditorWindow>

                    <div className="flex h-[650px] items-center justify-center">

                        <h2 className="text-4xl font-bold text-zinc-700">
                            Interactive Editor Preview
                        </h2>

                    </div>

                </EditorWindow>

            </div>
        </section>
    );
}