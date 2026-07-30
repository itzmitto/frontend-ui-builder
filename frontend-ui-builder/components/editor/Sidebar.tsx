export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-900 p-5">
      <h2 className="mb-6 text-xl font-bold">
        Editor
      </h2>

      <div className="space-y-3">

        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left hover:bg-zinc-700">
          Templates
        </button>

        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left hover:bg-zinc-700">
          Slides
        </button>

        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left hover:bg-zinc-700">
          Navigation
        </button>

        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left hover:bg-zinc-700">
          Pagination
        </button>

        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left hover:bg-zinc-700">
          Colors
        </button>

      </div>
    </aside>
  );
}