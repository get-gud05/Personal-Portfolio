import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

function Intro() {
    return (
        <motion.section
            id="intro"
            className="min-h-screen"
            initial={{
                opacity: 0,
                y: 100,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.35,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
        >

            <div className="grid min-h-screen grid-cols-2">

                <div className="bg-red-500 text-white flex flex-col justify-center px-20">

                    <p className="uppercase tracking-[0.35em] text-sm mb-6">
                        ABOUT.
                    </p>

                    <h2 className="text-7xl font-black leading-none">
                        Akshat
                        <br />
                        <span className="text-black">Dangwal.</span>
                    </h2>

                    <p className="mt-10 max-w-md text-lg leading-8 text-red-100">
                        Competitive Programmer.
                        <br />
                        Full Stack Developer.
                        <br />
                        Currently learning LLMs,
                        Retrieval-Augmented Generation,
                        and Artificial Intelligence.
                    </p>

                    <a
                        href="/Resume.pdf"
                        className="
                        mt-12
                        w-fit
                        border-2
                        border-white
                        px-8
                        py-4
                        font-semibold
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-red-500
                        "
                    >
                        View Resume →
                    </a>

                </div>

                <SocialLinks />

            </div>
        </motion.section>
    );
}

export default Intro;