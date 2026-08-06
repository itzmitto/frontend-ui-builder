"use client";

import { useEffect } from "react";

import useDrag from "./useDrag";
import useSwipe from "./useSwipe";

type UseCarouselEngineProps = {
    autoplay: boolean;
    infinite: boolean;
    speed: number;
    slideCount: number;
    selectedSlide: number;
    setSelectedSlide: React.Dispatch<React.SetStateAction<number>>;
};

export default function useCarouselEngine({
    autoplay,
    infinite,
    speed,
    slideCount,
    selectedSlide,
    setSelectedSlide,
}: UseCarouselEngineProps) {
    const nextSlide = () => {
        setSelectedSlide((previous) =>
            previous === slideCount - 1
                ? infinite
                    ? 0
                    : previous
                : previous + 1
        );
    };

    const previousSlide = () => {
        setSelectedSlide((previous) =>
            previous === 0
                ? infinite
                    ? slideCount - 1
                    : 0
                : previous - 1
        );
    };

    const goToSlide = (index: number) => {
        if (index < 0 || index >= slideCount) {
            return;
        }

        setSelectedSlide(index);
    };

    const swipe = useSwipe(
        previousSlide,
        nextSlide
    );

    const drag = useDrag(
        previousSlide,
        nextSlide
    );

    useEffect(() => {
        if (!autoplay || slideCount <= 1) {
            return;
        }

        const interval = setInterval(() => {
            nextSlide();
        }, speed);

        return () => clearInterval(interval);
    }, [
        autoplay,
        speed,
        infinite,
        slideCount,
    ]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                nextSlide();
            }

            if (event.key === "ArrowLeft") {
                previousSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        slideCount,
        infinite,
    ]);

    return {
        selectedSlide,
        nextSlide,
        previousSlide,
        goToSlide,
        swipe,
        drag,
    };
}