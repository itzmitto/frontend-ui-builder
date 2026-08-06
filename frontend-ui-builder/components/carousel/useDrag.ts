"use client";

import { useRef } from "react";

export default function useDrag(
    onPrevious: () => void,
    onNext: () => void
) {
    const startX = useRef(0);

    const dragging = useRef(false);

    const onMouseDown = (
        e: React.MouseEvent
    ) => {
        dragging.current = true;

        startX.current = e.clientX;
    };

    const onMouseUp = (
        e: React.MouseEvent
    ) => {
        if (!dragging.current) return;

        dragging.current = false;

        const diff =
            startX.current - e.clientX;

        if (Math.abs(diff) < 80) return;

        if (diff > 0) {
            onNext();
        } else {
            onPrevious();
        }
    };

    return {
        onMouseDown,
        onMouseUp,
    };
}