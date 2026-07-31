"use client";

type Props = {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
    onChange: (value: number) => void;
};

export default function Slider({
    label,
    value,
    min,
    max,
    step = 1,
    suffix = "",
    onChange,
}: Props) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-zinc-400">
                    {label}
                </span>

                <span className="text-zinc-500">
                    {value}{suffix}
                </span>
            </div>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="w-full"
            />
        </div>
    );
}