import Hero from "@/components/home/Hero";
import EditorMockup from "@/components/home/EditorMockup";
import Features from "@/components/home/Features";
import TemplateShowcase from "@/components/home/TemplateShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Footer from "@/components/home/Footer";

export default function HomePage() {
    return (
        <main className="relative overflow-hidden bg-[#09090b] text-white">
            <div className="absolute inset-0 -z-10">

                <div className="background-grid" />

                <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-blue-600/15 blur-[180px]" />

                <div className="absolute right-[-250px] top-[250px] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

                <div className="absolute bottom-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[200px]" />

            </div>

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