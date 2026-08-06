"use client";

import { useRef, useState } from "react";

export default function useDrag(
    onPrevious: () => void,
    onNext: () => void
) {
    const startX = useRef(0);

    const dragging = useRef(false);

    const [offsetX, setOffsetX] = useState(0);

    const onMouseDown = (
        e: React.MouseEvent
    ) => {
        dragging.current = true;

        startX.current = e.clientX;

        setOffsetX(0);
    };

    const onMouseMove = (
        e: React.MouseEvent
    ) => {
        if (!dragging.current) return;

        setOffsetX(
            e.clientX - startX.current
        );
    };

    const onMouseUp = (
        e: React.MouseEvent
    ) => {
        if (!dragging.current) return;

        dragging.current = false;

        const diff =
            e.clientX - startX.current;

        if (diff > 80) {
            onPrevious();
        } else if (diff < -80) {
            onNext();
        }

        setOffsetX(0);
    };

    const onMouseLeave = () => {
        dragging.current = false;

        setOffsetX(0);
    };

    return {
        offsetX,
        dragging: dragging.current,

        onMouseDown,

        onMouseMove,

        onMouseUp,

        onMouseLeave,
    };
}