"use client";

type Props = {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

export default function Switch({
    label,
    checked,
    onChange,
}: Props) {
    return (
        <label className="flex items-center justify-between">
            <span className="text-sm text-zinc-300">
                {label}
            </span>

            <input
                type="checkbox"
                checked={checked}
                onChange={(e) =>
                    onChange(e.target.checked)
                }
            />
        </label>
    );
}