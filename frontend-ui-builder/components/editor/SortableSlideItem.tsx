"use client";

import {
    useSortable,
} from "@dnd-kit/sortable";

import {
    CSS,
} from "@dnd-kit/utilities";

type Props = {
    id: number;
    title: string;
    selected: boolean;
    onClick: () => void;
};

export default function SortableSlideItem({
    id,
    title,
    selected,
    onClick,
}: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id,
    });

    const style = {
        transform: CSS.Transform.toString(
            transform
        ),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={onClick}
            className={`cursor-grab rounded-lg border p-3 ${
                selected
                    ? "border-blue-500 bg-zinc-800"
                    : "border-zinc-700 bg-zinc-900"
            }`}
        >
            {title}
        </div>
    );
}