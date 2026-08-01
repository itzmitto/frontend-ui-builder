"use client";

import { useCarousel } from "@/context/CarouselContext";
import Image from "next/image";

export default function CoverFlow() {
    const {
        slides,
        selectedSlide,
        setSelectedSlide,
        settings,
    } = useCarousel();

    return (
        <section className="flex flex-1 items-center justify-center bg-zinc-950 p-10">
            <div className="flex items-center justify-center gap-4">

                {slides.map((slide, index) => {
                    const offset = index - selectedSlide;

                    let classes =
                        "transition-all duration-500 cursor-pointer";

                    if (offset === 0) {
                        classes +=
                            " scale-100 z-20 opacity-100";
                    } else if (offset < 0) {
                        classes +=
                            " -rotate-12 scale-90 opacity-60";
                    } else {
                        classes +=
                            " rotate-12 scale-90 opacity-60";
                    }

                    return (
                        <div
                            key={slide.id}
                            onClick={() => setSelectedSlide(index)}
                            className={classes}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={settings.width}
                                height={settings.height}
                                className="rounded-xl object-cover shadow-2xl"
                            />
                        </div>
                    );
                })}

            </div>
        </section>
    );
}