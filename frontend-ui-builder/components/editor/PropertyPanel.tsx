"use client";

import SlidesSection from "./sections/SlidesSection";
import SlideEditor from "./SlideEditor";
import LayoutSection from "./sections/LayoutSection";
import AppearanceSection from "./sections/AppearanceSection";
import BehaviorSection from "./sections/BehaviorSection";

export default function PropertyPanel() {
    return (
        <aside className="w-80 border-r border-zinc-800 bg-zinc-900">
            <div className="border-b border-zinc-800 p-5">
                <h2 className="text-xl font-bold">
                    Properties
                </h2>
            </div>

            <div className="space-y-8 p-5">
                <SlidesSection />
                <SlideEditor />
                <LayoutSection />
                <AppearanceSection />
                <BehaviorSection />
            </div>
        </aside>
    );
}