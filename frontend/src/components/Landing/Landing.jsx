import { motion, useMotionValueEvent, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

import SplitBackground from "./SplitBackground";
import HeroPanel from "./HeroContent";
import AboutPanel from "./AboutContent";
import ProjectsPanel from "./ProjectsPanel";

function Landing() {
    const ref = useRef(null);
    const [activePanel, setActivePanel] = useState("hero");

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
        [0.3, 0.48, 0.62, 0.82],
        [0, 1, 1, 0]
    );

    const aboutY = useTransform(
        smoothProgress,
        [0.3, 0.48, 0.62, 0.82],
        [120, 0, 0, -100]
    );

    const aboutScale = useTransform(
        smoothProgress,
        [0.62, 0.82],
        [1, 0.95]
    );

    // Projects animation
    const projectsOpacity = useTransform(
        smoothProgress,
        [0.68, 0.88],
        [0, 1]
    );

    const projectsY = useTransform(
        smoothProgress,
        [0.68, 0.88],
        [120, 0]
    );

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (latest < 0.35) {
            setActivePanel("hero");
        } else if (latest < 0.65) {
            setActivePanel("about");
        } else {
            setActivePanel("projects");
        }
    });

    return (
        <section
            ref={ref}
            className="relative h-[500vh]"
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
                        scale: aboutScale,
                    }}
                >
                    <AboutPanel showContent={activePanel === "about"} />
                </motion.div>

                <motion.div
                    className="absolute inset-0"
                    style={{
                        opacity: projectsOpacity,
                        y: projectsY,
                    }}
                >
                    <ProjectsPanel isVisible={activePanel === "projects"} />
                </motion.div>

            </div>
        </section>
    );
}

export default Landing;
