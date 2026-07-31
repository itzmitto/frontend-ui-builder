"use client";

import TemplateSidebar from "./TemplateSidebar";
import PropertyPanel from "./PropertyPanel";
import Preview from "./FilmStrip";
import Toolbar from "./Toolbar";
import TemplateRenderer from "@/components/templates/renderer/TemplateRenderer";

export default function EditorLayout() {
    return (
        <div className="flex h-[calc(100vh-64px)]">
            <TemplateSidebar />

            <main className="flex flex-1 flex-col">
                <Toolbar />

                <TemplateRenderer />
            </main>

            <PropertyPanel />
        </div>
    );
}