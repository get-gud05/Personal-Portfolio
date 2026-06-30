import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import SplitBackground from "./SplitBackground";
import HeroPanel from "./HeroPanel";
import AboutPanel from "./AboutPanel";

function HeroScene() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 20,
        mass: 0.5,
    });

    // Hero animation
    const heroOpacity = useTransform(
        smoothProgress,
        [0, 0.45],
        [1, 0]
    );

    const heroY = useTransform(
        smoothProgress,
        [0, 0.45],
        [0, -100]
    );

    const heroScale = useTransform(
        smoothProgress,
        [0, 0.45],
        [1, 0.95]
    );

    // About animation
    const aboutOpacity = useTransform(
        smoothProgress,
        [0.35, 0.65],
        [0, 1]
    );

    const aboutY = useTransform(
        smoothProgress,
        [0.35, 0.65],
        [120, 0]
    );

    return (
        <section
            ref={ref}
            className="relative h-[300vh]"
        >
            <div className="sticky top-0 h-screen overflow-hidden">

                <SplitBackground />

                <motion.div
                    className="absolute inset-0"
                    style={{
                        opacity: heroOpacity,
                        y: heroY,
                        scale: heroScale,
                    }}
                >
                    <HeroPanel />
                </motion.div>

                <motion.div
                    className="absolute inset-0"
                    style={{
                        opacity: aboutOpacity,
                        y: aboutY,
                    }}
                >
                    <AboutPanel />
                </motion.div>

            </div>
        </section>
    );
}

export default HeroScene;