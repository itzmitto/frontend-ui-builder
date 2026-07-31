"use client";

import { useCarousel } from "@/context/CarouselContext";
import {
  generateHTML,
  generateCSS,
  generateJS,
} from "@/lib/generators/carouselGenerator";

export default function CodePanel() {
  const { settings } = useCarousel();

  return (
    <aside className="w-96 border-l border-zinc-800 bg-zinc-900 p-5 overflow-auto">
      <h2 className="mb-6 text-xl font-bold">Generated Code</h2>

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 font-semibold">HTML</h3>

          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm">
            <code>{generateHTML(settings)}</code>
          </pre>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">CSS</h3>

          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm">
            <code>{generateCSS(settings)}</code>
          </pre>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">JavaScript</h3>

          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm">
            <code>{generateJS(settings)}</code>
          </pre>
        </div>
      </div>
    </aside>
  );
}