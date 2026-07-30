import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-zinc-800 bg-zinc-950">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-xl font-bold text-white">
                    Frontend UI Builder
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/" className="text-zinc-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/editor" className="text-zinc-300 hover:text-white">
                        Editor
                    </Link>
                    <Link href="/templates" className="text-zinc-300 hover:text-white">
                        Templates
                    </Link>
                    <Link href="/docs" className="text-zinc-300 hover:text-white">
                        Docs
                    </Link>
                </nav>
            </div>
        </header>
    );
}