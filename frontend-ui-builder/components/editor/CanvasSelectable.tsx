"use client";

import { ReactNode } from "react";

import { SelectedElement } from "@/types/selectedElement";
import { useEditor } from "@/context/EditorContext";

type Props = {
    element: SelectedElement;

    children: ReactNode;
};

export default function CanvasSelectable({
    element,
    children,
}: Props) {
    const {
        selectedElement,
        setSelectedElement,
    } = useEditor();

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();

                setSelectedElement(element);
            }}
            className={`rounded transition-all ${
                selectedElement === element
                    ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-zinc-900"
                    : "hover:ring-2 hover:ring-zinc-600"
            }`}
        >
            {children}
        </div>
    );
}