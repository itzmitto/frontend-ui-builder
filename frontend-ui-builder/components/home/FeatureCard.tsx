"use client";

type Props = {
    icon: string;
    title: string;
    description: string;
};

export default function FeatureCard({
    icon,
    title,
    description,
}: Props) {
    return (
        <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
                {icon}
            </div>

            <h3 className="text-xl font-semibold text-white">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
                {description}
            </p>
        </div>
    );
}