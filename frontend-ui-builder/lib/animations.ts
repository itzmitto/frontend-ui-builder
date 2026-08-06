import { Slide } from "@/types/slide";

export function getAnimationStyle(slide: Slide) {
    switch (slide.animation) {
        case "fade":
            return {
                animation: `fadeIn ${slide.duration}ms ease ${slide.delay}ms both`,
            };

        case "slide-left":
            return {
                animation: `slideLeft ${slide.duration}ms ease ${slide.delay}ms both`,
            };

        case "slide-right":
            return {
                animation: `slideRight ${slide.duration}ms ease ${slide.delay}ms both`,
            };

        case "zoom":
            return {
                animation: `zoomIn ${slide.duration}ms ease ${slide.delay}ms both`,
            };

        case "rotate":
            return {
                animation: `rotateIn ${slide.duration}ms ease ${slide.delay}ms both`,
            };

        case "flip":
            return {
                animation: `flipIn ${slide.duration}ms ease ${slide.delay}ms both`,
            };

        default:
            return {};
    }
}