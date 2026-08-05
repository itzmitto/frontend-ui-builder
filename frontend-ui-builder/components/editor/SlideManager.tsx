"use client";

import {
    DndContext,
    DragEndEvent,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useCarousel } from "@/context/CarouselContext";
import SortableSlideItem from "./SortableSlideItem";

export default function SlideManager() {
    const {
        slides,
        setSlides,
        selectedSlide,
        setSelectedSlide,
    } = useCarousel();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const addSlide = () => {
        const newSlide = {
            id: Date.now(),
            title: `Slide ${slides.length + 1}`,
            image: `https://picsum.photos/800/500?random=${Date.now()}`,
        };

        setSlides((previous) => [...previous, newSlide]);
        setSelectedSlide(slides.length);
    };

    const duplicateSlide = (index: number) => {
        const slide = slides[index];

        if (!slide) return;

        const duplicated = {
            ...slide,
            id: Date.now(),
            title: `${slide.title} Copy`,
        };

        const updated = [...slides];

        updated.splice(index + 1, 0, duplicated);

        setSlides(updated);
    };

    const deleteSlide = (index: number) => {
        if (slides.length <= 1) return;

        const updated = slides.filter((_, i) => i !== index);

        setSlides(updated);

        if (selectedSlide >= updated.length) {
            setSelectedSlide(updated.length - 1);
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

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
        }
    };

    return (
        <div>

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <h2 className="text-lg font-semibold">
                        Slides
                    </h2>

                    <p className="text-xs text-zinc-500">
                        {slides.length} slide{slides.length !== 1 ? "s" : ""}
                    </p>

                </div>

                <button
                    onClick={addSlide}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-sm transition hover:bg-blue-500"
                >
                    +
                </button>

            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={slides.map((slide) => slide.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="space-y-4">

                        {slides.map((slide, index) => (
                            <SortableSlideItem
                                key={slide.id}
                                slide={slide}
                                index={index}
                                selected={selectedSlide === index}
                                onSelect={() =>
                                    setSelectedSlide(index)
                                }
                                onDuplicate={() =>
                                    duplicateSlide(index)
                                }
                                onDelete={() =>
                                    deleteSlide(index)
                                }
                            />
                        ))}

                    </div>
                </SortableContext>
            </DndContext>

        </div>
    );
}