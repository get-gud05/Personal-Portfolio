import SocialCard from "./SocialCard";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {
        transition: {
            staggerChildren: 0.06,
            staggerDirection: -1,
        },
    },
    visible: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.18,
        },
    },
};

const linkVariants = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

const socials = [
    {
        title: "GitHub",
        subtitle: "Open Source & Personal Projects",
        href: "https://github.com/get-gud05",
    },
    {
        title: "LinkedIn",
        subtitle: "Professional Experience",
        href: "https://www.linkedin.com/in/akshat-dangwal-0682a8415/",
    },
    {
        title: "Codeforces",
        subtitle: "Competitive programming",
        href: "https://codeforces.com/profile/get-gud",
    },
    {
        title: "LeetCode",
        subtitle: "Problem solving",
        href: "https://leetcode.com/u/get-gud/",
    },
    {
        title: "CodeChef",
        subtitle: "Programming contests",
        href: "https://www.codechef.com/users/get_gud",
    },
];

function SocialLinks({ isVisible }) {
    return (
        <motion.div
            className="bg-neutral-100 flex flex-col justify-center px-20 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >

            {socials.map((social) => (

                <motion.div
                    key={social.title}
                    variants={linkVariants}
                >
                    <SocialCard {...social} />
                </motion.div>

            ))}

        </motion.div>
    );
}

export default SocialLinks;
