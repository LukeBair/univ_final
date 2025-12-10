"use client";

import { motion } from "framer-motion";

const serviceCards = [
    {
        icon: "⛪️",
        title: "Religious Service",
        description: "Being able and willing to serve in different positions in the church is something I want to be prepared to do throughout my life."
    },
    {
        icon: "💻",
        title: "Work Related Skills",
        description: "I want to be able to use the skills I learn in my job to help others, through work or separate projects."
    },
    {
        icon: "💡",
        title: "Mentorship",
        description: "Helping other students and people around me learn and grow through difficult times in their lives is one thing that I always strive to do, even if I'm not quite sure how to do it."
    }
];

export default function ServiceSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-24 px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-indigo-400"
                >
                    How can I serve others?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl text-neutral-400"
                >

                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {serviceCards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm hover:border-indigo-500/50 transition-colors"
                    >
                        <div className="text-4xl mb-6">{card.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
