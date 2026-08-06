"use client";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;

    onMouseDown?: any;
    onMouseUp?: any;

    onTouchStart?: any;
    onTouchEnd?: any;
};

export default function CarouselFrame({
    children,
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd,
}: Props) {
    return (
        <div
            className="relative select-none"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {children}
        </div>
    );
}