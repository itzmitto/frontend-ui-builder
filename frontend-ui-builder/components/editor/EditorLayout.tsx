"use client";

import TemplateSidebar from "./TemplateSidebar";
import PropertyPanel from "./PropertyPanel";
import Preview from "./Preview";
import Toolbar from "./Toolbar";

export default function EditorLayout() {
    return (
        <div className="flex h-[calc(100vh-64px)]">
            <TemplateSidebar />

            <main className="flex flex-1 flex-col">
                <Toolbar />

                <Preview />
            </main>

            <PropertyPanel />
        </div>
    );
}