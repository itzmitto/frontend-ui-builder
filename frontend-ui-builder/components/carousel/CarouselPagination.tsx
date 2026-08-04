"use client";

type CarouselPaginationProps = {
    show: boolean;
    total: number;
    current: number;
    onSelect: (index: number) => void;
};

export default function CarouselPagination({
    show,
    total,
    current,
    onSelect,
}: CarouselPaginationProps) {
    if (!show || total <= 1) {
        return null;
    }

    return (
        <div className="mt-6 flex justify-center gap-2">

            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                        current === index
                            ? "scale-125 bg-blue-500"
                            : "bg-zinc-600 hover:scale-110 hover:bg-zinc-500"
                    }`}
                />
            ))}

        </div>
    );
}