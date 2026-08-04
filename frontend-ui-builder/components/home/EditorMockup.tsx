"use client";

import EditorWindow from "./editor-mockup/EditorWindow";
import EditorSidebar from "./editor-mockup/EditorSidebar";
import EditorProperties from "./editor-mockup/EditorProperties";

export default function EditorMockup() {
    return (
        <section className="relative px-6 pb-24">
            <div className="mx-auto max-w-7xl">

                <EditorWindow>

                    <div className="flex h-[650px]">

                        <EditorSidebar />

                        <div className="flex flex-1 items-center justify-center border-x border-zinc-800 bg-zinc-950/30">

                            <h2 className="text-4xl font-bold text-zinc-700">
                                Live Preview
                            </h2>

                        </div>

                        <EditorProperties />

                    </div>

                </EditorWindow>

            </div>
        </section>
    );
}