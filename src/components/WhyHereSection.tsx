"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyHereSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Images slide up as we scroll through the pinned section
    // Starting slightly lower and ending higher to pass through view
    const yImages = useTransform(scrollYProgress, [0, 1], ["10%", "-125%"]);

    // Text opacity - fade out at the very end
    const opacityText = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        // Outer container defines the total scroll distance (450vh = 4.5 screens worth of scrolling)
        <section ref={containerRef} className="relative h-[450vh]">
            {/* Sticky container holds the viewport view "still" */}
            <div className="sticky top-0 h-screen flex items-start justify-center pt-20 overflow-hidden">

                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start h-full">

                    {/* Text Content - Static but fades out at end */}
                    <motion.div style={{ opacity: opacityText }} className="z-10 mt-12 md:mt-0">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white mt-8">Why am I here?</h2>
                        <div className="space-y-6 text-lg text-neutral-300">
                            <p className="bg-[var(--byu-navy)]/40 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                                The reason I'm here really wasn't to interesting, it was one of 2 places that I got accepted to.
                                However, I picked BYU because of the community and because of the academic rigor and standards that BYU displays.
                            </p>
                            <p className="bg-[var(--byu-navy)]/40 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                                I'm still growing into my place at BYU, but I have undoubtly have had a great experience so far, and have been learning a lot.
                                I look forward to the winter semester and future semesters at BYU.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Content - Sliding Images */}
                    <motion.div style={{ y: yImages }} className="flex flex-col gap-24 w-full will-change-transform">
                        {/* Image 1 */}
                        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-700 dashed flex items-center justify-center group rotate-2 shadow-2xl">
                            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10" />
                            <img src="/Y.jpg" alt="the Y" className="absolute inset-0 w-full h-full object-cover" />
                        </div>

                        {/* Image 2 */}
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-700 dashed flex items-center justify-center group -rotate-1 translate-x-4 shadow-2xl">
                            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10" />
                            <img src="/generalconference.jpg" alt="General Conference" className="absolute inset-0 w-full h-full object-cover" />
                        </div>

                        {/* Image 3 */}
                        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-700 dashed flex items-center justify-center group rotate-1 -translate-x-2 shadow-2xl">
                            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10" />
                            <img src="/footballgame.jpeg" alt="Football Game" className="absolute inset-0 w-full h-full object-cover" />
                        </div>

                        {/* Image 4 */}
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-700 dashed flex items-center justify-center group -rotate-2 translate-x-3 shadow-2xl">
                            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10" />
                            <img src="/boatingtrip.jpeg" alt="Boating Trip" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </motion.div>

                </div>

                {/* Decorative background elements pinned with the container */}
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl mx-auto -z-10" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl mx-auto -z-10" />
            </div>
        </section>
    );
}
