"use client";

import {
    DndContext,
    closestCenter,
    DragEndEvent,
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from "@dnd-kit/sortable";

import { useCarousel } from "@/context/CarouselContext";
import SortableSlide from "./SortableSlide";

export default function SlidesSection() {
    const {
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = slides.findIndex(
            (slide) => slide.id === active.id
        );

        const newIndex = slides.findIndex(
            (slide) => slide.id === over.id
        );

        const reorderedSlides = arrayMove(
            slides,
            oldIndex,
            newIndex
        );

        setSlides(reorderedSlides);

        if (selectedSlide === oldIndex) {
            setSelectedSlide(newIndex);
        } else if (
            selectedSlide > oldIndex &&
            selectedSlide <= newIndex
        ) {
            setSelectedSlide(selectedSlide - 1);
        } else if (
            selectedSlide < oldIndex &&
            selectedSlide >= newIndex
        ) {
            setSelectedSlide(selectedSlide + 1);
        }
    }

    return (
        <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
                Slides
            </h2>

            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={slides.map((slide) => slide.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="space-y-2">
                        {slides.map((slide, index) => (
                            <SortableSlide
                                key={slide.id}
                                slide={slide}
                                index={index}
                                selected={selectedSlide === index}
                                onSelect={() =>
                                    setSelectedSlide(index)
                                }
                                onDuplicate={() => {
                                    const duplicatedSlide = {
                                        ...slide,
                                        id: Date.now(),
                                        title: `${slide.title} Copy`,
                                    };

                                    const updatedSlides = [...slides];
                                    updatedSlides.splice(
                                        index + 1,
                                        0,
                                        duplicatedSlide
                                    );

                                    setSlides(updatedSlides);
                                    setSelectedSlide(index + 1);
                                }}
                                onDelete={() => {
                                    if (slides.length <= 1) return;

                                    const updatedSlides = slides.filter(
                                        (_, i) => i !== index
                                    );

                                    setSlides(updatedSlides);

                                    if (selectedSlide >= updatedSlides.length) {
                                        setSelectedSlide(updatedSlides.length - 1);
                                    } else if (selectedSlide === index) {
                                        setSelectedSlide(
                                            Math.max(0, index - 1)
                                        );
                                    }
                                }}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
}