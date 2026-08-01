import Hero from "@/components/home/Hero";
import EditorMockup from "@/components/home/EditorMockup";
import Features from "@/components/home/Features";

export default function HomePage() {
    return (
        <main className="bg-[#09090b]">
            <Hero />
            <EditorMockup />
            <Features />
        </main>
    );
}