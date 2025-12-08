export default function CreatorStatement() {
    return (
        <section className="min-h-screen py-24 px-4 bg-neutral-950 flex items-center justify-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="border-l-4 border-indigo-500 pl-6 mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Creator Statement</h2>
                    <p className="text-neutral-400 text-sm uppercase tracking-widest">First-Year Foundations</p>
                </div>

                <article className="prose prose-invert prose-lg text-neutral-300">
                    <h3 className="text-white">Why I Chose This Medium</h3>
                    <p>
                        I chose to create an interactive web experience because I believe the web is the most powerful modern canvas for storytelling.
                        Unlike a static essay, a website allows for non-linear exploration and visual depth. The scroll interactions mirror a journey—sometimes smooth,
                        sometimes requiring pause (like the horizontal scroll section), representing the different phases of my first semester.
                    </p>

                    <h3 className="text-white mt-8">Demonstrating Growth</h3>
                    <p>
                        [Your paragraphs about growth go here. Discuss specific challenges you overcame in coding this, or how the project reflects your
                        broader academic journey. Mention specific classes and experiences.]
                    </p>

                    <h3 className="text-white mt-8">Answering Key Questions</h3>
                    <p>
                        <strong>Why am I here?</strong> To merge faith and intellect. This project represents that fusion—using technical skills (code)
                        to express spiritual and personal values.<br /><br />
                        <strong>Who do I hope to become?</strong> A creator who builds with purpose. <br /><br />
                        <strong>How can I serve others?</strong> By sharing what I learn. Open-sourcing this project or helping peers with their own
                        portfolios are small ways I start providing value immediately.
                    </p>

                    <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-500">
                        <p>Created with Next.js, Tailwind CSS, and Framer Motion.</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
