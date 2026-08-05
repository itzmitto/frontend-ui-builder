export type AnimationType =
    | "none"
    | "fade"
    | "slide-left"
    | "slide-right"
    | "zoom"
    | "flip"
    | "rotate";

export const animationOptions = [
    {
        value: "none",
        label: "None",
    },
    {
        value: "fade",
        label: "Fade",
    },
    {
        value: "slide-left",
        label: "Slide Left",
    },
    {
        value: "slide-right",
        label: "Slide Right",
    },
    {
        value: "zoom",
        label: "Zoom",
    },
    {
        value: "flip",
        label: "Flip",
    },
    {
        value: "rotate",
        label: "Rotate",
    },
];  