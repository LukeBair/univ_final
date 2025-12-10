"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const cards = [
    {
        title: "A Lifelong Learner",
        description: "I want to be a teachable person throughout my life. Learning about new random things is something I enjoy.",
        color: "from-[var(--byu-navy)] to-blue-700",
        media: { type: "image", src: "/mountain.jpeg" },
    },
    {
        title: "A Positive Person",
        description: "A positive outlook on life is something that I always want to have. Being happy just makes life that much more fun to me.",
        color: "from-blue-700 to-blue-400",
        media: { type: "image", src: "/firealarmlol.JPG", objectFit: "contain", backgroundColor: "#0a0a0a" },
    },
    {
        title: "Physically Fit",
        description: "I want to be physically active by playing sports like: soccer, wakesurfing, skiing, hiking, among many others.",
        color: "from-blue-400 to-sky-300",
        media: { type: "video", src: "/wakesurfing.mp4" },
    },
    {
        title: "A Hard Worker",
        description: "I want to be a hard worker—someone who can take a problem and solve it, even when others say that it's too difficult or not even possible.",
        color: "from-sky-300 to-white",
        media: { type: "image", src: "/football.jpeg" },
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
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950 -mt-40">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Section Heading (Static relative to viewport, but part of the sticky container) */}
                <div className="absolute left-10 top-20 z-10 p-4 bg-[var(--byu-navy)]/80 backdrop-blur-md rounded-lg border border-white/10">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
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
                            {/* Media Content */}
                            <div
                                className="absolute top-0 left-0 w-full h-1/2 bg-neutral-800 border-b border-white/10 overflow-hidden"
                                style={{ backgroundColor: (card.media as any).backgroundColor }}
                            >
                                {card.media.type === "video" ? (
                                    <VideoPlayer src={card.media.src} />
                                ) : (
                                    <img
                                        src={card.media.src}
                                        alt={card.title}
                                        style={{ objectFit: (card.media.objectFit as any) || "cover" }}
                                        className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
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

function VideoPlayer({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.1; // Really low volume
        }
    }, []);

    return (
        <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={false} // Attempt to play with sound
            playsInline
        />
    );
}
