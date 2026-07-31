"use client";

type Props = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

export default function NumberInput({
    label,
    value,
    onChange,
}: Props) {
    return (
        <div className="space-y-2">
            <label className="block text-sm text-zinc-400">
                {label}
            </label>

            <input
                type="number"
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none transition focus:border-blue-500"
            />
        </div>
    );
}