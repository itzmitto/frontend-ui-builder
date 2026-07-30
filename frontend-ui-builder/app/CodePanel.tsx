export default function CodePanel() {
    return (
        <aside className="w-96 border-l border-zinc-800 bg-zinc-900">

            <div className="border-b border-zinc-800 p-4">
                <h2 className="font-bold">
                    Generated Code
                </h2>
            </div>

            <div className="p-4">

                <div className="mb-6">

                    <h3 className="mb-2 font-semibold">
                        HTML
                    </h3>

                    <pre className="rounded bg-zinc-950 p-3 text-sm">
                        {`<div class="carousel"></div>`}
                    </pre>

                </div>

                <div className="mb-6">

                    <h3 className="mb-2 font-semibold">
                        CSS
                    </h3>

                    <pre className="rounded bg-zinc-950 p-3 text-sm">
                        {`.carousel{
display:flex;
}`}
                    </pre>

                </div>

                <div>

                    <h3 className="mb-2 font-semibold">
                        JavaScript
                    </h3>

                    <pre className="rounded bg-zinc-950 p-3 text-sm">
                        {`console.log("Carousel");`}
                    </pre>

                </div>

            </div>

        </aside>
    );
}