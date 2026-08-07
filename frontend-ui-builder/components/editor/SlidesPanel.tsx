"use client";

import {
    DndContext,
    closestCenter,
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from "@dnd-kit/sortable";

import { useCarousel } from "@/context/CarouselContext";

import SortableSlideItem from "./SortableSlideItem";

export default function SlidesPanel() {
    const {
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (!over) return;

        if (active.id === over.id) return;

        const oldIndex = slides.findIndex(
            (slide) => slide.id === active.id
        );

        const newIndex = slides.findIndex(
            (slide) => slide.id === over.id
        );

        const updated = arrayMove(
            slides,
            oldIndex,
            newIndex
        );

        setSlides(updated);
        setSelectedSlide(newIndex);
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">

            <h2 className="mb-4 text-lg font-semibold">
                Slides
            </h2>

            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={slides.map(
                        (slide) => slide.id
                    )}
                    strategy={
                        verticalListSortingStrategy
                    }
                >
                    <div className="space-y-2">

                        {slides.map(
                            (slide, index) => (
                                <SortableSlideItem
                                    key={slide.id}
                                    id={slide.id}
                                    title={slide.title}
                                    selected={
                                        selectedSlide ===
                                        index
                                    }
                                    onClick={() =>
                                        setSelectedSlide(
                                            index
                                        )
                                    }
                                />
                            )
                        )}

                    </div>
                </SortableContext>
            </DndContext>

        </div>
    );
}