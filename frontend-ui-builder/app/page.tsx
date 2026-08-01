import Hero from "@/components/home/Hero";
import EditorMockup from "@/components/home/EditorMockup";
import Features from "@/components/home/Features";
import TemplateShowcase from "@/components/home/TemplateShowcase";
import HowItWorks from "@/components/home/HowItWorks";

export default function HomePage() {
    return (
        <main className="bg-[#09090b]">
            <Hero />
            <EditorMockup />
            <Features />
            <TemplateShowcase />
            <HowItWorks />
        </main>
    );
}