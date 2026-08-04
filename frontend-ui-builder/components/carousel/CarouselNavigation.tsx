"use client";

type CarouselNavigationProps = {
    show: boolean;
    onPrevious: () => void;
    onNext: () => void;
};

export default function CarouselNavigation({
    show,
    onPrevious,
    onNext,
}: CarouselNavigationProps) {
    if (!show) {
        return null;
    }

    return (
        <div className="mt-8 flex justify-center gap-4">

            <button
                onClick={onPrevious}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xl transition-all duration-300 hover:scale-110 hover:bg-zinc-700"
            >
                ←
            </button>

            <button
                onClick={onNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xl transition-all duration-300 hover:scale-110 hover:bg-zinc-700"
            >
                →
            </button>

        </div>
    );
}