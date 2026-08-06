"use client";

import { useRef } from "react";

export default function useSwipe(
    onPrevious: () => void,
    onNext: () => void
) {
    const startX = useRef(0);

    const onTouchStart = (
        e: React.TouchEvent
    ) => {
        startX.current =
            e.touches[0].clientX;
    };

    const onTouchEnd = (
        e: React.TouchEvent
    ) => {
        const diff =
            startX.current -
            e.changedTouches[0].clientX;

        if (Math.abs(diff) < 60) return;

        if (diff > 0) {
            onNext();
        } else {
            onPrevious();
        }
    };

    return {
        onTouchStart,
        onTouchEnd,
    };
}