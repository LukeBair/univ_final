import HeroSection from "@/components/HeroSection";
import WhyHereSection from "@/components/WhyHereSection";
import WhoBecomeSection from "@/components/WhoBecomeSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
    return (
        <main className="flex flex-col bg-[var(--background)] min-h-screen selection:bg-blue-500/30">
            <HeroSection />
            <WhyHereSection />
            <WhoBecomeSection />
            <ServiceSection />

            {/* Footer / Scroll hint for bottom */}
            <footer className="relative py-20 text-center text-neutral-400 text-sm overflow-hidden">
                {/* Background Footer Image */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
                </div>

                <div className="relative z-10">
                    &copy; {new Date().getFullYear()} University Final Project
                </div>
            </footer>
        </main>
    );
}