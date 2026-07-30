"use client";

import { createContext, useContext, useState } from "react";
import {
  CarouselSettings,
  defaultCarouselSettings,
} from "@/lib/carousel";

type CarouselContextType = {
  settings: CarouselSettings;
  setSettings: React.Dispatch<React.SetStateAction<CarouselSettings>>;
};

const CarouselContext = createContext<CarouselContextType | null>(null);

export function CarouselProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState(defaultCarouselSettings);

  return (
    <CarouselContext.Provider
      value={{
        settings,
        setSettings,
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