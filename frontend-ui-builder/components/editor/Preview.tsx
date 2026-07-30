export default function Preview() {
  return (
    <section className="flex flex-1 items-center justify-center bg-zinc-950">

      <div className="w-[700px] rounded-2xl border border-zinc-700 bg-zinc-900 p-10">

        <div className="flex gap-6 overflow-hidden">

          <div className="h-56 w-80 rounded-xl bg-blue-500"></div>

          <div className="h-56 w-80 rounded-xl bg-purple-500"></div>

          <div className="h-56 w-80 rounded-xl bg-pink-500"></div>

        </div>

      </div>

    </section>
  );
}