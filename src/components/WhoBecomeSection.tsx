"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
    {
        title: "A Lifelong Learner",
        description: "I hope to never stop asking questions. Becoming someone who seeks truth in all fields of study.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "A Compassionate Leader",
        description: "Developing the empathy and skills to lead not just with authority, but with love and understanding.",
        color: "from-cyan-500 to-teal-500",
    },
    {
        title: "A Faithful Disciple",
        description: "Strengthening my foundation so that I can stand firm in my beliefs while lifting others.",
        color: "from-teal-500 to-emerald-500",
    },
    {
        title: "A Skilled Creator",
        description: "Mastering my craft to create things that bring value, beauty, and utility to the world.",
        color: "from-emerald-500 to-green-500",
    },
];

export default function WhoBecomeSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll progress to horizontal translation
    // We want to move the cards container to the left as we scroll down
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Section Heading (Static relative to viewport, but part of the sticky container) */}
                <div className="absolute left-10 top-20 z-10 p-4 bg-neutral-950/80 backdrop-blur-md rounded-lg border border-neutral-800">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-500">
                        Who do I hope to become?
                    </h2>
                    <p className="text-sm text-neutral-400 mt-2">Scroll down to explore the journey &rarr;</p>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-24">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative h-[450px] w-[350px] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-end transition-transform hover:scale-105`}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${card.color}`} />

                            <div className="relative z-10">
                                <div className={`h-2 w-12 mb-4 rounded-full bg-gradient-to-r ${card.color}`} />
                                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{card.description}</p>
                            </div>

                            {/* Photo Placeholder */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 border-b border-white/10 flex items-center justify-center text-xs text-neutral-600 font-mono">
                                [ Photo Area ]
                            </div>
                        </div>
                    ))}

                    {/* Final spacer to ensure last card clears */}
                    <div className="w-[10vw] flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
}
