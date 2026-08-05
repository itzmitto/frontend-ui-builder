export type Theme = {
    id: string;
    name: string;
    primary: string;
    background: string;
    surface: string;
};

export const themes: Theme[] = [
    {
        id: "dark",
        name: "Dark",
        primary: "#3b82f6",
        background: "#09090b",
        surface: "#18181b",
    },
    {
        id: "light",
        name: "Light",
        primary: "#2563eb",
        background: "#ffffff",
        surface: "#f4f4f5",
    },
    {
        id: "purple",
        name: "Purple",
        primary: "#8b5cf6",
        background: "#140c24",
        surface: "#24173b",
    },
    {
        id: "emerald",
        name: "Emerald",
        primary: "#10b981",
        background: "#081b16",
        surface: "#132c26",
    },
];