"use client";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;

    offsetX?: number;

    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;

    onMouseMove?: React.MouseEventHandler<HTMLDivElement>;

    onMouseUp?: React.MouseEventHandler<HTMLDivElement>;

    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;

    onTouchStart?: React.TouchEventHandler<HTMLDivElement>;

    onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
};

export default function CarouselFrame({
    children,

    offsetX = 0,

    onMouseDown,

    onMouseMove,

    onMouseUp,

    onMouseLeave,

    onTouchStart,

    onTouchEnd,
}: Props) {
    return (
        <div
            className="relative select-none overflow-hidden"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
                cursor: "grab",
            }}
        >
            <div
                style={{
                    transform: `translateX(${offsetX}px)`,
                    transition:
                        offsetX === 0
                            ? "transform .25s ease"
                            : "none",
                }}
            >
                {children}
            </div>
        </div>
    );
}