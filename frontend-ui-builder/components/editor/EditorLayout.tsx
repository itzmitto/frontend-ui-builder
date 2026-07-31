"use client";

import PropertyPanel from "./PropertyPanel";
import Preview from "./Preview";
import CodePanel from "./CodePanel";
import Toolbar from "./Toolbar";

export default function EditorLayout() {
    return (
        <div className="flex h-[calc(100vh-64px)]">
            <PropertyPanel />

            <main className="flex flex-1 flex-col">
                <Toolbar />

                <Preview />
            </main>

            <CodePanel />
        </div>
    );
}