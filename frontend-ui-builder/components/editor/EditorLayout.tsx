"use client";

import TemplateSidebar from "./TemplateSidebar";
import PropertyPanel from "./PropertyPanel";
import Toolbar from "./Toolbar";
import TemplateRenderer from "@/components/templates/renderer/TemplateRenderer";
import LayersPanel from "./LayersPanel";

export default function EditorLayout() {
    return (
        <div className="flex h-[calc(100vh-64px)]">
            <TemplateSidebar />

            <main className="flex flex-1 flex-col">
                <Toolbar />

                <TemplateRenderer />
            </main>

            <div className="flex w-96 flex-col border-l border-zinc-800 bg-zinc-950">

                <div className="flex-1 overflow-y-auto">
                    <PropertyPanel />
                </div>

                <div className="border-t border-zinc-800 p-4">
                    <LayersPanel />
                </div>

            </div>
        </div>
    );
}