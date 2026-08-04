"use client";

import EditorWindow from "./editor-mockup/EditorWindow";
import EditorSidebar from "./editor-mockup/EditorSidebar";
import EditorProperties from "./editor-mockup/EditorProperties";
import EditorPreview from "./editor-mockup/EditorPreview";

export default function EditorMockup() {
    return (
        <section className="relative px-6 pb-24">
            <div className="mx-auto max-w-7xl">

                <EditorWindow>

                    <div className="flex h-[650px]">

                        <EditorSidebar />

                      <EditorPreview />

                        <EditorProperties />

                    </div>

                </EditorWindow>

            </div>
        </section>
    );
}