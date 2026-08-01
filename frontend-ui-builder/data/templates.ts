import { Template } from "@/types/template";

export type TemplateCategory = {
    title: string;
    templates: {
        id: Template;
        name: string;
        description: string;
        image: string;
    }[];
};

export const templateCategories: TemplateCategory[] = [
    {
        title: "Carousel",
        templates: [
            {
                id: "film-strip",
                name: "Film Strip",
                description: "Classic horizontal carousel",
                image: "/templates/img1.png",
            },
            {
                id: "cover-flow",
                name: "Cover Flow",
                description: "3D centered carousel",
                image: "/templates/img1.png",
            },
            {
                id: "cards",
                name: "Cards",
                description: "Stacked card carousel",
                image: "/templates/img1.png",
            },
        ],
    },
    {
        title: "Orbit",
        templates: [
            {
                id: "orbit",
                name: "Orbit",
                description: "Circular rotating slider",
                image: "/templates/img1.png",
            },
        ],
    },
    {
        title: "Gallery",
        templates: [
            {
                id: "gallery",
                name: "Gallery",
                description: "Responsive image gallery",
                image: "/templates/img1.png",
            },
            {
                id: "hero-slider",
                name: "Hero Slider",
                description: "Fullscreen hero carousel",
                image: "/templates/img1.png",
            },
        ],
    },
];