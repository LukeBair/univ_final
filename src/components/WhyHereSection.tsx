"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyHereSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Text moves slower (smaller range)
    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Images move faster (larger range) and stagger slightly if needed
    // We'll group them or give them separate transforms
    const yImages = useTransform(scrollYProgress, [0, 1], [-100, -400]);

    return (
        <section ref={containerRef} className="min-h-[200vh] flex items-start justify-center pt-0 pb-20 relative overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative top-0">

                {/* Text Content - Sticky-ish or just slow moving */}
                <div className="sticky top-4 min-h-[50vh]">
                    <motion.div style={{ y: yText }} className="z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-400 mt-8">Why am I here?</h2>
                        <div className="space-y-6 text-lg text-neutral-300">
                            <p className="bg-neutral-900/50 p-6 rounded-lg backdrop-blur-sm border border-neutral-800">
                                I believe I am here to discover my potential and align my passions with a greater purpose.
                                BYU provides a unique environment where secular learning and spiritual growth intertwine.
                            </p>
                            <p className="bg-neutral-900/50 p-6 rounded-lg backdrop-blur-sm border border-neutral-800">
                                It&#39;s not just about the degree; it&#39;s about becoming a disciple-scholar.
                                Finding my community and learning to contribute to something bigger than myself.
                                <br /><br />
                                Every class, every interaction is a chance to refine who I am.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Content - Multiple scrolling images */}
                <motion.div style={{ y: yImages }} className="flex flex-col gap-8 w-full">
                    {/* Image 1 */}
                    <div className="relative h-[300px] w-full rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-700 dashed flex items-center justify-center group rotate-2">
                        <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/10 transition-colors" />
                        <p className="text-neutral-500 font-mono text-center px-4">
                            [ Campus View ]
                        </p>
                    </div>

                    {/* Image 2 */}
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-700 dashed flex items-center justify-center group -rotate-1 translate-x-4">
                        <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/10 transition-colors" />
                        <p className="text-neutral-500 font-mono text-center px-4">
                            [ Study Group / Library ]
                        </p>
                    </div>

                    {/* Image 3 */}
                    <div className="relative h-[350px] w-full rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-700 dashed flex items-center justify-center group rotate-1 -translate-x-2">
                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors" />
                        <p className="text-neutral-500 font-mono text-center px-4">
                            [ Mentorship Moment ]
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl mx-auto" />
            <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl mx-auto" />
        </section>
    );
}
