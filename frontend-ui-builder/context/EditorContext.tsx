"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

import { SelectedElement } from "@/types/selectedElement";

type EditorContextType = {
    selectedElement: SelectedElement;

    setSelectedElement: React.Dispatch<
        React.SetStateAction<SelectedElement>
    >;
};

const EditorContext =
    createContext<EditorContextType | null>(null);

export function EditorProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [
        selectedElement,
        setSelectedElement,
    ] = useState<SelectedElement>(null);

    return (
        <EditorContext.Provider
            value={{
                selectedElement,
                setSelectedElement,
            }}
        >
            {children}
        </EditorContext.Provider>
    );
}

export function useEditor() {
    const context = useContext(EditorContext);

    if (!context) {
        throw new Error(
            "useEditor must be used inside EditorProvider"
        );
    }

    return context;
}