"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

import {
    CarouselSettings,
    defaultCarouselSettings,
} from "@/lib/carousel";

import { Slide } from "@/types/slide";
import { Media } from "@/types/media";
import { Device } from "@/types/device";
import { Template } from "@/types/template";

type CarouselContextType = {
    settings: CarouselSettings;
    setSettings: React.Dispatch<React.SetStateAction<CarouselSettings>>;

    slides: Slide[];
    setSlides: React.Dispatch<React.SetStateAction<Slide[]>>;

    selectedSlide: number;
    setSelectedSlide: React.Dispatch<React.SetStateAction<number>>;

    media: Media[];
    setMedia: React.Dispatch<React.SetStateAction<Media[]>>;

    device: Device;
    setDevice: React.Dispatch<React.SetStateAction<Device>>;

    selectedTemplate: Template;
    setSelectedTemplate: React.Dispatch<
        React.SetStateAction<Template>
    >;
};

const CarouselContext = createContext<CarouselContextType | null>(
    null
);

export function CarouselProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [settings, setSettings] = useState(
        defaultCarouselSettings
    );

    const [slides, setSlides] = useState<Slide[]>([
        {
            id: 1,
            title: "Mountain",
            image: "https://picsum.photos/800/500?random=1",
        },
        {
            id: 2,
            title: "Forest",
            image: "https://picsum.photos/800/500?random=2",
        },
        {
            id: 3,
            title: "Ocean",
            image: "https://picsum.photos/800/500?random=3",
        },
    ]);

    const [selectedSlide, setSelectedSlide] = useState(0);

    const [media, setMedia] = useState<Media[]>([]);

    const [device, setDevice] = useState<Device>("desktop");

    const [selectedTemplate, setSelectedTemplate] =
        useState<Template>("film-strip");

    return (
        <CarouselContext.Provider
            value={{
                settings,
                setSettings,
                slides,
                setSlides,
                selectedSlide,
                setSelectedSlide,
                media,
                setMedia,
                device,
                setDevice,
                selectedTemplate,
                setSelectedTemplate,
            }}
        >
            {children}
        </CarouselContext.Provider>
    );
}

export function useCarousel() {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error(
            "useCarousel must be used inside CarouselProvider"
        );
    }

    return context;
}