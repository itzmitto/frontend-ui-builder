import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-blue-400">
          Visual UI Builder
        </p>

        <h1 className="mb-6 text-6xl font-bold leading-tight">
          Build beautiful frontend components visually.
        </h1>

        <p className="mb-8 text-lg text-zinc-400">
          Create carousels, sliders and many other UI components without writing
          code. Export clean HTML, CSS and JavaScript with one click.
        </p>

        <div className="flex gap-4">
          <Link
            href="/editor"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
          >
            Open Editor
          </Link>

          <Link
            href="/templates"
            className="rounded-lg border border-zinc-700 px-6 py-3 hover:bg-zinc-900"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </main>
  );
}