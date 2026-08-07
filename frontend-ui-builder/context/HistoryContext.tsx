"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

type HistoryContextType = {
    undo: () => void;
    redo: () => void;
    saveState: (state: any) => void;
};

const HistoryContext =
    createContext<HistoryContextType | null>(null);

export function HistoryProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [history, setHistory] = useState<any[]>([]);
    const [future, setFuture] = useState<any[]>([]);

    const saveState = (state: any) => {
        setHistory((prev) => [
            ...prev,
            structuredClone(state),
        ]);

        setFuture([]);
    };

    const undo = () => {
        console.log("undo");
    };

    const redo = () => {
        console.log("redo");
    };

    return (
        <HistoryContext.Provider
            value={{
                undo,
                redo,
                saveState,
            }}
        >
            {children}
        </HistoryContext.Provider>
    );
}

export function useHistory() {
    const context =
        useContext(HistoryContext);

    if (!context) {
        throw new Error(
            "useHistory must be used inside HistoryProvider"
        );
    }

    return context;
}