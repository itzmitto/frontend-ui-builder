"use client";

import Image from "next/image";
import { useCarousel } from "@/context/CarouselContext";

export default function CoverFlow() {
    const {
        slides,
        selectedSlide,
        setSelectedSlide,
        settings,
    } = useCarousel();

    if (slides.length === 0) {
        return (
            <section className="flex flex-1 items-center justify-center bg-zinc-950">
                <p className="text-zinc-400">
                    No slides available.
                </p>
            </section>
        );
    }

    return (
        <section className="flex flex-1 items-center justify-center bg-zinc-950 p-10">
            <div
                className="relative flex h-full w-full items-center justify-center overflow-hidden"
                style={{
                    perspective: "1800px",
                }}
            >
                {slides.map((slide, index) => {
                    const offset = index - selectedSlide;

                    if (Math.abs(offset) > 2) {
                        return null;
                    }

                    let transform = "";
                    let opacity = 1;
                    let scale = 1;
                    const zIndex = 100 - Math.abs(offset);

                    switch (offset) {
                        case -2:
                            transform = "translateX(-360px) rotateY(60deg)";
                            scale = 0.7;
                            opacity = 0.2;
                            break;

                        case -1:
                            transform = "translateX(-180px) rotateY(50deg)";
                            scale = 0.85;
                            opacity = 0.55;
                            break;

                        case 0:
                            transform = "translateX(0px) rotateY(0deg)";
                            scale = 1;
                            opacity = 1;
                            break;

                        case 1:
                            transform = "translateX(180px) rotateY(-50deg)";
                            scale = 0.85;
                            opacity = 0.55;
                            break;   

                        case 2:
                            transform = "translateX(360px) rotateY(-60deg)";
                            scale = 0.7;
                            opacity = 0.2;
                            break;

                        default:
                            break;
                    }

                    return (
                        <button
                            key={slide.id}
                            onClick={() => setSelectedSlide(index)}
                            className="absolute transition-all duration-500 ease-out"
                            style={{
                                transform: `${transform} scale(${scale})`,
                                opacity,
                                zIndex,
                            }}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={settings.width}
                                height={settings.height}
                                className="rounded-2xl object-cover shadow-2xl"
                            />
                        </button>
                    );
                })}
            </div>
        </section>
    );
}