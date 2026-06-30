import { motion } from "framer-motion";
import SocialLinks from "../Social/SocialLinks";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function AboutPanel({ showContent }) {
    return (
        <div className="absolute inset-0">

            <div className="grid h-full grid-cols-2">

                <motion.div
                    className="
                    flex
                    flex-col
                    justify-center
                    px-20
                    text-white
                    "
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="mb-6 text-sm tracking-[0.35em] uppercase">
                        ABOUT.
                    </motion.p>

                    <motion.h2 variants={itemVariants} className="text-7xl font-black">
                        Akshat
                        <br />
                        <span className="text-black">
                            Dangwal.
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="mt-10 max-w-md text-lg leading-8 text-red-100">

                        Competitive Programmer.

                        <br />

                        Full Stack Developer.

                        <br />

                        Learning LLMs, RAG & AI.

                    </motion.p>

                    <motion.a variants={itemVariants}
                        href="/Resume.pdf"
                        className="
                        mt-12
                        w-fit
                        border-2
                        border-white
                        px-8
                        py-4
                        font-semibold
                        transition
                        hover:bg-white
                        hover:text-red-500
                        "
                    >
                        View Resume →
                    </motion.a>

                </motion.div>

                <SocialLinks isVisible={showContent} />

            </div>

        </div>
    );
}

export default AboutPanel;
