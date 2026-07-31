import { Template } from "@/types/template";

export type TemplateCategory = {
    title: string;
    templates: {
        id: Template;
        name: string;
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
                image: "/templates/img1.png",
            },
            {
                id: "cover-flow",
                name: "Cover Flow",
                image: "/templates/img1.png",
            },
            {
                id: "cards",
                name: "Cards",
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
                image: "/templates/img1.png",
            },
            {
                id: "hero-slider",
                name: "Hero Slider",
                image: "/templates/img1.png",
            },
        ],
    },
];