import Hero from "@/components/home/Hero";
import EditorMockup from "@/components/home/EditorMockup";
import Features from "@/components/home/Features";
import TemplateShowcase from "@/components/home/TemplateShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Footer from "@/components/home/Footer";

export default function HomePage() {
    return (
        <main className="bg-[#09090b]">
            <Hero />
            <EditorMockup />
            <Features />
            <TemplateShowcase />
            <HowItWorks />
            <Stats />
            <Footer />
        </main>
    );
}