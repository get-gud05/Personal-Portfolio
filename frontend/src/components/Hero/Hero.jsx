import { motion, useScroll, useTransform } from "framer-motion";
import SplitBackground from "./SplitBackground";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
      scrollYProgress,
      [0, 0.25],
      [1, 0]
  );

  const scale = useTransform(
      scrollYProgress,
      [0, 0.25],
      [1, 0.92]
  );

  const y = useTransform(
      scrollYProgress,
      [0, 0.25],
      [0, -80]
  );

  return (
    <motion.section
        className="relative h-screen overflow-hidden"
        style={{
            opacity,
            scale,
            y,
        }}
    >

      <SplitBackground />

      <div className="relative z-10 h-full">

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <h1 className="text-[12rem] font-black leading-none">
            AK
            <br />
            SHAT<span className="text-red-500">.</span>
          </h1>

        </div>

        <ScrollIndicator />

      </div>

    </motion.section>
  );
}

export default Hero;