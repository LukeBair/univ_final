"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Parallax Element */}
            {/* Background Parallax Element */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-navy-900/60 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Actual Image */}

            </motion.div>

            <div className="relative z-10 text-center px-4">
                {/* Cosmo Watermark */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
                    animate={{ opacity: 0.15, scale: 1, rotate: 20 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-auto -z-10 pointer-events-none select-none"
                >
                    <img src="/cosmo.svg" alt="" className="w-full h-full object-contain" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
                >
                    My University Journey
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="mt-6 text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto font-light"
                >
                    Reflecting on purpose, identity, and service.
                </motion.p>



                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 flex justify-center"
                >
                    <div className="animate-bounce text-neutral-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
