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

type CarouselContextType = {
  settings: CarouselSettings;
  setSettings: React.Dispatch<React.SetStateAction<CarouselSettings>>;

  slides: Slide[];
  setSlides: React.Dispatch<React.SetStateAction<Slide[]>>;

  selectedSlide: number;
  setSelectedSlide: React.Dispatch<React.SetStateAction<number>>;
};

const CarouselContext = createContext<CarouselContextType | null>(null);

export function CarouselProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [settings, setSettings] = useState(defaultCarouselSettings);

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

  return (
    <CarouselContext.Provider
      value={{
        settings,
        setSettings,
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used inside CarouselProvider");
  }

  return context;
}