"use client";

import { useState } from "react";

export default function useHistory<T>(initialState: T) {
    const [past, setPast] = useState<T[]>([]);
    const [present, setPresent] = useState(initialState);
    const [future, setFuture] = useState<T[]>([]);

    const set = (newState: T) => {
        setPast((previous) => [...previous, present]);
        setPresent(newState);
        setFuture([]);
    };

    const undo = () => {
        if (past.length === 0) return;

        const previous = past[past.length - 1];

        setPast((p) => p.slice(0, -1));

        setFuture((f) => [present, ...f]);

        setPresent(previous);
    };

    const redo = () => {
        if (future.length === 0) return;

        const next = future[0];

        setFuture((f) => f.slice(1));

        setPast((p) => [...p, present]);

        setPresent(next);
    };

    return {
        state: present,
        set,
        undo,
        redo,
        canUndo: past.length > 0,
        canRedo: future.length > 0,
    };
}