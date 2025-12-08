import HeroSection from "@/components/HeroSection";
import WhyHereSection from "@/components/WhyHereSection";
import WhoBecomeSection from "@/components/WhoBecomeSection";
import ServiceSection from "@/components/ServiceSection";
import CreatorStatement from "@/components/CreatorStatement";

export default function Home() {
    return (
        <main className="flex flex-col bg-neutral-950 min-h-screen selection:bg-indigo-500/30">
            <HeroSection />
            <WhyHereSection />
            <WhoBecomeSection />
            <ServiceSection />
            <CreatorStatement />

            {/* Footer / Scroll hint for bottom */}
            <footer className="py-8 text-center text-neutral-600 text-sm">
                &copy; {new Date().getFullYear()} University Final Project
            </footer>
        </main>
    );
}