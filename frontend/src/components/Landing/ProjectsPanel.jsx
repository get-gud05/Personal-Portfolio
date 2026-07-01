import { motion } from "framer-motion";

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

const previewVariants = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.45,
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

function ProjectsPanel({ isVisible }) {
    return (
        <div className="absolute inset-0">

            <div className="grid h-full grid-cols-2">

                <motion.div
                    className="flex flex-col justify-center px-20 text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >

                    <motion.p variants={itemVariants} className="mb-6 text-sm tracking-[0.35em] uppercase">
                        PROJECTS.
                    </motion.p>

                    <motion.h2 variants={itemVariants} className="text-7xl font-black">
                        Personal Portfolio
                    </motion.h2>

                    <motion.p variants={itemVariants} className="mt-10 max-w-md text-lg leading-8 text-red-100">
                        This is where the projects will go.
                    </motion.p>

                </motion.div>

                <motion.div
                    className="flex items-center justify-center bg-neutral-100"
                    variants={previewVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >

                    Screenshot

                </motion.div>

            </div>

        </div>
    );
}

export default ProjectsPanel;
