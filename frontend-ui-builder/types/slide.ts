import { AnimationType } from "./animation";

export type Slide = {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
    animation: AnimationType;
    duration: number;
    delay: number;
};