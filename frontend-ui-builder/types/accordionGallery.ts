export type AccordionGallerySettings = {
    expandedFlex: number;
    gap: number;
    borderRadius: number;
    overlayOpacity: number;
    trigger: "hover" | "click";
    animationSpeed: number;
};

export const defaultAccordionGallerySettings: AccordionGallerySettings = {
    expandedFlex: 5,
    gap: 16,
    borderRadius: 24,
    overlayOpacity: 0.8,
    trigger: "hover",
    animationSpeed: 500,
};